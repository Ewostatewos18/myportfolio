const Certificates = () => (
    <section className="relative min-h-screen bg-black text-white flex flex-col justify-center items-center">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 opacity-50 blur-3xl"></div>
  
      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          My <span className="text-yellow-700">Certificates</span>
        </h2>
        <p className="mt-4 text-lg md:text-2xl font-medium">
          Recognitions and <span className="text-yellow-700">accomplishments</span> earned through hard work and dedication.
        </p>
  
        {/* Certificates Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((certificate, index) => (
            <div
              key={index}
              className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 hover:shadow-yellow-700/50 group"
            >
              {/* Certificate Badge */}
              <div className="relative">
                <img
                  src={`/certificate${index + 1}.jpg`}
                  alt={`Certificate ${index + 1}`}
                  className="w-full h-48 object-contain group-hover:opacity-75 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-lg font-semibold text-white">Certificate {index + 1}</h3>
                </div>
              </div>
  
              {/* Certificate Details */}
              <div className="p-6">
                <p className="text-gray-400 mb-4">
                  A brief description of Certificate {index + 1}, including the awarding organization and date.
                </p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-700 font-medium inline-flex items-center space-x-2 hover:underline group-hover:text-yellow-500 transition-colors duration-300"
                >
                  <span>View Certificate</span>
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
  
  export default Certificates;
  