import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            About
          </h2>
          <p className="mt-6 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Empowering Developers,{" "}
            <span className="text-indigo-500">One Donation at a Time</span>
          </p>

          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            At bhikari-hu.com, we believe in supporting developers around the
            world. Our platform provides a simple and effective way for
            developers to receive financial support for their projects, enabling
            them to continue building and innovating.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.75 15.75L6 12l3.75-3.75M18 12H6"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg leading-6 font-medium text-gray-900">
                    Our Mission
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    We aim to create a supportive community where developers can
                    easily receive donations and support from those who
                    appreciate their work.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg leading-6 font-medium text-gray-900">
                    How It Works
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Developers create profiles and showcase their projects.
                    Supporters can then browse and donate to projects they find
                    inspiring or useful.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 12h3m6 0h3m-3 0v6m0-6V6m0 0h3m-6 0H6m0 6v6"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg leading-6 font-medium text-gray-900">
                    Join the Community
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Whether you are a developer seeking support or a user
                    looking to contribute, bhikari-hu.com is the place for you.
                    Join us and be a part of something great!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
