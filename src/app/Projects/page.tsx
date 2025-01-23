"use client";
import React from 'react';
import projects from '../components/projects'; // assuming you have the projects file imported

const Projects = () => (
  <section id="projects" className="relative min-h-screen bg-black text-white flex flex-col justify-center items-center">
    {/* Background effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black opacity-50 blur-3xl"></div>

    {/* Main Content */}
    <div className="relative z-10 text-center px-6 max-w-5xl">
      <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
        My <span className="text-yellow-700">Projects</span>
      </h2>
      <p className="mt-4 text-lg md:text-2xl font-medium">
        Explore some of my <span className="text-yellow-700">latest work</span> and achievements.
      </p>

      {/* Projects Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 hover:shadow-yellow-700/50 group"
          >
            {/* Project Image */}
            <div className="relative">
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-48 object-cover group-hover:opacity-75 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-lg font-semibold text-white">{project.name}</h3>
              </div>
            </div>

            {/* Project Description */}
            <div className="p-6">
              <p className="text-gray-400 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-700 font-medium inline-flex items-center space-x-2 hover:underline group-hover:text-yellow-500 transition-colors duration-300"
              >
                <span>View Project</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Decorative Elements */}
    <div className="absolute bottom-10 left-10 w-40 h-40 bg-yellow-700 opacity-30 blur-2xl rounded-full transform hover:scale-110 transition-transform duration-200 ease-in-out"></div>
    <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-500 opacity-30 blur-2xl rounded-full transform hover:scale-110 transition-transform duration-200 ease-in-out"></div>
  </section>
);

export default Projects;
