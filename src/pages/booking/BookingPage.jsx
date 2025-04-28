import React, { useEffect, useState } from "react";
import AppointmentForm from "./AppointmentForm";
import { Link } from "react-router-dom";
import axios from "axios";

const LocationSelector = ({
  locations,
  selectedLocation,
  onLocationChange,
}) => {
  console.log("locations", locations);
  return (
    <div className="flex flex-col gap-10">
      {locations.map((location) => (
        <div key={location.id} className="flex items-start gap-5">
          <input
            type="radio"
            value={location.id}
            id={location.id}
            checked={selectedLocation === location.id}
            onChange={() => onLocationChange(location.id)}
            className="mt-2"
          />
          <label htmlFor={location.id} className="flex-1 cursor-pointer">
            <div className="text-[32px] text-black mb-[5px] max-sm:text-2xl">
              {location.branchName}
            </div>
            <div className="text-[28px] italic font-light text-black max-sm:text-xl">
              {location.address}
            </div>
          </label>
        </div>
      ))}
    </div>
  );
};

const BookingPage = () => {
  const [selectedLocation, setSelectedLocation] = useState("newroad");
  const [showForm, setShowForm] = useState(false);
  const [branches, setBranches] = useState([]);
  //fetch all the branches from the database
  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/client/branches"
        );
        setBranches(response.data.message);
      } catch (error) {
        console.error("Error fetching branches:", error);
      }
    };
    fetchBranches();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(true); // Show AppointmentForm after Continue
    setTimeout(() => {
      document
        .getElementById("appointment-form")
        .scrollIntoView({ behavior: "smooth" });
    }, 100); // scroll to form
  };

  return (
    branches &&
    branches.length > 0 && (
      <main className="min-h-screen flex flex-col items-center bg-[#f3f3f3] px-5 py-[45px]">
        <style>
          {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&family=La+Belle+Aurore&display=swap');
        `}
        </style>
        <h1 className="font-la-belle-aurore text-[#222] text-6xl text-center mb-[30px] max-md:text-5xl max-sm:text-4xl">
          Secure your booking now
        </h1>

        {!showForm && (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[631px] rounded bg-white p-5 max-md:max-w-[90%]"
          >
            <div className="flex flex-row justify-between text-right text-[32px] text-black mb-5 max-sm:text-2xl">
              <h3>Select Branch: </h3>
              <Link to="/login" className="text-black hover:text-gray-300">
                Log in
              </Link>
            </div>
            <div className="h-px bg-black mb-5" />
            <div className="mb-10">
              <LocationSelector
                locations={branches}
                selectedLocation={selectedLocation}
                onLocationChange={setSelectedLocation}
              />
            </div>
            <button
              type="submit"
              className="w-full text-white text-[28px] font-bold text-center bg-[#39464E] p-[11px] rounded-[5px] max-sm:text-2xl hover:bg-[#2c373d] transition-colors"
            >
              Continue
            </button>
          </form>
        )}

        {showForm && (
          <div id="appointment-form" className="mt-16 w-full">
            <AppointmentForm
              goBack={() => setShowForm(false)}
              branchId={selectedLocation}
            />
          </div>
        )}
      </main>
    )
  );
};

export default BookingPage;
