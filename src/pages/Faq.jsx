import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What services does Valiant Global Logistics offer?",
    answer:
      "We provide comprehensive logistics services including sea freight, air freight, supply chain optimization, warehousing, and transportation management.",
  },
  {
    question: "Do you handle international shipments?",
    answer:
      "Yes, we handle both domestic and international shipments, ensuring your cargo arrives safely and on schedule, no matter the destination.",
  },
  {
    question: "Can you customize logistics solutions for my business?",
    answer:
      "Absolutely! We analyze your supply chain and create tailored logistics strategies that meet your business needs, reduce costs, and improve efficiency.",
  },
  {
    question: "How do I request a shipping quote?",
    answer:
      "You can request a quote by contacting us through our website's contact form, email, or phone. Our team will respond promptly with a customized offer.",
  },
  {
    question: "Do you partner with other shipping companies?",
    answer:
      "Yes, we welcome partnerships with shippers and freight companies around the world to expand reach and improve efficiency for our clients.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen py-16 pt-40 px-6 md:px-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-[#1A1A40] mb-3">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600">
          Find answers to common questions about our services and processes.
        </p>
      </motion.div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 py-4 cursor-pointer"
          >
            <div
              className="flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6 text-[#D33434]" />
              </motion.div>
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-2 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <button className="block w-fit mx-auto mt-8 px-6 py-3 bg-[#D33434] text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 transition">
        <Link to="/contact-us">Reach out to us</Link>
      </button>
    </div>
  );
};

export default Faq;
