import React, { useState } from "react";
import KhaltiCheckout from "khalti-checkout-web";

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [testMode, setTestMode] = useState(true); 

  // Khalti 
  const khaltiConfig = {
    publicKey: testMode
      ? "test_public_key_12345" 
      : process.env.REACT_APP_KHALTI_PUBLIC_KEY,
    productIdentity: "test123",
    productName: "Test Payment",
    productUrl: "http://localhost:3000",
    eventHandler: {
      onSuccess(payload) {
        console.log("Khalti Payment Success (Test):", payload);
        alert("Payment Successful via Khalti! (Test)");
      },
      onError(error) {
        console.error("Khalti Payment Error (Test):", error);
        alert("Payment Failed via Khalti! (Test)");
      },
    },
    paymentPreference: ["KHALTI", "EBANKING", "MOBILE_BANKING", "SCT", "CONNECT_IPS"],
  };

  const khaltiCheckout = new KhaltiCheckout(khaltiConfig);

  // Handle eSewa Payment 
  const handleEsewaPayment = () => {
    if (testMode) {
      alert("eSewa Test Payment Successful!");
      console.log("eSewa Test Payment Success: { amt: 1000, pid: 'test_pid_12345' }");
      return;
    }
    const esewaUrl = `https://esewa.com.np/epay/main`;
    const params = new URLSearchParams({
      amt: "1000", 
      psc: "0",
      pdc: "0",
      tAmt: "1000", // Total Amount
      pid: "12345abcde", // Unique Transaction ID
      scd: process.env.REACT_APP_ESEWA_MERCHANT_ID, // eSewa Merchant ID
      su: "http://localhost:3000/payment/success", // Success Callback
      fu: "http://localhost:3000/payment/failed", // Failure Callback
    });

    window.location.href = `${esewaUrl}?${params.toString()}`;
  };

  // Handle Khalti Payment (Test Mode)
  const handleKhaltiPayment = () => {
    if (testMode) {
      alert("Khalti Test Payment Successful!");
      console.log("Khalti Test Payment Success: { amount: 100000 }");
      return;
    }
    khaltiCheckout.show({ amount: 1000 * 100 }); // Amount in paisa
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold text-center mb-4">Choose a Payment Method</h2>
        <div className="space-y-4">
          {/* Test Mode Toggle */}
          <div className="flex items-center justify-between mb-4">
            <label className="text-gray-700">Test Mode</label>
            <input
              type="checkbox"
              checked={testMode}
              onChange={() => setTestMode(!testMode)}
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
          </div>

          {/* eSewa Option */}
          <button
            className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={() => {
              setSelectedMethod("eSewa");
              handleEsewaPayment();
            }}
          >
            {testMode ? "Test eSewa Payment" : "Pay with eSewa"}
          </button>

          {/* Khalti Option */}
          <button
            className="w-full py-2 px-4 bg-purple-500 text-white rounded hover:bg-purple-600"
            onClick={() => {
              setSelectedMethod("Khalti");
              handleKhaltiPayment();
            }}
          >
            {testMode ? "Test Khalti Payment" : "Pay with Khalti"}
          </button>

          {/* Other Mobile Banking */}
          <button
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => alert("Other Mobile Banking Coming Soon!")}
          >
            Pay with Mobile Banking
          </button>
        </div>

        {selectedMethod && (
          <p className="mt-4 text-center text-gray-600">
            Selected Payment Method: <strong>{selectedMethod}</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default Payment;