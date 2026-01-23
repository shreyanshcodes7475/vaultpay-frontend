import axios from "axios"
import Base_url from "../Constants/Base_url";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar= ()=>{
  const [open,setOpen]=useState(false)
    const navigate=useNavigate();
    const handleLogout=async()=>{
        try{
            await axios.post(Base_url+"/auth/logout",{},{withCredentials:true});
            navigate("/login")
        }
        catch(err){
            console.log("logout  error");   
        }
    }

  return (
    <div className="w-full bg-[#020617] border-b border-slate-800 relative z-50">
      <div className="flex items-center justify-between h-16 px-8">

        {/* Logo */}
        <h1 className="text-xl font-bold text-white">
          Vault<span className="text-blue-500">Pay</span>
        </h1>

        {/* Profile */}
        <div className="relative">
          <div onClick={()=>setOpen(!open)}
           className="avatar">
        <div
          className="
            w-9 h-9 rounded-full
            ring ring-blue-500
            ring-offset-2 ring-offset-[#020617]
            bg-[#020617]
            overflow-hidden
            shadow-md
          "
        >
          <img
            src="https://img.freepik.com/premium-vector/avatar-profile-picture-icon-blue-background-flat-design-style-resources-graphic-element-design_991720-653.jpg"
            alt="user avatar"
            className="w-full h-full object-cover"
          />
        </div>
          </div>

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 mt-3 w-40 bg-[#0f172a] rounded-lg shadow-lg overflow-hidden">
              <Link
                to="/"
                className="block px-4 py-2 text-white hover:bg-[#1e2a45]"
                onClick={() => setOpen(false)}
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-white hover:bg-[#1e2a45]"
              >
                Logout
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Navbar;




