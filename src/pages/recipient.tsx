import { useState } from "react";

export default function Recipient({ onBack }: { onBack?: () => void }) {
  const [accountNumber, setAccountNumber] = useState("");

  return (
    <div className="w-full max-w-md bg-white rounded-[32px] p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <button onClick={onBack} className="text-xl">←</button>
        <h1 className="text-lg font-medium">Recipient details</h1>
      </div>

      {/* Bank */}
      <div className="mb-6">
        <label className="block text-sm text-gray-600 mb-2">
          Bank
        </label>
        <button className="w-full flex justify-between items-center border border-gray-200 rounded-full px-5 py-4 text-gray-400">
          <span>Select an option</span>
          <span>▼</span>
        </button>
      </div>

      {/* Account number */}
      <div className="mb-6">
        <label className="block text-sm text-gray-600 mb-2">
          Account number
        </label>
        <input
          type="text"
          placeholder="Enter your account number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          className="w-full border border-gray-200 rounded-full px-5 py-4 outline-none"
        />
      </div>

      {/* Account name */}
      <div className="mb-10">
        <label className="block text-sm text-gray-600 mb-2">
          Account name
        </label>
        <div className="bg-gray-100 rounded-full px-5 py-4 text-gray-700">
          ODUTUGA GBEKE
        </div>
      </div>

      {/* Next */}
      <button
        disabled={!accountNumber}
        className={`w-full py-4 rounded-full font-medium transition
          ${
            accountNumber
              ? "bg-primary text-white"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }
        `}
      >
        Next
      </button>
    </div>
  );
}