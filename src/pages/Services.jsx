import React from "react";
import {
  Truck,
  // Airplane,
  Globe,
  Archive,
  MapPin,
  Users,
  ChevronRight,
  Star,
  FileCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import bannerImage from "../assets/aeros.png";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      id: "door-to-door",
      title: "Door to Door Cargo Service from Overseas to Nigeria",
      desc: "Reliable pickup from your supplier abroad and direct delivery to your doorstep in Nigeria, providing convenience, security, and peace of mind.",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      id: "customs",
      title: "Customs Clearing and Forwarding",
      desc: "Swift and efficient customs clearance to prevent delays, ensuring full compliance with Nigerian import regulations.",
      icon: <Archive className="h-6 w-6" />,
    },
    {
      id: "import-export",
      title: "Import and Export Services",
      desc: "End-to-end handling of inbound and outbound shipments, seamlessly connecting your business to global markets.",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      id: "container",
      title: "Container Shipment",
      desc: "Secure and timely movement of goods via full or shared container loads, tailored to suit your cargo requirements.",
      icon: <Truck className="h-6 w-6" />,
    },
    {
      id: "haulage",
      title: "Haulage and General Services",
      desc: "Safe and dependable transportation of goods across Nigeria using our trusted haulage network, from ports to final destinations.",
      icon: <MapPin className="h-6 w-6" />,
    },
    {
      id: "supply-chain",
      title: "Supply Chain Management Solutions",
      desc: "Integrated logistics strategies to optimize your supply chain, improve efficiency, and reduce operational costs.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      id: "documentation",
      title: "Documentation Handling",
      desc: "Accurate preparation and management of shipping documents, ensuring smooth cargo flow and regulatory compliance.",
      icon: <FileCheck className="h-6 w-6" />,
    },
  ];

  const processSteps = [
    "Request a quote",
    "Tailored planning",
    "Pickup & documentation",
    "Transport & tracking",
    "Delivery & support",
  ];

  const industries = [
    "Manufacturing",
    "Retail & E-commerce",
    "Oil & Gas",
    "Agriculture",
    "Pharmaceuticals",
    "Importers & Exporters",
    "Construction & Heavy Equipment",
    "IT & Tech Industry",
    "China  Shipments",
  ];

  const testimonials = [
    {
      quote:
        "VGL Cargo handled our urgent shipment flawlessly — fast, transparent, and professional.",
      name: "Aisha Bello",
      company: "Kano Textiles",
    },
    {
      quote:
        "Great communication and on-time delivery. Their customs team made import simple.",
      name: "Emeka Okoro",
      company: "Delta Foods Ltd.",
    },
    {
      quote:
        "I import electronics regularly, and their handling is top-notch. My goods always arrive safely, well-packed, and right on schedule.",
      name: "Tunde",
      company: "TechWave Electronics, Lagos",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* HERO */}
      <header className="bg-white border-b pt-20 px-4 md:px-12">
        <div className="max-w-[90%] mx-auto px-6 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
                Comprehensive freight forwarding services
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                From port-to-port to door-to-door, we design logistics solutions
                that fit your business — reliable, transparent, and tailored to
                your needs.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-white bg-[#D33434] hover:bg-red-700"
                >
                  Request a Quote
                  <ChevronRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium border"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="relative w-60 md:w-96 h-60 md:h-96 mx-auto md:mx-0 scale-[150%] md:scale-[100%] mt-16 md:mt-0 mb-12 md:mb-0">
              {/* Blob Background */}
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full text-red-300"
              >
                <path
                  fill="currentColor"
                  d="M42.1,-75.3C54.7,-68.7,66.2,-56.6,72.7,-42.4C79.3,-28.3,80.9,-12.1,79.5,3.7C78.1,19.4,73.6,34.7,64.5,47.7C55.4,60.8,41.8,71.6,26.1,75.4C10.3,79.1,-7.5,75.8,-23.6,69.4C-39.7,63,-54.1,53.5,-64.1,40.1C-74.2,26.7,-79.9,9.4,-79.6,-8.7C-79.2,-26.9,-72.8,-45.8,-60.7,-53.8C-48.6,-61.8,-30.8,-58.8,-15.3,-65.1C0.1,-71.3,14.6,-86.8,28.5,-88.7C42.4,-90.6,56,-79.8,68.6,-75.3Z"
                  transform="translate(100 100)"
                />
              </svg>

              {/* <svg
                viewBox="-20 -20 240 240"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full text-red-300"
              >
                <path
                  fill="currentColor"
                  d="M39.8,-65.2C50.8,-55.1,60.6,-45.7,69.2,-34.4C77.8,-23.2,85.3,-11.1,86.5,1.5C87.8,14,82.9,28,74.2,39.9C65.5,51.8,53,61.6,39,68.5C25,75.4,9.5,79.4,-4.9,82.3C-19.4,85.2,-38.7,87,-53.7,78.6C-68.6,70.2,-79.3,51.6,-83.6,32C-87.8,12.4,-85.6,-8.2,-78.6,-26.8C-71.6,-45.4,-59.8,-62,-44.2,-70.6C-28.6,-79.3,-9.3,-80.1,5.8,-77.1C20.9,-74.1,41.8,-67.3,39.8,-65.2Z"
                  transform="translate(100 100) scale(1.2)"
                />
              </svg> */}

              {/* Foreground Image */}
              <img
                src={bannerImage}
                alt="Foreground"
                className="relative md:left-32 z-10 w-full mx-auto mt-8 scale-[120%] md:scale-[150%] mx-6"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto pt-20 md:pt-0 pb-12">
        <section id="services" className="bg-gray-50 px-16 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold">Our Services</h2>
            <p className="mt-2 text-gray-600">
              We offer end-to-end logistics services to move your goods safely
              and efficiently.
            </p>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <article
                  key={s.id}
                  className="group bg-white border rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="rounded-full p-3"
                        style={{ backgroundColor: "rgba(211,52,52,0.08)" }}
                      >
                        <div className="text-[#D33434]">{s.icon}</div>
                      </div>
                      <h3 className="text-lg font-semibold">{s.title}</h3>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-600">{s.desc}</p>

                  <div className="mt-6 flex items-center justify-between text-sm">
                    <Link
                      to="#"
                      className="inline-flex items-center gap-2 font-medium"
                      style={{ color: "#D33434" }}
                      onClick={(e) => {
                        e.preventDefault();

                        window.scrollTo({ top: 0 });
                      }}
                    >
                      Learn more
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                    <span className="text-gray-400">Trusted</span>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* PROCESS */}
          <section className="mt-12 md:mt-20 px-16">
            <h2 className="text-2xl font-bold">How we work</h2>
            <p className="mt-2 mb-4 text-gray-600 max-w-2xl">
              A simple, transparent process that keeps you informed every step
              of the way.
            </p>

            <ol className="mt-8 grid grid-cols-1 sm:grid-cols-5 gap-4">
              {processSteps.map((step, index) => (
                <li
                  key={step}
                  className="flex flex-col items-start gap-3 bg-gray-50 border rounded-xl p-4"
                >
                  <div
                    className="rounded-full h-10 w-10 flex items-center justify-center font-semibold"
                    style={{ backgroundColor: "#1A1A40", color: "#fff" }}
                  >
                    {index + 1}
                  </div>
                  <div className="text-sm font-medium">{step}</div>
                </li>
              ))}
            </ol>
          </section>

          {/* INDUSTRIES SERVED */}
          <section className="mt-12 md:mt-20 px-16">
            <h2 className="text-2xl font-bold">Industries we serve</h2>
            <p className="mt-2 mb-4 text-gray-600 max-w-2xl">
              We support a wide range of industries with tailored logistics
              solutions.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="inline-flex items-center gap-2 border rounded-full px-4 py-2 text-sm"
                >
                  <Star className="h-4 w-4 text-yellow-500" />
                  {industry}
                </span>
              ))}
            </div>
          </section>

          {/* TESTIMONIALS PREVIEW */}
          <section className="mt-12 px-16">
            <h2 className="text-2xl font-bold">What clients say</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <blockquote
                  key={index}
                  className="border rounded-2xl p-6 bg-gray-50"
                >
                  <p className="text-gray-800">“{testimonial.quote}”</p>
                  <footer className="mt-4 text-sm text-gray-600">
                    — {testimonial.name},{" "}
                    <span className="font-medium">{testimonial.company}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="px-16">
            <section
              id="contact"
              className="mt-12 md:mt-20 rounded-2xl p-8 bg-[#FDF2F2]"
            >
              <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold">
                    Ready to move your cargo?
                  </h3>
                  <p className="mt-2 mb-4 text-gray-700">
                    Get a tailored quote and timeline from our logistics
                    experts.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Link
                    to="/contact-us"
                    className="px-5 py-3 rounded-lg font-medium text-white bg-[#D33434] hover:bg-red-700"
                  >
                    Request Quote
                  </Link>

                  <Link
                    to="/contact-us"
                    className="px-4 py-3 rounded-lg border"
                  >
                    Call Us
                  </Link>
                </div>
              </div>
            </section>
          </section>
        </motion.div>
      </main>
    </div>
  );
};

export default Services;
