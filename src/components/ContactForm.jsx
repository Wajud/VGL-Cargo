import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [messageSentStatus, setMessageSentStatus] = useState(false);
  const [sendingMessage, setSendingMessage] = useState(false);

  const sendMessage = (e) => {
    e.preventDefault();

    setSendingMessage(true);
    console.log("Sending us a message");
    // axios
    //   .get("https://node-mailer-gq2x.onrender.com/contact-us", {
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //     },
    //     params: {
    //       name,
    //       email,
    //       phoneNumber,
    //       message,
    //     },
    //   })
    //   .then(() => {
    //     setSendingMessage(false);
    //     setMessageSentStatus(true);
    //     setName(" ");
    //     setEmail(" ");
    //     setPhoneNumber(" ");
    //     setMessage(" ");
    //     setTimeout(() => {
    //       setMessageSentStatus(false);
    //     }, 4000);
    //     console.log("Message sent successfully");
    //   })
    //   .catch(() => console.log("Message not sent"));
  };
  return (
    <form className="flex flex-col mt-5 gap-4 min-w-fit w-[95%] mx-auto md:w-[35rem] px-8 py-2 md:mx-8 text-gray-700 bg-white rounded-md">
      <h1 className="mt-6 mb-2 font-bold text-xl">Send Message </h1>
      <label className="font-semibold">Name</label>
      <input
        type="text"
        id="name"
        name="user_name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border-b border-blue-600 outline-none bg-none"
        required
      />
      {/* <input
        type="text"
        id="name"
        name="user_name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className=" p-3 h-[40px] w-full bg-[#FFFFFF] rounded-md border-2 border-green-600 focus:shadow-none focus:outline-none focus:border-2 focus:border-red-600 focus:bg-white "
        required
      /> */}

      <label className="font-semibold">Email</label>

      <input
        type="email"
        id="email"
        name="user_email"
        placeholder="Enter email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border-b border-blue-600 outline-none bg-none"
        required
      />
      {/* <input
        type="email"
        id="email"
        name="user_email"
        placeholder="Enter email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className=" p-3 h-[40px] w-full bg-[#FFFFFF] rounded-md border-2 border-green-600 focus:shadow-none focus:outline-none focus:border-2 focus:border-red-600 focus:bg-white "
        required
      /> */}

      <label className="font-semibold">Phone Number</label>

      <input
        type="tel"
        id="email"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="border-b border-blue-600 outline-none bg-none"
        required
      />
      {/* <input
        type="tel"
        id="email"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className=" p-3 h-[40px] w-full bg-[#FFFFFF] rounded-md border-2 border-green-600 focus:shadow-none focus:outline-none focus:border-2 focus:border-red-600 focus:bg-white "
        required
      /> */}
      <label className="font-semibold">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Write a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className=" w-full h-[100px] border-b border-blue-600 outline-none bg-none resize-none "
        required
      />
      {/* <textarea
        id="message"
        name="message"
        placeholder="write your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className=" w-full h-[140px] p-3 bg-[#FFFFFF] rounded-md border-2 border-green-600 focus:shadow-none focus:outline-none focus:border-2 focus:border-red-600 focus:bg-white "
        required
      /> */}

      <input
        type="submit"
        value="Send"
        className=" text-white rounded-md bg-green-600  h-[40px] flex justify-center items-center gap-2 hover:bg-green-400 duration-500 mb-2 w-full"
        onClick={sendMessage}
      />
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
