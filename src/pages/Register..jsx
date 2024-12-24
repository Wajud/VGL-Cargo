import { useState } from "react";
import axios from "axios";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    telephone: "",
    email: "",
    stateOfResidence: "",
    dateOfArrival: "",
  });
  const [messageSentStatus, setMessageSentStatus] = useState(false);
  const [sendingMessage, setSendingMessage] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      fullName,
      address,
      telephone,
      email,
      stateOfResidence,
      dateOfArrival,
    } = formData;

    // Validation
    if (
      !fullName ||
      !address ||
      !telephone ||
      !email ||
      !stateOfResidence ||
      !dateOfArrival
    ) {
      setErrorMessage("All fields are required.");
      return;
    }

    if (!/^\d{10}$/.test(telephone)) {
      setErrorMessage("Telephone number must be 10 digits.");
      return;
    }

    // Simulate registration API call
    // console.log("Registration successful!", formData);
    setSendingMessage(true);
    axios
      .get("https://node-mailer-gq2x.onrender.com/register", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
        params: {
          fullName,
          email,
          address,
          telephone,
          stateOfResidence,
          dateOfArrival,
        },
      })
      .then(() => {
        setSendingMessage(false);
        setMessageSentStatus(true);
        setTimeout(() => {
          setMessageSentStatus(false);
        }, 4000);
        console.log("Registration Successful");
      })
      .catch(() => console.log("Registration failed."));

    // Reset form and clear error
    setFormData({
      fullName: "",
      address: "",
      telephone: "",
      email: "",
      stateOfResidence: "",
      dateOfArrival: "",
    });
    setErrorMessage("");
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 md:p-20 pt-10">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>

        {/* Error Message */}
        {errorMessage && (
          <div className="text-red-500 text-sm text-center mb-4">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your full name"
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your address"
            />
          </div>

          {/* Telephone */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Telephone
            </label>
            <input
              type="text"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your telephone number"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>

          {/* State of Residence */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              State of Residence
            </label>
            <select
              name="stateOfResidence"
              value={formData.stateOfResidence}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select a state</option>
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
              <option value="Kano">Kano</option>
              <option value="Rivers">Rivers</option>
              <option value="Kaduna">Kaduna</option>
              <option value="Oyo">Oyo</option>
            </select>
          </div>

          {/* Date of Arrival */}
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">
              Date of Arrival
            </label>
            <input
              type="date"
              name="dateOfArrival"
              value={formData.dateOfArrival}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-bold hover:bg-green-500 transition"
            onClick={handleSubmit}
          >
            Register
          </button>

          {sendingMessage && (
            <div className="mt-2 flex gap-[2px] justify-center items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-t-4 border-green-500 border-solid"></div>
            </div>
          )}
          {messageSentStatus && (
            <p className="mt-2 font-semibold text-green-600 uppercase text-center">
              {`Registration Successful!`}{" "}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
