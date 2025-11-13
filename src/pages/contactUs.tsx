import React from "react";
import Navigation from "@/components/Navigation";

const ContactUs: React.FC = () => {
  return (
    <>
      {/* ✅ Keep your Navbar on top */}
      <Navigation />

      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get touch and support
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Have a question about our services? We’d love to hear from you.
            Reach out and our team will respond as soon as possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* ✅ Left: Contact Info */}
            <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form and we’ll get back to you shortly.
              </p>

              <div className="space-y-4 text-left">
                <p>
                  📍 <span className="font-medium">Address:</span> 123 MetroMorph
                  Street, Chennai, India
                </p>
                <p>
                  📧 <span className="font-medium">Email:</span>{" "}
                  support@metromorph.ai
                </p>
                <p>
                  📞 <span className="font-medium">Phone:</span> +91 98765 43210
                </p>
              </div>
            </div>

            {/* ✅ Right: Contact Form */}
            <form className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-lg px-4 py-3 mt-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <textarea
                placeholder="Your Message"
                className="border border-gray-300 rounded-lg px-4 py-3 mt-4 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>

              <button
                type="submit"
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
