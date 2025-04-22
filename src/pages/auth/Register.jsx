import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import Banner from '../component/banner/Banner';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Registration successful! Redirecting to login...');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setErrorMessage(data.message || 'Registration failed');
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <Banner />
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <h1 className="font-bold text-center text-2xl mb-5">Create an Account</h1>
          <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div className="px-5 py-7">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-semibold text-sm text-gray-600 pb-1 block">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="border rounded-lg px-3 py-2 mt-1 mb-3 text-sm w-full"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-sm text-gray-600 pb-1 block">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="border rounded-lg px-3 py-2 mt-1 mb-3 text-sm w-full"
                    />
                  </div>
                </div>
                
                <label className="font-semibold text-sm text-gray-600 pb-1 block">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border rounded-lg px-3 py-2 mt-1 mb-3 text-sm w-full"
                />
                
                <label className="font-semibold text-sm text-gray-600 pb-1 block">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="border rounded-lg px-3 py-2 mt-1 mb-3 text-sm w-full"
                />
                
                <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength="6"
                  className="border rounded-lg px-3 py-2 mt-1 mb-3 text-sm w-full"
                />
                
                <label className="font-semibold text-sm text-gray-600 pb-1 block">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  minLength="6"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
                
                {errorMessage && (
                  <div className="text-red-500 text-sm mb-3">{errorMessage}</div>
                )}
                
                {successMessage && (
                  <div className="text-green-500 text-sm mb-3">{successMessage}</div>
                )}
                
                <button
                  type="submit"
                  className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                >
                  <span className="inline-block mr-2">Register</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                </button>
              </form>
              
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <a href="/login" className="text-blue-500 hover:text-blue-600">
                    Login here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;