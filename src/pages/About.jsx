import { motion } from "framer-motion";
import { Globe, Truck, Network, Handshake, Factory, Icon } from "lucide-react";
import { targetArrow } from "@lucide/lab";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative pt-52 pb-32 flex items-center justify-center text-white">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#D33434]/70"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Delivering Your World, One Shipment at a Time
          </h1>
          <div className="w-20 h-1 bg-white mx-auto mb-4"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Freight made simple, fast, and reliable – moving your business
            forward with precision, care, and global reach.
          </p>
        </motion.div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-6 md:px-20 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A40] mb-6">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At <strong>Valiant Global Logistics Limited</strong>, we specialize
            in providing seamless, end-to-end logistics solutions that empower
            businesses to thrive. From local deliveries to complex international
            freight, our commitment is simple — deliver on time, every time,
            with the utmost care and precision.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We understand that logistics is more than just moving goods; it’s
            about enabling growth, building trust, and connecting businesses
            with opportunities around the globe.
          </p>
        </motion.div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 bg-white shadow rounded-2xl"
          >
            {/* <Target className="w-10 h-10 text-[#D33434] mb-4" /> */}
            <Icon
              iconNode={targetArrow}
              className="w-10 h-10 text-[#D33434] mb-4"
            />
            <h3 className="font-bold text-lg mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To provide innovative, reliable, and cost-effective logistics
              solutions that help our clients succeed in an ever-changing global
              market.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-6 bg-white shadow rounded-2xl"
          >
            <Globe className="w-10 h-10 text-[#D33434] mb-4" />
            <h3 className="font-bold text-lg mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be the logistics partner of choice for businesses worldwide,
              recognized for our excellence, integrity, and customer-centric
              approach.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 bg-white shadow rounded-2xl"
          >
            <Handshake className="w-10 h-10 text-[#D33434] mb-4" />
            <h3 className="font-bold text-lg mb-2">Our Values</h3>
            <p className="text-gray-600">
              Reliability, transparency, and partnership drive every decision we
              make, ensuring our clients always receive world-class service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Supply Chain Expertise */}
      <section className="py-16 px-6 md:px-20 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A40] mb-6">
            Supply Chain Optimization Expertise
          </h2>
          <p className="text-gray-700 mb-6">
            In today's fast-paced business environment, a well-optimized supply
            chain is essential. Our team of experts works closely with you to
            streamline your processes, cut unnecessary costs, and boost overall
            efficiency.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-2xl shadow">
              <Network className="w-10 h-10 text-[#D33434] mb-4" />
              <h3 className="font-bold mb-2">Analysis & Recommendations</h3>
              <p className="text-gray-600">
                Detailed assessment of your supply chain with tailored,
                actionable improvement strategies.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl shadow">
              <Truck className="w-10 h-10 text-[#D33434] mb-4" />
              <h3 className="font-bold mb-2">Logistics Management</h3>
              <p className="text-gray-600">
                End-to-end management of transportation, warehousing, and
                inventory to ensure smooth operations.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl shadow">
              <Factory className="w-10 h-10 text-[#D33434] mb-4" />
              <h3 className="font-bold mb-2">Strategic Optimization</h3>
              <p className="text-gray-600">
                Implementation of advanced strategies like demand planning,
                supply planning, and inventory optimization.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Industries Served */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A40] mb-6">
            Industries We Serve
          </h2>
          <p className="text-gray-700 mb-6">
            Our logistics expertise spans multiple industries, allowing us to
            tailor solutions to your specific needs.
          </p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Importers & Exporters</li>
            <li>Manufacturers</li>
            <li>Retail & E-commerce</li>
            <li>Construction & Heavy Equipment</li>
            <li>Oil & Gas</li>
            <li>Pharmaceuticals</li>
            <li>Agriculture</li>
          </ul>
        </motion.div>
      </section>

      {/* Partnerships */}
      <section className="py-16 px-6 md:px-20 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A40] mb-6">
            Global Partnerships
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We are open to partnerships with shippers and freight companies
            across the globe, creating mutually beneficial opportunities to
            expand reach, improve efficiency, and deliver world-class service to
            clients everywhere.
          </p>
          <button className="block w-fit mx-auto mt-6 px-6 py-3 bg-[#D33434] text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 transition">
            <Link to="/contact-us">Reach out to us</Link>
          </button>
        </motion.div>
      </section>
    </div>
  );
}
