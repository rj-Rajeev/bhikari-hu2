import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden bg-gray-50">
        <svg
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
          viewBox="0 0 1464 297"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8e9bfe5f-8b2b-4cc8-8c92-502b000b2d4e"
              x="0"
              y="0"
              width=".135"
              height=".2"
            >
              <rect
                x="0"
                y="0"
                width="1"
                height="1"
                className="text-gray-200"
                fill="currentColor"
              ></rect>
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#8e9bfe5f-8b2b-4cc8-8c92-502b000b2d4e)"
          ></rect>
        </svg>
        <div className="relative max-w-7xl mx-auto pt-12 pb-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-500 text-center">
            We would love to hear from you. Reach out with any questions or
            comments you have.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 md:gap-y-12">
            <div className="relative bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-lg font-medium text-gray-900">
                Our Location
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Greater Noida, 203209 , sec-19
              </p>
              <p className="mt-4 text-base text-gray-600">
                Phone: 123-456-7890
              </p>
              <p className="mt-4 text-base text-gray-600">
                Email:{" "}
                <a
                  href="mailto:support@bhikari-hu.com"
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  support@bhikari-hu.com
                </a>
              </p>
              <iframe
                width="100%"
                height="300"
                className="mt-4 rounded-lg shadow-sm"
                frameBorder="0"
                title="map"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112203.86966348832!2d77.43359476276534!3d28.4984858212569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea64b8f89aef%3A0xec0ccabb5317962e!2sGreater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1722596804126!5m2!1sen!2sin"
              ></iframe>
            </div>
            <div className="relative bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-lg font-medium text-gray-900">
                Send Us a Message
              </h3>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                className="mt-6 flex flex-col space-y-4"
              >
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-sm py-2 px-3 text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="John Doe"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-sm py-2 px-3 text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-sm py-2 px-3 text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your message here..."
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center bg-indigo-600 border-0 py-2 px-6 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
