const About = () => (
  <section
    id="about"
    className="min-h-screen bg-black text-gray-300 flex items-center justify-center py-12 px-6"
  >
    <div className="max-w-4xl text-center space-y-8">
      {/* Section Title */}
      <h2 className="text-5xl font-extrabold text-yellow-700">
        About Me
      </h2>
      <p className="text-lg leading-relaxed">
        I am <span className="text-yellow-700 font-semibold">Ehitemusie Nebyu</span>, 
        a 4th-year Software Engineering student at Bahir Dar University. With a 
        passion for technology and problem-solving, I specialize in creating sleek, 
        functional, and user-friendly web applications.
      </p>
      
      {/* Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200">
          <h3 className="text-xl font-bold text-yellow-700">Core Skills</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>HTML, CSS, JavaScript</li>
            <li>React.js, Next.js</li>
            <li>Node.js, Tailwind CSS</li>
          </ul>
        </div>
        <div className="p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200">
          <h3 className="text-xl font-bold text-yellow-700">Vision</h3>
          <p className="mt-4 text-gray-400">
            To innovate and build software solutions that make a difference, 
            while continually growing as a creative and skilled developer.
          </p>
        </div>
      </div>

      {/* Collaboration and Learning */}
      <div className="mt-8">
        <p className="text-lg italic text-gray-400">
          I thrive in collaborative environments, enjoy learning from experienced 
          individuals, and share my knowledge to inspire others.
        </p>
      </div>
    </div>
  </section>
);

export default About;
