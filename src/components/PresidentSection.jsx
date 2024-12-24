import React from "react";

function PresidentSection() {
  return (
    <div className="bg-gray-100 md:py-12 md:px-8 pt-8 pb-12">
      <div className="flex flex-col md:flex-row items-center px-6 space-y-6 md:space-y-0 md:space-x-12  h-[70vh]">
        {/* President's Picture */}
        <div className="">
          <img
            src="https://res.cloudinary.com/dxswouxj5/image/upload/v1734973726/af84b004-7006-4569-9d4d-183747b9d578_uyeza0.jpg"
            alt="President"
            className="w-full  rounded-full shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="text-center md:text-left md:w-[50%]">
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            Message from the President
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to the Pentecostal Fellowship of Nigeria Bi-Annual
            Conference 2025! It’s a time to renew our faith, build stronger
            connections, and align ourselves with God’s divine purpose. Let us
            come together and be part of this transformative experience.
          </p>
          {/* Quote Section */}
          <p className="text-xl font-semibold  text-gray-800 flex items-center justify-center md:justify-start">
            <span className="text-green-600 mr-2 ">❝</span>
            Francis Wale Oke
          </p>
        </div>
      </div>
    </div>
  );
}

export default PresidentSection;
