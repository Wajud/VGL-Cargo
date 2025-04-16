import React from "react";
import ceoImage from "../assets/ceo.jpg";
import actionImage from "../assets/in-action.jpg";
import aboutLanding from "../assets/another-about.jpg";

import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 pb-16 pt-28 md:p-12 md:pb-24 md:pt-28">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="relative">
          <div
            className="bg-gray-200"
            style={{
              clipPath: "polygon(100% 0, 100% 69%, 51% 100%, 0 70%, 0 0)",
            }}
          >
            <img
              src={aboutLanding}
              alt="banner"
              style={{
                clipPath: "polygon(100% 0, 100% 69%, 51% 100%, 0 70%, 0 0)",
              }}
              className="w-full h-[50vh] object-cover"
            />
          </div>

          <div className="bg-white shadow-md rounded-md min-h-[25vh] py-12 flex items-center w-[95%] md:w-[85%] mx-auto relative -top-40 z-10 px-4 md:px-12 -mb-12">
            <section>
              <div className="text-4xl font-bold text-blue-700 mb-6 flex flex-col gap-1">
                <h1 className="text-5xl mb-2">Empowering Projects,</h1>

                <h1>Energizing Possibilities</h1>
              </div>
              <p className="text-lg mb-4">
                We are a trusted name in the electrical installations industry,
                committed to delivering exceptional solutions in site
                management, power management, and procurement and sales.
              </p>
              <p className="text-lg">
                Backed by a team of professionals with a passion for precision
                and quality, we ensure projects are executed safely,
                efficiently, and within scope. From powering infrastructure to
                managing complex operations, we provide solutions tailored to
                each client's unique needs.
              </p>
            </section>
          </div>
        </div>

        <section className="bg-white text-gray-800 p-6 pt-2 md:p-12 md:pt-1">
          <h1 className="text-4xl font-bold text-blue-700 mb-12 md:hidden">
            The SET ANJI Standard
          </h1>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="row-start-2 md:row-start-1"
            >
              <div className=" relative md:-top-12">
                <h1 className="text-4xl font-bold text-blue-700 mb-6 hidden md:block">
                  The SET ANJI Standard
                </h1>
                <p className="text-lg mb-4">
                  SETS ANJI Engineering Limited is a trusted provider of
                  professional electrical installation and engineering services.
                  We specialize in delivering efficient, reliable, and
                  safety-focused solutions across residential, commercial, and
                  industrial projects.
                </p>
                <p className="text-lg mb-4">
                  With a team of skilled engineers and technicians, we handle
                  every project with precision — from on-site management to
                  power system design and procurement. Our approach is rooted in
                  quality, attention to detail, and a strong commitment to
                  exceeding client expectations.
                </p>
                <p className="text-lg">
                  At SETS ANJI, we take pride in powering progress through
                  smart, sustainable, and dependable engineering practices that
                  stand the test of time.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={actionImage}
                alt="SET ANJI team in action"
                className="w-full  h-[25rem] object-top 3 md:h-[35rem]  object-cover rounded-xl shadow-md"
              />
            </motion.div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center gap-8 bg-gray-100 p-6 pb-16 rounded-xl shadow-sm">
          <h2 className="text-4xl text-center font-semibold text-blue-600 md:hidden">
            CEO Spotlight
          </h2>
          <img
            src={ceoImage}
            alt="CEO"
            className="w-full h-[25rem] object-top md:w-1/3 md:h-full object-cover shadow-md"
          />

          <div className="relative top-10">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              CEO Spotlight
            </h2>
            <div className="text-lg flex flex-col gap-6">
              <p>
                SOLOMON OLUWASEUN TOGBE is a seasoned businessman and the
                visionary CEO and Director of Set Anji Engineer Ltd, a leading
                company specializing in the maintenance, service, and repair of
                industrial generators, as well as the installation of critical
                power system components such as ATS rectifiers, backup
                batteries, generators, and inverters.
              </p>
              <p>
                A proud Nigerian national, Togbe Solomon has built a reputation
                for excellence in the power and energy sector, providing
                comprehensive solutions for managing and ensuring reliable power
                for industrial operations. With years of experience in both
                business management and technical expertise, Togbe Solomon has
                successfully led Set Anji Engineer Ltd to become a trusted name
                in the industry, known for its commitment to quality service,
                customer satisfaction, and innovative power solutions. Under his
                leadership, the company has grown significantly, serving clients
                across various sectors, and continues to be a key player in
                Nigeria's industrial power systems market.{" "}
              </p>
              <p>
                His passion for technological advancements, combined with a deep
                understanding of the challenges businesses face when it comes to
                power reliability, drives his company’s mission to provide
                top-tier services and products that enhance operational
                efficiency and minimize downtime for clients. Through his
                entrepreneurial spirit and dedication, Togbe Solomon continues
                to shape the future of power management in Nigeria and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Services Summary */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            What We Do
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 border rounded-lg hover:shadow transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Site Management
              </h3>
              <p className="text-gray-700">
                We oversee all electrical aspects of a site from planning to
                execution, ensuring safety, compliance, and smooth operations
                throughout.
              </p>
            </div>
            <div className="p-4 border rounded-lg hover:shadow transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Power Management
              </h3>
              <p className="text-gray-700">
                Our power management solutions ensure efficient energy
                distribution and usage across systems, helping reduce downtime
                and optimize performance.
              </p>
            </div>
            <div className="p-4 border rounded-lg hover:shadow transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Procurement & Sales
              </h3>
              <p className="text-gray-700">
                We source and supply quality electrical components and
                systems—reliable tools for every scale of project, delivered on
                time and within budget.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
