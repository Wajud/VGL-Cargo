import React from "react";
import { Link } from "react-router-dom";

import {
  Wrench,
  Cog,
  BatteryCharging,
  Plug,
  Power,
  ShoppingCart,
  Zap,
} from "lucide-react";
import serviceBanner from "../assets/services.jpg";

const services = [
  {
    title: "Generator Maintenance & Repair",
    icon: <Wrench className="h-8 w-8 text-blue-600" />,
    description:
      "Comprehensive maintenance and repair services for industrial generators to ensure reliability and minimize downtime.",
  },
  {
    title: "Installation of ATS & Rectifiers",
    icon: <Cog className="h-8 w-8 text-green-600" />,
    description:
      "Safe and precise installation of Automatic Transfer Switches and rectifiers for efficient power switching and conversion.",
  },
  {
    title: "Backup Battery Solutions",
    icon: <BatteryCharging className="h-8 w-8 text-yellow-500" />,
    description:
      "Supply and installation of durable backup batteries to maintain power continuity during outages.",
  },
  {
    title: "Generator & Inverter Installation",
    icon: <Zap className="h-8 w-8 text-indigo-600" />,
    description:
      "Expert installation of generators and inverter systems customized to your specific energy requirements.",
  },
  {
    title: "Power Management Services",
    icon: <Power className="h-8 w-8 text-red-600" />,
    description:
      "Comprehensive power system solutions, including monitoring, optimization, and ongoing maintenance and repair to ensure efficiency and minimize downtime.",
  },
  {
    title: "ACDB Installation",
    icon: <Plug className="h-8 w-8 text-teal-600" />,
    description:
      "Installation of AC Distribution Boards (ACDB) for structured and safe power distribution across your electrical systems.",
  },
  {
    id: 2,
    icon: <ShoppingCart size={40} className="text-blue-600" />,
    title: "Sales and Procurement",
    description:
      "Sourcing and supplying quality electrical components and materials.",
  },
];

const Services = () => {
  return (
    <div className="">
      <div className="relative bg-blue-500">
        <img
          src={serviceBanner}
          alt="service page banner"
          className="w-full h-[85vh] object-cover"
        />
        <h1 className="text-center font-bold text-5xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-700">
          SERVICES
        </h1>
      </div>

      <div className="px-6 pt-24">
        <p className="text-2xl text-gray-700  text-center mb-10 max-w-2xl mx-auto">
          Discover our professional electrical services, from installation to
          maintenance, tailored to meet your needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              to="/contact-us"
              key={index}
              className="block bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
