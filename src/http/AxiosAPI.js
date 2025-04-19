import axios from 'axios';
import { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({
    location: "",
    services: [],
    staff: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: ""
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleServicesChange = (e) => {
    const { value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      services: [...prevState.services, value]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Change the API URL to the correct port (4001 for client)
    try {
      const response = await axios.post('http://localhost:4001/client/booking', formData);
      console.log("Booking successful:", response.data);
      setSuccessMessage('Booking successful! Your appointment has been confirmed.');
      setErrorMessage('');
      // Optionally redirect or clear the form here
    } catch (error) {
      console.error("Booking failed:", error.response?.data || error.message);
      setErrorMessage('Booking failed. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
        <input 
          type="text" 
          id="location" 
          name="location" 
          value={formData.location} 
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          required 
        />
      </div>

      <div>
        <label htmlFor="services" className="block text-sm font-medium text-gray-700">Services</label>
        <select 
          name="services" 
          onChange={handleServicesChange} 
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select a service</option>
          <option value="Haircut">Haircut</option>
          <option value="Shampoo">Shampoo</option>
          <option value="Coloring">Coloring</option>
          {/* Add more services here */}
        </select>
      </div>

      <div>
        <label htmlFor="staff" className="block text-sm font-medium text-gray-700">Staff</label>
        <input 
          type="text" 
          id="staff" 
          name="staff" 
          value={formData.staff} 
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          required 
        />
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
        <input 
          type="date" 
          id="date" 
          name="date" 
          value={formData.date} 
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          required 
        />
      </div>

      <div>
        <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
        <input 
          type="time" 
          id="time" 
          name="time" 
          value={formData.time} 
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          required 
        />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          required 
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          required 
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
        <input 
          type="text" 
          id="phone" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          required 
        />
      </div>

      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
      {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Book Now</button>
    </form>
  );
}

export default BookingForm;
