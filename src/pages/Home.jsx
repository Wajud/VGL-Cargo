import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Wrench,
  Bolt,
  ShoppingCart,
  Zap,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import qualityAssurance from "../assets/quality assurance.jpg";
import safetyAndCompliance from "../assets/safety and compliance.jpg";
import threeHelmets from "../assets/three helmets.jpg";
const services = [
  {
    id: 0,
    icon: <Wrench size={40} className="text-blue-600" />,
    title: "Site Management",
    description:
      "Efficient coordination and supervision of electrical installation projects.",
  },
  {
    id: 1,
    icon: <Bolt size={40} className="text-blue-500" />,
    title: "Electrical Installations",
    description:
      "Reliable power solutions for optimal energy efficiency and sustainability.",
  },
  {
    id: 2,
    icon: <ShoppingCart size={40} className="text-blue-600" />,
    title: "Sales and Procurement",
    description:
      "Sourcing and supplying quality electrical components and materials.",
  },
];

const benefits = [
  {
    icon: <ShieldCheck size={40} className="text-blue-600" />,
    title: "Safety & Compliance",
    description:
      "We adhere to the highest safety standards to ensure secure installations, minimizing risks and ensuring regulatory compliance in all projects.",
    image: safetyAndCompliance,
  },
  {
    icon: <Zap size={40} className="text-yellow-500" />,
    title: "Reliable Expertise",
    description:
      "Our team brings years of experience in electrical installation and management, delivering professional solutions tailored to meet client-specific needs.",
    image: threeHelmets,
  },
  {
    icon: <CheckCircle size={40} className="text-green-600" />,
    title: "Quality Assurance",
    description:
      "We use top-tier materials and best practices to deliver outstanding results, ensuring durability, efficiency, and long-term performance in every project.",
    image: qualityAssurance,
  },
];

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % benefits.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="-pt-12 md:pt-20">
      <section className="relative w-full h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb"
            alt="Electrical Installation"
            layout="fill"
            className="opacity-30 object-cover h-full w-full"
          />
        </div>
        <div className="relative z-10 text-center px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Powering Projects, Managing Sites, Delivering Excellence
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Reliable electrical site management, power solutions, and seamless
            procurement services for your projects.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition">
            <Link to="/contact-us" className="block w-full">
              Get Started
            </Link>
          </button>
        </div>
      </section>

      <div className="py-20 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                to="/services"
                key={index}
                className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center relative hover:scale-105 transition-all"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-20 pb-72 md:pb-40 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Why Choose Us?
          </h2>
          <div className="relative min-h-48 flex justify-center items-center">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`absolute transition-all duration-700 transform pt-60 pb-40 ${
                  index === activeIndex
                    ? "scale-100 opacity-100"
                    : "scale-50 opacity-0"
                }`}
              >
                <div className="mt-44 md:mt-0 flex flex-col md:flex-row gap-6 items-center text-center md:text-left">
                  <img
                    src={benefit.image}
                    alt={`${benefit.image} image`}
                    className="w-60 h-60 rounded-md object-cover"
                  />
                  <div className="mt-4 md:mt-0">
                    <h3 className="text-3xl font-semibold text-gray-600 mb-6">
                      {benefit.title}
                    </h3>
                    <p className="">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact us section */}
    </div>
  );
}

export default Home;
