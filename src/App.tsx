import { useState } from "react";
import Checkout from "./pages/checkout";
import Recipient from "./pages/recipient";

function App() {
  const [currentPage, setCurrentPage] = useState<"checkout" | "recipient">("checkout");

  return (
    <div className="min-h-screen bg-[#1f2622] flex items-center justify-center px-4 py-10">
      {currentPage === "checkout" ? (
        <Checkout onNext={() => setCurrentPage("recipient")} />
      ) : (
        <Recipient onBack={() => setCurrentPage("checkout")} />
      )}
    </div>
  );
}

export default App;