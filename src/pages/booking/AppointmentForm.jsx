import React, { useEffect, useState } from "react";
import axios from "axios";


export default function AppointmentForm({ goBack, branchId }) {
  const [staffList, setStaffList] = useState([]);
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    staffId: "",
    date: "",
    name: "",
    serviceIds: [],
    email: "",
    phone: "",
    time: "",
    branchId: "",

  });

  const [totalPrice, setTotalPrice] = useState(0)
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchStaffList = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/client/staffList/${branchId}`
        );
        setStaffList(response.data.message);
      } catch (error) {
        console.error("Error fetching staff list:", error);
      }
    };

    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/client/services"
        );
        setServices(response.data.message);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    if (branchId) {
      fetchStaffList();
      fetchServices();
    }
  }, [branchId]);

  const handleServiceChange = (serviceId) => {
    const updatedServices = formData.serviceIds.includes(serviceId)
      ? formData.serviceIds.filter((s) => s !== serviceId)
      : [...formData.serviceIds, serviceId];
    console.log("updated services", updatedServices);
    setTotalPrice(services?.filter(service => updatedServices.includes(service.id)).reduce((acc, service) => acc + service.price, 0))
    setFormData({ ...formData, serviceIds: updatedServices });
  };

  const validate = () => {
    const newErrors = {};
    if (formData.serviceIds.length === 0)
      newErrors.services = "Select at least one service.";
    if (!formData.staffId) newErrors.staff = "Please select a staff member.";
    if (!formData.date) newErrors.date = "Please choose a date.";
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email required.";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Valid 10-digit phone required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        formData.branchId = branchId;
        const respone = await axios.post("http://localhost:4000/client/booking", formData);

        if (respone)
          alert(
            "Appointment booked successfully! You can pay at the salon after service via Khalti."
          );
        setFormData({
          serviceIds: [],
          staffId: "",
          date: "",
          name: "",
          email: "",
          phone: "",
          time: "",
          branchId: "",
        });
      } catch (error) {
        alert("Failed to book appointment.");
        console.error(error);
      }
    }
  };
  const handlePayment = async (e, totalPrice) => {
    e.preventDefault();
    if (!validate()) return
    try {
      console.log("requesting")
      formData.branchId = branchId
      const query = new URLSearchParams(formData).toString()
      const url = `${import.meta.env.VITE_BASE_URL}/payment-success?${query}`;
      const response = await axios.post('http://localhost:4000/client/initiate-payment', {
        amount: totalPrice * 100, // Amount in paisa (e.g., 1000 paisa = NPR 10)
        purchase_order_id: `${formData.branchId}-${formData.name}`,
        purchase_order_name: formData.name,
        return_url: url,
        data: formData,
      });

      console.log(response.data)

      // Redirect user to Khalti payment page
      window.location.href = response.data.payment_url;
    } catch (error) {
      console.error('Payment initiation failed:', error);
      alert('Failed to initiate payment.');
    }

  };

  return (
    services &&
    services.length > 0 && (
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto p-6 space-y-6 bg-white shadow-lg rounded-2xl mt-10"
      >
        <div
          className="flex items-center mb-2 cursor-pointer text-gray-600 hover:text-black"
          onClick={goBack}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-lg font-medium">Back to Location</span>
        </div>

        <h2 className="text-2xl font-bold text-center">Book an Appointment</h2>

        {/* Services */}
        <div>
          <label className="font-semibold">Select Services:</label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {services.map((service) => (
              <label key={service.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={() => handleServiceChange(service.id)}
                  checked={formData.serviceIds.includes(service.id)}
                  className="accent-pink-500"
                />
                <span>{service.service_name}</span>
              </label>
            ))}
          </div>
          {errors.services && (
            <p className="text-red-500 text-sm">{errors.services}</p>
          )}
        </div>

        {/* Staff */}
        <div>
          <label className="font-semibold">Select Staff:</label>
          <select
            name="staffId"
            value={formData.staffId}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded-md"
          >
            <option value="">-- Choose Staff --</option>
            {staffList.map((staff) => (
              <option key={staff.id} value={staff.id}>
                {staff.name}
              </option>
            ))}
          </select>
          {errors.staff && (
            <p className="text-red-500 text-sm">{errors.staff}</p>
          )}
        </div>

        {/* Date */}
        <div>
          <label className="font-semibold">Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded-md"
          />
          {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
        </div>

        {/* Time */}
        <div>
          <label className="font-semibold">Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded-md"
          />
          {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
        </div>

        {/* Personal Info */}
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="font-semibold">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="font-semibold">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="font-semibold">Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
        </div>
        <div className="flex gap-4">
          <h3> Total Price:</h3>
          <h3> {totalPrice} </h3>
        </div>


        {/* Submit */}
        <div className="flex flex-row justify-between text-center">

          <button
            type="button"
            className="bg-[#39464E] hover:bg-[#2c373d] text-white font-bold px-6 py-2 rounded-xl"
            onClick={(e) => handlePayment(e, totalPrice)}
          >
            Pay now
          </button>
          <button
            type="submit"
            className="bg-[#39464E] hover:bg-[#2c373d] text-white font-bold px-6 py-2 rounded-xl"
          >
            Confirm Appointment
          </button>
        </div>
      </form>
    )
  );
}
