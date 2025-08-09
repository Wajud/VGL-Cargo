import { useState, useEffect } from "react";
import homeBanner from "../assets/home-banner.jpg";
import { Link } from "react-router-dom";

import {
  Wrench,
  Bolt,
  ShoppingCart,
  Zap,
  ShieldCheck,
  CheckCircle,
  PackageCheck,
  ChevronRight,
} from "lucide-react";

import qualityAssurance from "../assets/quality assurance.jpg";
import safetyAndCompliance from "../assets/safety and compliance.jpg";
import threeHelmets from "../assets/three helmets.jpg";

const services = [
  {
    title: "Door to Door Cargo Service from Overseas to Nigeria",
    description:
      "Reliable pickup from your supplier abroad and delivery straight to your doorstep in Nigeria, ensuring convenience and peace of mind.",
  },
  {
    title: "Customs Clearing and Forwarding",
    description:
      "Fast and efficient customs clearance to help you avoid delays, with full compliance to Nigerian import regulations.",
  },
  {
    title: "Import and Export Services",
    description:
      "Seamless handling of both inbound and outbound shipments, connecting your business to global markets.",
  },
  {
    title: "Container Shipment",
    description:
      "Secure and timely transportation of goods via full or shared container loads, tailored to your cargo needs.",
  },
  // {
  //   title: "Haulage and General Services",
  //   description:
  //     "Safe movement of goods across Nigeria with our trusted haulage network, from ports to your final destination.",
  // },
  // {
  //   title: "Supply Chain Management Solutions",
  //   description:
  //     "End-to-end logistics solutions designed to optimize your supply chain and keep your business moving efficiently.",
  // },
  // {
  //   title: "Documentation Handling",
  //   description:
  //     "Accurate preparation and processing of shipping documents to ensure smooth cargo movement and regulatory compliance.",
  // },
];

const features = [
  "Reliable Sea & Air Freight",
  "Door-to-Door Delivery",
  "Expert Customs Clearance",
  "Competitive Pricing",
  "Real-Time Shipment Updates",
  "Dedicated Customer Support",
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
    <section>
      <div className="-pt-12 md:pt-20">
        <section className="relative w-full h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={homeBanner}
              alt="Electrical Installation"
              layout="fill"
              className="opacity-30 object-cover h-full w-full"
            />
          </div>
          <div className="relative z-10 text-center px-6 md:px-12">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Reliable Sea & Air Freight Solutions for Global Businesses
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
              We help importers, exporters, manufacturers, and business owners
              ship goods efficiently, securely, and on time—worldwide.
            </p>
            <button className="mt-6 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 transition">
              <Link to="/services" className="block w-full">
                Explore Services
              </Link>
            </button>
          </div>
        </section>

        {/* Services Overview Section */}

        <section
          className="py-16 bg-white px-8 max-w-[90%] mx-auto"
          id="services"
        >
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#1A1A40] text-center mb-12">
              Our Services
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col"
                >
                  <h3 className="text-xl font-semibold text-[#D33434] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Link to="/services">
            <div className="flex gap-1 justify-center items-center w-fit mx-auto mt-10 px-6 py-2  rounded-md bg-red-500 hover:bg-red-600 hover:shadow-md text-white">
              <button className="border-none font-semibold text-lg">
                See all Services
              </button>

              <svg
                className="mt-1"
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
                <polyline points="15 18 21 12 15 6" />
              </svg>
            </div>
          </Link>
        </section>

        {/* End of Services Overview Section */}

        {/* Why choose us section */}

        <section className="bg-gray-50 py-20 px-6 lg:px-16">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#1A1A40]">
              Why Choose VGL Cargo?
            </h2>
            <p className="text-[#000000] text-lg mb-12 max-w-3xl mx-auto">
              At VGL Cargo, we go beyond shipping. We simplify your logistics,
              streamline your supply chain, and deliver peace of mind with every
              shipment—whether by sea or air.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white border border-gray-200 p-6 rounded-xl shadow-sm"
                >
                  <CheckCircle className="text-[#D33434] w-6 h-6 mt-1" />
                  <span className="text-[#000000] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* End of Why choose us section */}

        {/* Contact us section */}
      </div>
    </section>
  );
}

export default Home;
