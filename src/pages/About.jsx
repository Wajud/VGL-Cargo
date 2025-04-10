import {motion} from "framer-motion"
import CEO from "../assets/quality assurance.jpg"

const About = () => {


  return (
  <div className="py-20">
   <div className="font-sans text-gray-800 bg-gray-50">
      {/* Banner Section */}
      <section className="relative w-full h-80 bg-gray-900 flex items-center justify-center shadow-lg">
        <h1 className="text-white text-5xl font-extrabold tracking-wide">About Us</h1>
      </section>

      {/* Mission & Vision */}
      <motion.section 
        className="py-16 px-6 text-center bg-white shadow-md rounded-lg mx-4 md:mx-auto max-w-4xl mt-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-gray-800">Our Mission & Vision</h2>
        <p className="text-lg text-gray-600 mt-4 leading-relaxed">
          Our mission is to provide top-notch electrical installation and site management services with a commitment to safety, quality, and innovation. Our vision is to be a leader in the electrical industry, delivering sustainable and efficient solutions to our clients.
        </p>
      </motion.section>

      {/* What We Do */}
      <motion.section 
        className="py-16 px-6 text-center mx-4 md:mx-auto max-w-4xl mt-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold text-gray-800">What We Do</h2>
        <p className="text-lg text-gray-600 mt-4 leading-relaxed">
          We specialize in <span className="font-semibold">electrical installation</span>, <span className="font-semibold">site management</span>, and <span className="font-semibold">procurement & sales</span> of electrical components. Our expert team ensures quality and efficiency in every project we handle.
        </p>
      </motion.section>

      {/* Company History & Milestones */}
      <motion.section 
        className="py-16 px-6 bg-white text-center shadow-md rounded-lg mx-4 md:mx-auto max-w-4xl mt-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-4xl font-bold text-gray-800">Our Journey</h2>
        <p className="text-lg text-gray-600 mt-4 leading-relaxed">
          Since our founding, we have consistently delivered outstanding electrical solutions. Here are some key milestones in our journey:
        </p>
        <div className="mt-8 space-y-6 text-left border-l-4 border-gray-800 pl-6 max-w-3xl mx-auto">
          <p className="text-lg font-medium">✅ 2015 - Company founded with a vision to innovate in the electrical industry.</p>
          <p className="text-lg font-medium">✅ 2017 - Completed our first large-scale commercial installation project.</p>
          <p className="text-lg font-medium">✅ 2020 - Expanded into site management and procurement services.</p>
          <p className="text-lg font-medium">✅ 2023 - Recognized as a leading provider of electrical solutions nationwide.</p>
        </div>
      </motion.section>

      {/* Our CEO */}
      <motion.section 
        className="py-16 px-6 flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto mt-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="flex-shrink-0">
          <img src={CEO} alt="ceo image"
            className="rounded-full shadow-xl border-4 border-gray-800 hover:scale-105 transition-transform"
          />
        </div>
        <div className="text-center md:text-left max-w-2xl">
          <h2 className="text-4xl font-bold text-gray-800">Meet Our CEO</h2>
          <p className="text-lg text-gray-600 mt-4 leading-relaxed">
            Our CEO, <span className="font-semibold">[CEO Name]</span>, brings years of experience in electrical engineering and project management. Under his leadership, we have successfully executed numerous high-quality projects, setting new industry standards.
          </p>
        </div>
      </motion.section>
    </div>
  </div>
  );
};

export default About;
