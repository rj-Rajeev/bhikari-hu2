"use client";
import React, { useState, useEffect } from "react";
import Script from "next/script";
import { useSession } from "next-auth/react";

const CreateOrder = ({ params }) => {
  const { data: session } = useSession();

  const { recipient } = params;
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipientData, setRecipientData] = useState(null);

  useEffect(() => {
    const fetchRecipientData = async () => {
      try {
        const response = await fetch(`/api/user/${recipient}`);
        const data = await response.json();
        setRecipientData(data);
      } catch (error) {
        console.error("Error fetching recipient data:", error);
      }
    };

    fetchRecipientData();
  }, [recipient]);

  async function payNow() {
    setLoading(true);
    const response = await fetch("/api/razorpay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
        currency: "INR",
        receipt: "receipt#1",
        notes: {},
      }),
    });

    const order = await response.json();

    console.log(order);

    // Open Razorpay Checkout
    const options = {
      key: recipientData?.razorPay_key_id, // Replace with your Razorpay key_id
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: order.currency,
      name: session?.user.name,
      description: `${message}`,
      order_id: order.id,
      callback_url: "http://localhost:3000/", // Your success URL
      prefill: {
        name: session?.user.name,
        email: session?.user.email,
        contact: session?.user.contact,
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new Razorpay(options);
    rzp.open();
  }

  if (!recipientData)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        Loading...
      </div>
    );

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
                onClick={payNow}
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
