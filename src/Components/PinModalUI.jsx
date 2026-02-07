import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import Base_url from "../Constants/Base_url";

const PinModalUI=(pin,setPin,onVerify,loading, error)=> {

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-[#0f172a] text-white p-8 rounded-xl w-80 shadow-xl text-center">

        <h2 className="text-lg font-semibold mb-2">Enter Wallet PIN</h2>
        <p className="text-slate-400 text-sm mb-5">
          Required to view balance
        </p>

        <input
          type="password"
          maxLength={6}
          value={pin}
          onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
          className="w-full p-3 text-center text-xl tracking-widest rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 focus:outline-none"
        />


        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}

        <button
          onClick={onVerify}
          disabled={loading}
          className="mt-5 w-full bg-blue-600 py-2 rounded-lg font-semibold"
        >Verify Pin
        </button>
        {loading ? "Verifying..." : ""}

        <p className="text-xs text-slate-500 mt-4">
          Never share your PIN
        </p>
      </div>
    </div>
  );
}


export default PinModalUI