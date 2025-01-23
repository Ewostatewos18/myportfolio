const Hero = () => (
  <section className="relative h-screen bg-black text-white flex flex-col md:flex-row justify-center items-center">
    {/* Background effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black opacity-50 blur-3xl"></div>

    {/* Main Content */}
    <div className="relative z-10 text-center md:text-left md:w-1/2 px-6">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
        Hi, I am <span className="text-yellow-700">Ehitemusie</span>
      </h1>
      <p className="mt-4 text-lg md:text-2xl font-medium">
        A passionate <span className="text-yellow-700">Frontend Developer</span> building user-friendly websites and applications.
      </p>

      {/* Call-to-Action Buttons */}
      <div className="mt-8 flex gap-4 justify-center md:justify-start">
        <a
          href="#projects"
          className="px-6 py-3 bg-gray-800 text-gray-300 font-semibold rounded-lg hover:bg-gray-700 border-gray-600 transition duration-200 ease-in-out"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-yellow-700 text-yellow-700 font-semibold rounded-lg hover:bg-yellow-700 hover:text-black transition duration-200 ease-in-out"
        >
          Contact Me
        </a>
      </div>
    </div>

    {/* Profile Image with Glow Effect */}
    <div className="relative z-10 md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
      <div className="relative rounded-full bg-gradient-to-r from-black to-black p-1 shadow-lg">
        {/* Outer Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-30 blur-lg rounded-full"></div>
        {/* Profile Image */}
        <img
          src="/ehite.png"
          alt="Profile Image"
          className="relative w-3/4 md:w-full max-w-xs rounded-full shadow-2xl border-4 border-black transition-transform transform hover:scale-110 duration-200 ease-in-out"
        />
      </div>
    </div>

    {/* Decorative Elements */}
    <div className="absolute bottom-10 left-10 w-40 h-40 bg-yellow-700 opacity-30 blur-2xl rounded-full transform hover:scale-110 transition-transform duration-200 ease-in-out"></div>
    <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-700 opacity-30 blur-2xl rounded-full transform hover:scale-110 transition-transform duration-200 ease-in-out"></div>
  </section>
);

export default Hero;
