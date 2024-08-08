"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState();

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        `/api/user/${session.user.email.split("@")[0]}`
      );

      if (response.ok) {
        const data = await response.json();
        setCurrentUser(data);
      } else {
        setCurrentUser(null);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setCurrentUser(null);
    }
  };

  useEffect(() => {
    if (!session) {
      router.push("/login");
    } else {
      fetchUserData();
    }
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <p className="w-screen h-screen flex items-center justify-center">
        Loading...
      </p>
    );
  }

  if (status === "unauthenticated") {
    return <p>You need to be authenticated to view this page.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 mt-[150px]">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User Profile */}
          {session && session.user && (
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6 flex items-center">
                <img
                  className="h-16 w-16 rounded-full object-cover"
                  src={session.user.image}
                  alt="user profile"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-medium text-gray-900">
                    {session.user.name}
                  </h2>
                  <p className="text-sm text-gray-500">{session.user.email}</p>
                </div>
              </div>
            </div>
          )}

          {/* Donation Statistics */}
          {currentUser?.isPaymentAccepted ? (
            <div className="bg-white overflow-hidden shadow rounded-lg col-span-2">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Donation Statistics
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Track your donation history and progress.
                </p>
                {/* Example of chart or stats */}
                <div className="mt-4">
                  <p className="text-2xl font-bold text-gray-900">$0.00</p>
                  <p className="text-sm text-gray-500">Total Donations</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white overflow-hidden shadow rounded-lg col-span-2">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Donation Statistics
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Track your donation history and progress.
                </p>
                {/* Example of chart or stats */}
                <div className="mt-4">
                  <Link
                    href="/registerPayment"
                    class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Register to take Donations
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Recent Activities */}
          <div className="bg-white overflow-hidden shadow rounded-lg lg:col-span-3">
            <div className="p-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                Recent Activities
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Keep track of your recent activities and updates.
              </p>
              <div className="mt-4">
                <ul className="list-disc list-inside">
                  <li className="text-sm text-gray-600">
                    Joined bhikari-hu.com - Just Now
                  </li>
                  {/* Add more activities as needed */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
