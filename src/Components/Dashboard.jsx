import { useNavigate } from "react-router-dom";
import { FaWallet, FaPlusCircle, FaPaperPlane } from "react-icons/fa";

const Dashboard=()=>{
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#020617] text-white">

      {/* MAIN CONTENT */}
      <div className="flex-grow px-6 py-10">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <p className="text-slate-400 mt-2">
            Manage your digital wallet securely
          </p>
        </div>

        {/* Security Strip */}
        <div className="max-w-5xl mx-auto bg-slate-800/60 border border-slate-700 rounded-lg p-3 text-center mb-10">
          <span className="text-green-400 font-semibold">🟢 Wallet Active</span>
          <span className="text-slate-400 ml-2">
            PIN Protected • Transactions secured
          </span>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                 {/* View Balance */}
        <div
          onClick={() => navigate("/dashboard/wallet")}
          className="bg-white text-black rounded-xl p-6 shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl transition-all"
        >
          <FaWallet className="text-blue-600 text-3xl mb-4" />
          <h2 className="text-xl font-semibold">View Balance</h2>
          <p className="text-gray-500 mt-2 text-sm">
            Securely check your wallet funds
          </p>
        </div>

        {/* Add Money */}
        <div
          onClick={() => navigate("/add-money")}
          className="bg-white text-black rounded-xl p-6 shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl transition-all"
        >
          <FaPlusCircle className="text-blue-600 text-3xl mb-4" />
          <h2 className="text-xl font-semibold">Top Up Wallet</h2>
          <p className="text-gray-500 mt-2 text-sm">
            Add money instantly via payment gateway
          </p>
        </div>

        {/* Transfer Funds */}
        <div
          onClick={() => navigate("/transfer")}
          className="bg-white text-black rounded-xl p-6 shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl transition-all"
        >
          <FaPaperPlane className="text-blue-600 text-3xl mb-4" />
          <h2 className="text-xl font-semibold">Transfer Funds</h2>
          <p className="text-gray-500 mt-2 text-sm">
            Send money to another user
          </p>
        </div>
        </div>

        {/* Recent Activity */}
        <div className="max-w-5xl mx-auto mt-14 bg-slate-900 rounded-xl p-6 border border-slate-800">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between text-green-400">
            <span>+ ₹500 Added Money</span>
            <span>2h ago</span>
          </div>
          <div className="flex justify-between text-red-400">
            <span>− ₹200 Sent to Rahul</span>
            <span>5h ago</span>
          </div>
          <div className="flex justify-between text-green-400">
            <span>+ ₹100 Refund</span>
            <span>1d ago</span>
          </div>
        </div>

        <button
          onClick={() => navigate("/transactions")}
          className="mt-4 text-blue-400 hover:underline text-sm"
        >
          View All Transactions →
        </button>
        </div>

      </div>

    </div>
  );
}


export default Dashboard;