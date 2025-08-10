import React, { useState } from "react";
import axios from "axios";
import { use } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [messageSentStatus, setMessageSentStatus] = useState(false);
  const [sendingMessage, setSendingMessage] = useState(false);
  const [requiredFieldsError, setRequiredFieldsError] = useState(false);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!email || !message) {
      console.log("Please enter email and message");
      setRequiredFieldsError(true);
      setTimeout(() => setRequiredFieldsError(false), 2000);
      return;
    }
    setSendingMessage(true);

    axios
      .get("https://main-node-mailer.onrender.com/contact-us", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
        params: {
          name,
          senderEmail: email,
          phoneNumber,
          message,
          recipientEmail: "kareemwajud@yahoo.com",
          subject: "New Mail from Company Website",
        },
      })
      .then(() => {
        setSendingMessage(false);
        setMessageSentStatus(true);
        setName(" ");
        setEmail(" ");
        setPhoneNumber(" ");
        setMessage(" ");
        setTimeout(() => {
          setMessageSentStatus(false);
        }, 4000);
        console.log("Message sent successfully");
      })
      .catch(() => console.log("Message not sent"));
  };
  return (
    <form className="flex flex-col mt-5 gap-4 min-w-fit w-[95%] mx-auto md:w-[35rem] px-8 py-2 md:mx-8 text-gray-700 bg-white rounded-md">
      <h1 className="mt-6 mb-2 font-bold text-xl">
        Ask Question/Request Quote{" "}
      </h1>
      <label className="font-semibold">Name</label>
      <input
        type="text"
        id="name"
        name="user_name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border-b border-[#D33434] outline-none bg-none"
        required
      />

      <label className="font-semibold">Email</label>

      <input
        type="email"
        id="email"
        name="user_email"
        placeholder="Enter email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border-b border-[#D33434] outline-none bg-none"
        required
      />

      <label className="font-semibold">Phone Number</label>

      <input
        type="tel"
        id="email"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="border-b border-[#D33434] outline-none bg-none"
        required
      />

      <label className="font-semibold">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Write a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className=" w-full h-[100px] border-b border-[#D33434] outline-none bg-none resize-none "
        required
      />

      <input
        type="submit"
        value="Send"
        className="cursor-pointer text-white font-semibold rounded-md bg-green-600  h-[40px] flex justify-center items-center gap-2 hover:bg-green-700 duration-500 mb-2 w-full"
        onClick={sendMessage}
      />
      {requiredFieldsError && (
        <p className="mt-1 mb-2 font-semibold text-[#D33434] uppercase text-center">
          Email and Message are required.
        </p>
      )}
      {sendingMessage && (
        <div className="mt-2 flex gap-[2px] justify-center items-center">
          <div className="animate-spin rounded-full h-4 w-4 border-t-4 border-green-500 border-solid"></div>
          <p className="">Message is sending</p>
        </div>
      )}
      {messageSentStatus && (
        <p className="mt-2 font-semibold text-green-600 uppercase text-center">
          {`Thanks for reaching out to us!`}{" "}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
