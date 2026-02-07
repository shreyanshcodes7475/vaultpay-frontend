import { use, useState } from "react";
import axios from "axios";
import Base_url from "../Constants/Base_url";
import PinModalUI from "./PinModalUI";

const Wallet=()=>{
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currency, setCurrency]=useState("INR");
  const [status,setStatus]=useState("Active");
  const [lockedUntil,setLockedUntil]=useState(null);
  const [type]=useState("Personal")
  const [check,setCheck]=useState(false)
  const [wallet,setWallet]=useState("");

  const onVerify = async () => {
    if (pin.length !== 6) {
      return setError("Enter 6 digit wallet PIN");
    }

    try {
      setLoading(true);
      setError("");

      const res = await axios.post(
        Base_url + "/wallet/balance",
        { walletPin: pin },
        { withCredentials: true }
      );
      console.log(res.data);
      setCheck(true);
      setStatus(res.data.status)
      setWallet(res);
    } catch (err) {
      setError(err.response?.data?.message || "Verification failed");
    } finally {
      setLoading(false);
    }
  };


     return (
    <div className="min-h-screen text-white px-6 py-10 max-w-6xl mx-auto">

      {/* BALANCE CARD */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 shadow-xl mb-10">
        <p className="text-sm opacity-80">Available Balance</p>
        <h1 className="text-4xl font-bold mt-2">
          {check? ` ₹${wallet.data.balance.toLocaleString()}`: PinModalUI(pin,setPin,onVerify,loading,error)}
        </h1>
      </div>

      {/* QUICK ACTIONS */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <button className="bg-white text-black py-3 rounded-lg font-semibold">
          Add Money
        </button>
        <button className="bg-white text-black py-3 rounded-lg font-semibold">
          Send Money
        </button>
      </div>

      {/* WALLET INFO */}
      <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 mb-10">
        <h3 className="font-semibold mb-4">Wallet Info</h3>
        <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
          <p>Type: {type}</p>
          {(status==="active") ? "🟢 Wallet Active":"🔴 Wallet Locked"}
          <p>Currency: {currency}</p>
        </div>
      </div>

      {/* RECENT TRANSACTIONS */}
      <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
        <h3 className="font-semibold mb-4">Recent Transactions</h3>
        <p className="text-slate-400 text-sm">Transactions will appear here</p>
      </div>

    </div>
  );
    
}

export default Wallet;