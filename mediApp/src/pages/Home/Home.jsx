import React, { useState } from "react";
import { Link } from "react-router-dom"; // For navigation to doctor details
import CountUp from "react-countup"; // For animated counting numbers
import { doctors } from "../../data/doctors"; // Import doctors data
import { useDynamicTitle } from "../../hooks/useDynamicTitle"; // Custom hook for dynamic page title

const Home = () => {
  const [showAll, setShowAll] = useState(false); // State to toggle showing all doctors
  const [isAvailabilityEnabled] = useState(true); // Optional feature toggle

  // Set dynamic page title
  useDynamicTitle("Home");

  // Get today's day name for availability check
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  // Show only 6 doctors initially, or all 12 when showAll is true
  const displayedDoctors = showAll ? doctors : doctors.slice(0, 6);

  // Check if doctor is available today
  const isDoctorAvailable = (doctor) => {
    return doctor.availability.includes(today);
  };

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-20 px-4 border-b-4 border-blue-600">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to MediCare</h1>
          <p className="text-xl mb-8">
            Book appointments with the best doctors in your area
          </p>
          {/* Positioned images */}
          <div className="flex justify-center gap-8 mt-8">
            <img
              src="/Medical_applications/banner-img-1.png"
              alt="Medical care"
              className="w-32 h-32 object-cover rounded-full shadow-lg"
            />
            <img
              src="/Medical_applications/banner-img-1.png"
              alt="Healthcare"
              className="w-32 h-32 object-cover rounded-full shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Expert Doctors
            </h2>
            <p className="text-gray-600 text-lg">
              Choose from our panel of experienced healthcare professionals
            </p>
          </div>

          {/* Doctors Grid - 3 columns on large screens, responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {displayedDoctors.map((doctor) => {
              const available = isDoctorAvailable(doctor);

              return (
                <div
                  key={doctor.id}
                  className="card bg-white shadow-xl hover:shadow-2xl transition-shadow"
                >
                  <figure className="px-6 pt-6">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="rounded-xl h-48 w-full object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    {/* Availability badge - optional feature */}
                    {isAvailabilityEnabled && (
                      <div className="badge badge-sm mb-2">
                        {available ? (
                          <span className="text-green-600">
                            ✓ Available Today
                          </span>
                        ) : (
                          <span className="text-red-600">
                            ✗ Unavailable Today
                          </span>
                        )}
                      </div>
                    )}

                    <h3 className="card-title text-xl">{doctor.name}</h3>
                    <p className="text-gray-600 text-sm">{doctor.education}</p>
                    <p className="text-blue-600 font-semibold">
                      {doctor.specialty}
                    </p>
                    <p className="text-sm text-gray-500">
                      Experience: {doctor.experience}
                    </p>
                    <p className="text-sm text-gray-500">
                      Reg: {doctor.registrationNumber}
                    </p>

                    <div className="card-actions justify-end mt-4">
                      {/* Navigate to doctor details page with doctor ID in URL */}
                      <Link
                        to={`/doctors/${doctor.id}`}
                        className="btn btn-primary btn-sm"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Show All Button - appears when showing only 6 doctors */}
          {!showAll && (
            <div className="text-center">
              <button
                onClick={() => setShowAll(true)} // Toggle to show all 12 doctors
                className="btn btn-wide btn-accent"
              >
                Show All Doctors
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Success Section - 4 square cards with counting animation */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Doctors */}
            <div className="text-center p-8 border-2 border-blue-200 rounded-lg hover:border-blue-500 transition-colors">
              <img
                src="/Medical_applications/success-doctor.png"
                alt="Doctors"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-4xl font-bold text-blue-600 mb-2">
                <CountUp end={50} duration={2.5} />+{" "}
                {/* Animated counting from 0 to 50 */}
              </h3>
              <p className="text-gray-600 font-semibold">Expert Doctors</p>
            </div>

            {/* Card 2: Patients */}
            <div className="text-center p-8 border-2 border-green-200 rounded-lg hover:border-green-500 transition-colors">
              <img
                src="/Medical_applications/success-patients.png"
                alt="Patients"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-4xl font-bold text-green-600 mb-2">
                <CountUp end={10000} duration={2.5} separator="," />+{" "}
                {/* Animated count with comma separator */}
              </h3>
              <p className="text-gray-600 font-semibold">Happy Patients</p>
            </div>

            {/* Card 3: Reviews */}
            <div className="text-center p-8 border-2 border-purple-200 rounded-lg hover:border-purple-500 transition-colors">
              <img
                src="/Medical_applications/success-review.png"
                alt="Reviews"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-4xl font-bold text-purple-600 mb-2">
                <CountUp end={5000} duration={2.5} separator="," />+
              </h3>
              <p className="text-gray-600 font-semibold">5-Star Reviews</p>
            </div>

            {/* Card 4: Staff */}
            <div className="text-center p-8 border-2 border-orange-200 rounded-lg hover:border-orange-500 transition-colors">
              <img
                src="/Medical_applications/success-staffs.png"
                alt="Staff"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-4xl font-bold text-orange-600 mb-2">
                <CountUp end={200} duration={2.5} />+
              </h3>
              <p className="text-gray-600 font-semibold">Medical Staff</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
