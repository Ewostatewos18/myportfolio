// src/app/contact/page.tsx

const Contact = () => (
  <section
    id="contact"
    className="min-h-screen bg-gradient-to-br from-black via-black to-black text-gray-300 flex items-center justify-center py-12 px-6"
  >
    <div className="max-w-4xl text-center space-y-8">
      {/* Section Title */}
      <h2 className="text-5xl font-extrabold text-yellow-700">Contact Me</h2>
      <p className="text-lg leading-relaxed">
        Feel free to reach out to me with any questions or opportunities.
      </p>

      {/* Contact Form */}
      <form className="space-y-6 mt-8">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-6 py-3 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-700"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-6 py-3 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-700"
            required
          />
        </div>
        <textarea
          name="message"
          rows={4}
          placeholder="Your Message"
          className="w-full px-6 py-3 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-700"
          required
        />
        <button
          type="submit"
          className="w-full px-6 py-3 bg-yellow-700 text-black font-bold rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
