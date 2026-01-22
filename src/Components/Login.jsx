import { use, useState } from "react";
import Base_url from "../Constants/Base_url";
import { useNavigate} from "react-router-dom";
import axios from "axios";
const Login=()=>{

const [email, setEmail]=useState("Prashant@gmail.com");
const [password, setPassword]=useState("Prashant@123$");
const [loading ,setLoading]=useState(false);
const [error, setError]=useState("");
const Navigate=useNavigate();

const handleLogin=async(e)=>{
    try{
        await axios.post(Base_url+"/auth/login",{email,password}, {withCredentials:true});
        Navigate("/");
    }
    catch(err){ 
        setError(err.message);
        console.log(err.message);
    }
}


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a]">
      {/* Background glow */}
      <div className="absolute inset-0 `bg-gradient-to-br` from-blue-600/20 via-indigo-600/10 to-cyan-500/20 blur-3xl"></div>

      {/* Card */}
      <div className="relative w-full max-w-md rounded-2xl bg-white/95 shadow-2xl backdrop-blur p-8">
        
        {/* Brand */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Vault<span className="text-blue-600">Pay</span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Secure Digital Wallet
          </p>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="you@vaultpay.com"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
          />
        </div>

        <h1>{error}</h1>

        {/* Button */}
        <button onClick={()=>handleLogin()}
        className="w-full rounded-xl bg-blue-600 py-3 text-white font-semibold tracking-wide hover:bg-blue-700 transition">
          Login
        </button>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-slate-500">
          © 2026 VaultPay · Banking-grade security
        </p>
      </div>
    </div>
  );

}

export default Login;