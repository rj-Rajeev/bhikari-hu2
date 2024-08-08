"use client";
import React, { useEffect, useState } from "react";

const UserProfile = ({ params }) => {
  const { username } = params;
  const [user, setUser] = useState();

  const userDetails = async () => {
    const user = await fetch(`/api/user/${username}`);
    const data = await user.json();
    setUser(data);
  };

  useEffect(() => {
    userDetails();
  }, [username]);

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            {user?.fullName}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-700 sm:text-xl"></p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="h-48 w-full object-cover"
              src={user?.image}
              alt={`${user?.name}'s profile`}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">{`@${user?.userName}`}</h3>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Projects & Contributions
            </h3>
            <ul className="mt-6 space-y-4">
              {/* {user.projects.map((project, index) => ( */}
              <li key={"index"} className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
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
                        d="M12 8v8m4-4H8"
                      />
                    </svg>
                  </span>
                </div>
                <div className="ml-4 text-base text-gray-600">
                  <p className="text-lg font-semibold text-gray-900">
                    {"project.title"}
                  </p>
                  <p>{"project.description"}</p>
                </div>
              </li>
              {/* ))} */}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Donate to {"user.name"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
