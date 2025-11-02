import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { useDynamicTitle } from "../../hooks/useDynamicTitle"; // Custom hook for dynamic page title

const Bookings = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [bookings, setBookings] = useState([]); // State to store all bookings

  // Set dynamic page title
  useDynamicTitle("My Bookings");

  // Load bookings from localStorage on component mount
  useEffect(() => {
    const savedBookings = localStorage.getItem("bookings");
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }
  }, []);

  // Cancel appointment - removes booking and updates localStorage
  const handleCancelAppointment = (bookingId, doctorName) => {
    // Filter out the cancelled booking
    const updatedBookings = bookings.filter(
      (booking) => booking.id !== bookingId
    );

    // Update state (triggers re-render)
    setBookings(updatedBookings);

    // Update localStorage for persistence
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    // Show success toast
    toast.success(`Cancelled appointment with ${doctorName}`);
  };

  // Prepare data for Recharts - transforms bookings to chart format
  const chartData = bookings.map((booking) => ({
    name: booking.doctorName.split(" ").slice(1).join(" "), // Get doctor's last name
    fee: booking.fee,
    fullName: booking.doctorName, // Store full name for tooltip
  }));

  // Empty state - no bookings found
  if (bookings.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="text-6xl mb-4">📅</div>
          <h2 className="text-4xl font-bold mb-4">No Appointments Found</h2>
          <p className="text-gray-600 mb-8 text-lg">
            You haven't booked any appointments yet.
          </p>
          {/* Navigate to home page to book appointments */}
          <button
            onClick={() => navigate("/")} // Routes to home page
            className="btn btn-primary btn-lg"
          >
            Book Your First Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">
          My Appointments
        </h1>

        {/* Bookings List - single column layout */}
        <div className="max-w-4xl mx-auto space-y-6 mb-12">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 hover:shadow-xl transition-shadow"
            >
              {/* Doctor Image */}
              <img
                src={booking.doctorImage}
                alt={booking.doctorName}
                className="w-32 h-32 rounded-full object-cover shadow-md"
              />

              {/* Booking Details */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">
                  {booking.doctorName}
                </h3>
                <p className="text-gray-600 mb-1">{booking.education}</p>
                <p className="text-blue-600 font-semibold mb-2">
                  {booking.specialty}
                </p>
                <p className="text-xl font-bold text-green-600">
                  Fee: ৳{booking.fee}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Booked on: {new Date(booking.bookedAt).toLocaleDateString()}
                </p>
              </div>

              {/* Cancel Button */}
              <button
                onClick={() =>
                  handleCancelAppointment(booking.id, booking.doctorName)
                } // Cancels this booking
                className="btn btn-error btn-sm md:btn-md"
              >
                Cancel Appointment
              </button>
            </div>
          ))}
        </div>

        {/* Recharts Visualization - only show if bookings exist */}
        {bookings.length > 0 && (
          <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-center mb-8">
              Appointment Fees Overview
            </h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis
                  label={{
                    value: "Fee (৳)",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white p-4 border border-gray-300 rounded shadow-lg">
                          <p className="font-semibold">
                            {payload[0].payload.fullName}
                          </p>
                          <p className="text-green-600">
                            Fee: ৳{payload[0].value}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Legend />
                <Bar dataKey="fee" fill="#3B82F6" name="Consultation Fee (৳)" />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-center text-gray-600 mt-4">
              Total Bookings: {bookings.length} | Total Amount: ৳
              {bookings.reduce((sum, b) => sum + b.fee, 0)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
