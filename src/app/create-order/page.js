"use client";
import React, { useState } from "react";
import Script from "next/script";

const CreateOrder = ({ params }) => {
  const { recipient } = params;
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDonation = async () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    setLoading(true);

    try {
      // Fetch order_id from your API backend
      const res = await fetch("/api/razorpay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      const data = await res.json();

      if (!data.order_id) {
        alert("Something went wrong, please try again.");
        setLoading(false);
        return;
      }

      const options = {
        key: process.env.RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: "INR",
        name: "Your Company Name",
        description: `Donation to ${recipient}`,
        order_id: data.order_id,
        handler: function (response) {
          alert(
            `Donation Successful! Payment ID: ${response.razorpay_payment_id}`
          );
        },
        prefill: {
          name: "Your Name", 
          email: "email@example.com", 
          contact: "9999999999", 
        },
        notes: {
          message,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        alert(response.error.description);
        setLoading(false);
      });

      rzp1.open();
      setLoading(false);
    } catch (error) {
      alert("An error occurred. Please try again.");
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Support {recipient}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Your donation helps {recipient} continue their amazing work.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700"
              >
                Donation Amount in ₹
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  id="amount"
                  className="block w-full h-10 p-3 shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message (Optional)
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  rows="4"
                  className="block w-full p-3 shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="Leave a message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div className="flex items-center justify-center mt-6">
              <button
                type="button"
                onClick={handleDonation}
                className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                disabled={loading}
              >
                {loading ? "Processing..." : "Donate"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;
