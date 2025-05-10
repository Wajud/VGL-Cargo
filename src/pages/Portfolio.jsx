import { useState } from "react";
import { Bolt, Building2, Home, Cog } from "lucide-react";
import reliable from "../assets/reliable expertise.jpg";

const projects = [
  {
    id: 1,
    title: "Warehouse Power Upgrade",
    category: "Industrial",
    image: reliable,
    description: "Installed new high-capacity panels and backup systems.",
  },
  {
    id: 2,
    title: "Luxury Apartment Wiring",
    category: "Residential",
    image: reliable,
    description: "Full electrical setup for a 12-unit complex.",
  },
  {
    id: 3,
    title: "Office Lighting Revamp",
    category: "Commercial",
    image: reliable,
    description: "LED lighting and energy-efficient upgrades.",
  },
  {
    id: 4,
    title: "Power Management System",
    category: "Maintenance",
    image: reliable,
    description: "Custom monitoring and control panel installation.",
  },
];

const categories = [
  { name: "All", icon: null },
  { name: "Residential", icon: <Home className="w-4 h-4 inline mr-1" /> },
  { name: "Commercial", icon: <Building2 className="w-4 h-4 inline mr-1" /> },
  { name: "Industrial", icon: <Bolt className="w-4 h-4 inline mr-1" /> },
  { name: "Maintenance", icon: <Cog className="w-4 h-4 inline mr-1" /> },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-[url('/projects/hero.jpg')] bg-cover bg-center text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Powering Projects with Precision
        </h1>
        <p className="mt-4 text-lg">
          From installations to maintenance, we bring reliable energy solutions
          to life.
        </p>
      </section>

      {/* Filter Tabs */}
      <div className="flex justify-center flex-wrap gap-4 py-6 px-4">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActiveCategory(cat.name)}
            className={`flex items-center gap-1 px-4 py-2 rounded-full border ${
              activeCategory === cat.name
                ? "bg-yellow-500 text-white"
                : "bg-white"
            }`}
          >
            {cat.icon}
            {cat.name}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-16">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-xl mb-1">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
              <span className="inline-block mt-2 text-xs px-2 py-1 bg-gray-200 rounded-full">
                {project.category}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-yellow-500 text-white text-center py-12">
        <h2 className="text-3xl font-bold">Let’s Power Your Next Project</h2>
        <p className="mt-2">
          Get in touch today and let’s discuss how we can help.
        </p>
        <button className="mt-4 px-6 py-2 bg-white text-yellow-600 font-semibold rounded-full hover:bg-gray-100 transition">
          Get a Quote
        </button>
      </section>
    </div>
  );
}
