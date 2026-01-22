import axios from "axios"
import Base_url from "../Constants/Base_url";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar= ()=>{
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
    <div className="
      w-full
      bg-[#020617]
      border-b border-slate-800
      shadow-lg
    ">
      <div className="flex justify-between items-center px-10 py-5">
        <h1 className="text-2xl font-bold text-white tracking-wide">
          Vault<span className="text-blue-500">Pay</span>
        </h1>

        <button
          onClick={handleLogout}
          className="btn btn-sm btn-outline text-white border-slate-500 hover:bg-white hover:text-black"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;