import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Hooks for routing - useParams gets ID from URL, useNavigate for programmatic navigation
import toast from "react-hot-toast"; // For showing success/error notifications
import { doctors } from "../../data/doctors"; // Import doctors data
import { useDynamicTitle } from "../../hooks/useDynamicTitle"; // Custom hook for dynamic page title

const DoctorDetails = () => {
  const { id } = useParams(); // Extract doctor ID from URL parameter (/doctors/:id)
  const navigate = useNavigate(); // Hook to navigate programmatically after booking
  const [doctor, setDoctor] = useState(null); // State to store found doctor
  const [isAvailable, setIsAvailable] = useState(false); // Check if doctor is available today

  // Set dynamic page title with doctor name
  useDynamicTitle(doctor ? doctor.name : "Doctor Details");

  // Get today's day name
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  useEffect(() => {
    // Find doctor by ID from URL
    const foundDoctor = doctors.find((d) => d.id === parseInt(id));

    if (foundDoctor) {
      setDoctor(foundDoctor);
      // Check availability for today
      setIsAvailable(foundDoctor.availability.includes(today));
    }
  }, [id, today]);

  // Handle book appointment - checks if already booked, creates booking, saves to localStorage
  const handleBookNow = () => {
    if (!doctor) return;

    // Get existing bookings from localStorage
    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");

    // Check if user already booked this doctor
    const alreadyBooked = bookings.some(
      (booking) => booking.doctorId === doctor.id
    );

    if (alreadyBooked) {
      // Show error toast if already booked
      toast.error(
        `You have already booked an appointment with ${doctor.name}!`
      );
      return;
    }

    // Create new booking object
    const newBooking = {
      id: Date.now(), // Unique ID using timestamp
      doctorId: doctor.id,
      doctorName: doctor.name,
      doctorImage: doctor.image,
      specialty: doctor.specialty,
      education: doctor.education,
      fee: doctor.fee,
      bookedAt: new Date().toISOString(),
    };

    // Add to bookings array and save to localStorage for persistence
    bookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // Show success toast
    toast.success(`Successfully booked appointment with ${doctor.name}!`);

    // Redirect to bookings page
    navigate("/bookings");
  };

  // Loading/Not found state
  if (!doctor) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-4">
          Doctor Not Found!
        </h2>
        <p className="text-gray-600 mb-8">
          The doctor you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate("/")} // Navigate back to home
          className="btn btn-primary"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        {/* Page Info Card */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8 shadow-lg">
          <h1 className="text-4xl font-bold mb-2">Doctor's Profile Details</h1>
          <p className="text-lg">Your Health, Our Priority</p>
        </div>

        {/* Doctor Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Doctor Image */}
          <div className="lg:col-span-1">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full rounded-lg shadow-xl"
            />
          </div>

          {/* Doctor Information */}
          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold mb-6">{doctor.name}</h2>
            <div className="space-y-3">
              <p className="text-lg">
                <strong className="text-gray-700">Education:</strong>{" "}
                {doctor.education}
              </p>
              <p className="text-lg">
                <strong className="text-gray-700">Speciality:</strong>{" "}
                <span className="text-blue-600">{doctor.specialty}</span>
              </p>
              <p className="text-lg">
                <strong className="text-gray-700">Designation:</strong>{" "}
                {doctor.designation}
              </p>
              <p className="text-lg">
                <strong className="text-gray-700">Workplace:</strong>{" "}
                {doctor.workplace}
              </p>
              <p className="text-lg">
                <strong className="text-gray-700">Experience:</strong>{" "}
                {doctor.experience}
              </p>
              <p className="text-2xl font-bold text-green-600 mt-4">
                Consultation Fee: ৳{doctor.fee}
              </p>
            </div>
          </div>
        </div>

        {/* Availability Section */}
        <div className="bg-white p-8 rounded-lg shadow-xl mb-8">
          <h3 className="text-2xl font-semibold mb-4">Availability</h3>
          <div className="flex flex-wrap gap-3">
            {doctor.availability.map((day) => (
              <span
                key={day}
                className={`px-4 py-2 rounded-full font-semibold ${
                  day === today
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {day}
              </span>
            ))}
          </div>
        </div>

        {/* Appointment Booking Card */}
        <div className="bg-white border-2 border-blue-600 p-8 rounded-lg text-center shadow-xl">
          {/* Availability Badge */}
          {isAvailable ? (
            <span className="inline-block bg-green-500 text-white px-6 py-3 rounded-full mb-6 text-lg font-semibold">
              ✓ Available Today
            </span>
          ) : (
            <span className="inline-block bg-red-500 text-white px-6 py-3 rounded-full mb-6 text-lg font-semibold">
              ✗ Unavailable Today
            </span>
          )}

          <p className="text-gray-600 mb-6">
            {isAvailable
              ? "This doctor is available today. Book your appointment now!"
              : "This doctor is not available today. Please check other days."}
          </p>

          {/* Book Now Button */}
          <button
            onClick={handleBookNow} // Triggers booking logic
            disabled={!isAvailable} // Disabled if doctor unavailable
            className={`btn btn-lg w-full max-w-md ${
              isAvailable ? "btn-primary" : "btn-disabled"
            }`}
          >
            {isAvailable ? "Book Now" : "Doctor Unavailable"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
