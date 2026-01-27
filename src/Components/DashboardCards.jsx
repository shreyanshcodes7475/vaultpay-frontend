import { useNavigate } from "react-router-dom";

const DashboardCards = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Wallet */}
      <div
        onClick={() => navigate("/wallet")}
        className="group cursor-pointer rounded-xl border border-slate-200 p-6 bg-white hover:bg-blue-600 transition-all duration-300 shadow-sm hover:shadow-xl"
      >
        <p className="text-sm text-slate-500 group-hover:text-white">
          Wallet
        </p>
        <h3 className="text-3xl font-bold mt-2 text-blue-600 group-hover:text-white">
          View Balance
        </h3>
        <p className="text-xs text-slate-400 mt-2 group-hover:text-blue-100">
          Check your wallet status
        </p>
      </div>

      {/* Add Money */}
      <div
        onClick={() => navigate("/add-money")}
        className="group cursor-pointer rounded-xl border border-slate-200 p-6 bg-white hover:bg-green-600 transition-all duration-300 shadow-sm hover:shadow-xl"
      >
        <p className="text-sm text-slate-500 group-hover:text-white">
          Add Money
        </p>
        <h3 className="text-3xl font-bold mt-2 text-green-600 group-hover:text-white">
          Top Up Wallet
        </h3>
        <p className="text-xs text-slate-400 mt-2 group-hover:text-green-100">
          Instant wallet recharge
        </p>
      </div>

      {/* Send Money */}
      <div
        onClick={() => navigate("/send-money")}
        className="group cursor-pointer rounded-xl border border-slate-200 p-6 bg-white hover:bg-purple-600 transition-all duration-300 shadow-sm hover:shadow-xl"
      >
        <p className="text-sm text-slate-500 group-hover:text-white">
          Send Money
        </p>
        <h3 className="text-3xl font-bold mt-2 text-purple-600 group-hover:text-white">
          Transfer Funds
        </h3>
        <p className="text-xs text-slate-400 mt-2 group-hover:text-purple-100">
          Pay another user
        </p>
      </div>

    </div>
  );
};

export default DashboardCards;
