import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Base_url from "../Constants/Base_url";
import DashboardCards from "./DashboardCards";


const Dashboard=()=>{
  return (
<div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#020617] flex flex-col">
      
      <Navbar />

      {/* MAIN CENTER WRAPPER */}
      <div className="flex-1 flex justify-center items-start px-6 py-30">
        
        <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-12">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900">Dashboard</h2>
            <p className="text-slate-500 mt-2">Welcome to your digital wallet</p>
          </div>

          {/* Cards */}
          <DashboardCards />

        </div>
      </div>

      <Footer />

    </div>
  )
}


export default Dashboard
