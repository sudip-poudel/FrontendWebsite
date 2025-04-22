// import React, { useEffect, useState } from "react";
// import axios from 'axios'

// const servicesList = ["Haircut", "Coloring", "Styling", "Shampoo", "Treatment"];
// const staffList = ["Alice", "Bob", "Charlie", "Diana"];

// export default function AppointmentForm({ goBack, location }) {


//   console.log('lcoation dfkjsdkfbdsfb', location)

//   const [staffList , setStaffList] = useState([])


//   console.log('stafff list', staffList)

//   const [formData, setFormData] = useState({
//     services: [],
//     staff: "",
//     date: "",
//     time: "",
//     name: "",
//     email: "",
//     phone: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };


//   useEffect(() => {
//     const fetchStaffList = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/client/staffList/${location}`);
//         console.log("Staff response:", response.data);
//         setStaffList(response.data.message);
//       } catch (error) {
//         console.error("Error fetching staff list:", error);
//       }
//     };

//     if (location) {
//       fetchStaffList();
//     }
//   }, [location]);

//   const handleServiceChange = (service) => {
//     const updatedServices = formData.services.includes(service)
//       ? formData.services.filter((s) => s !== service)
//       : [...formData.services, service];
//     setFormData({ ...formData, services: updatedServices });
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (formData.services.length === 0) newErrors.services = "Select at least one service.";
//     if (!formData.staff) newErrors.staff = "Please select a staff member.";
//     if (!formData.date) newErrors.date = "Please choose a date.";
//     if (!formData.time) newErrors.time = "Please choose a time.";
//     if (!formData.name) newErrors.name = "Name is required.";
//     if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email required.";
//     if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = "Valid 10-digit phone required.";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       console.log("Submitted!", formData);
//       alert("Appointment submitted!");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 space-y-6 bg-white shadow-lg rounded-2xl mt-10">

//       {/* Go Back Arrow */}
//       <div className="flex items-center mb-2 cursor-pointer text-gray-600 hover:text-pink-500" onClick={goBack}>
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//         </svg>
//         <span className="text-lg font-medium">Back to Location</span>
//       </div>

//       <h2 className="text-2xl font-bold text-center">Book an Appointment</h2>

//       {/* Services */}
//       <div>
//         <label className="font-semibold">Select Services:</label>
//         <div className="grid grid-cols-2 gap-2 mt-2">
//           {servicesList.map((service) => (
//             <label key={service} className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 checked={formData.services.includes(service)}
//                 onChange={() => handleServiceChange(service)}
//                 className="accent-pink-500"
//               />
//               <span>{service}</span>
//             </label>
//           ))}
//         </div>
//         {errors.services && <p className="text-red-500 text-sm">{errors.services}</p>}
//       </div>

//       {/* Staff */}
//       <div>
//         <label className="font-semibold">Select Staff:</label>
//         <select
//           name="staff"
//           value={formData.staff}
//           onChange={handleChange}
//           className="w-full mt-2 p-2 border rounded-md"
//         >
//           <option value="">-- Choose Staff --</option>
//           {staffList.map((staff) => (
//             <option key={staff} value={staff}>
//               {staff}
//             </option>
//           ))}
//         </select>
//         {errors.staff && <p className="text-red-500 text-sm">{errors.staff}</p>}
//       </div>

//       {/* Date & Time */}
//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <label className="font-semibold">Date:</label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             className="w-full mt-2 p-2 border rounded-md"
//           />
//           {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
//         </div>
//         <div>
//           <label className="font-semibold">Time:</label>
//           <input
//             type="time"
//             name="time"
//             value={formData.time}
//             onChange={handleChange}
//             className="w-full mt-2 p-2 border rounded-md"
//           />
//           {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
//         </div>
//       </div>

//       {/* Personal Info */}
//       <div className="grid grid-cols-1 gap-4">
//         <div>
//           <label className="font-semibold">Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full mt-2 p-2 border rounded-md"
//           />
//           {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//         </div>
//         <div>
//           <label className="font-semibold">Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full mt-2 p-2 border rounded-md"
//           />
//           {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//         </div>
//         <div>
//           <label className="font-semibold">Phone:</label>
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full mt-2 p-2 border rounded-md"
//           />
//           {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//         </div>
//       </div>

//       {/* Submit Button */}
//       <div className="text-center">
//         <button
//           type="submit"
//           className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-xl"
//         >
//           Confirm Appointment
//         </button>
//       </div>
//     </form>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";

const servicesList = ["Haircut", "Coloring", "Styling", "Shampoo", "Treatment"];

export default function AppointmentForm({ goBack, location }) {
  const [staffList, setStaffList] = useState([]);
  const [formData, setFormData] = useState({
    services: [],
    staff: "",
    date: "",
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchStaffList = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/client/staffList/${location}`);
        setStaffList(response.data.message);
      } catch (error) {
        console.error("Error fetching staff list:", error);
      }
    };

    if (location) {
      fetchStaffList();
    }
  }, [location]);

  const handleServiceChange = (service) => {
    const updatedServices = formData.services.includes(service)
      ? formData.services.filter((s) => s !== service)
      : [...formData.services, service];
    setFormData({ ...formData, services: updatedServices });
  };

  const validate = () => {
    const newErrors = {};
    if (formData.services.length === 0) newErrors.services = "Select at least one service.";
    if (!formData.staff) newErrors.staff = "Please select a staff member.";
    if (!formData.date) newErrors.date = "Please choose a date.";
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email required.";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = "Valid 10-digit phone required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await axios.post("http://localhost:4000/client/appointment", formData);
        alert("Appointment booked successfully! You can pay at the salon after service via Khalti.");
        setFormData({
          services: [],
          staff: "",
          date: "",
          name: "",
          email: "",
          phone: "",
        });
      } catch (error) {
        alert("Failed to book appointment.");
        console.error(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 space-y-6 bg-white shadow-lg rounded-2xl mt-10">
      <div
        className="flex items-center mb-2 cursor-pointer text-gray-600 hover:text-black"
        onClick={goBack}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-lg font-medium">Back to Location</span>
      </div>

      <h2 className="text-2xl font-bold text-center">Book an Appointment</h2>

      {/* Services */}
      <div>
        <label className="font-semibold">Select Services:</label>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {servicesList.map((service) => (
            <label key={service} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.services.includes(service)}
                onChange={() => handleServiceChange(service)}
                className="accent-pink-500"
              />
              <span>{service}</span>
            </label>
          ))}
        </div>
        {errors.services && <p className="text-red-500 text-sm">{errors.services}</p>}
      </div>

      {/* Staff */}
      <div>
        <label className="font-semibold">Select Staff:</label>
        <select
          name="staff"
          value={formData.staff}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        >
          <option value="">-- Choose Staff --</option>
          {staffList.map((staff) => (
            <option key={staff.id} value={staff.name}>
              {staff.name}
            </option>
          ))}
        </select>
        {errors.staff && <p className="text-red-500 text-sm">{errors.staff}</p>}
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
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
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
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
      </div>

      {/* Submit */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-[#39464E] hover:bg-[#2c373d] text-white font-bold px-6 py-2 rounded-xl"
        >
          Confirm Appointment
        </button>
      </div>

    </form>
  );
}
