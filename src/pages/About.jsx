import { motion } from "framer-motion";
import { FaChurch, FaHandsHelping, FaGlobe, FaHandshake } from "react-icons/fa";

const About = () => {
  const cards = [
    {
      title: "Maintain Relationships",
      description:
        "Maintaining relationships with member churches and other Christian organizations.",
      icon: <FaHandshake className="text-4xl text-green-700" />,
    },
    {
      title: "Spread Christianity",
      description:
        "Encouraging the spread of Christianity and Christian ethics.",
      icon: <FaGlobe className="text-4xl text-blue-500" />,
    },
    {
      title: "Protect Integrity",
      description:
        "Protecting Christian ethics and integrity in our communities.",
      icon: <FaChurch className="text-4xl text-purple-600" />,
    },
    {
      title: "Government Collaboration",
      description:
        "Working with the government on matters related to Christianity and religious harmony.",
      icon: <FaHandsHelping className="text-4xl text-yellow-500" />,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4 md:px-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img
            src="https://res.cloudinary.com/dxswouxj5/image/upload/v1734967606/da15299b-594b-464e-8288-03f7e3e9d923_nt8gyc.jpg"
            alt="PFN Logo"
            className="w-24 h-12 -mb-8 md:w-32 md:h-32 rounded-full shadow-lg animate-spin"
          />
        </motion.div>
        <h1 className="text-4xl font-bold text-green-700 mb-4 mt-20">
          About The Pentecostal Fellowship of Nigeria
        </h1>
        <p className="text-gray-700 text-lg">
          The Pentecostal Fellowship of Nigeria (PFN) is a Christian
          organization that unifies and promotes cooperation among Pentecostal
          churches in Nigeria. Founded in Lagos in 1986, PFN represents
          Pentecostal Christians across the country.
        </p>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center justify-center mb-4">
              {card.icon}
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {card.title}
            </h2>
            <p className="text-gray-600">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
