import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BASE_URL = "http://localhost:5000/api";

export default function Dashboard() {
  const [balance, setBalance] = useState("—");
  const [txs, setTxs] = useState([]);

  useEffect(() => {
    const load = async () => {
      const wallet = await axios.get(
        `${BASE_URL}/wallet`,
        { withCredentials: true }
      );

      const transactions = await axios.get(
        `${BASE_URL}/transactions?limit=5`,
        { withCredentials: true }
      );

      setBalance(wallet.data.wallet.balance);
      setTxs(transactions.data.transactions);
    };
    load();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0f172a] to-[#020617]">
      <Navbar />

      {/* CENTER CONTENT */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl p-10 space-y-10">

          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Dashboard
            </h2>
            <p className="text-sm text-slate-500">
              Welcome to your digital wallet
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Balance */}
            <div className="rounded-xl border p-6">
              <p className="text-sm text-slate-500">
                Wallet Balance
              </p>
              <h3 className="text-4xl font-bold text-blue-600 mt-2">
                ₹{balance}
              </h3>
            </div>

            {/* Add Money */}
            <div className="rounded-xl border p-6 flex flex-col justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Add Money
                </p>
                <p className="text-sm text-slate-400 mt-1">
                  Top up your wallet instantly
                </p>
              </div>
              <button className="btn btn-primary mt-4">
                Add Money
              </button>
            </div>

            {/* Send Money */}
            <div className="rounded-xl border p-6 flex flex-col justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Send Money
                </p>
                <p className="text-sm text-slate-400 mt-1">
                  Transfer to another user
                </p>
              </div>
              <button className="btn btn-outline btn-primary mt-4">
                Send Money
              </button>
            </div>

          </div>

          {/* Transactions */}
          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-4 text-slate-800">
              Recent Transactions
            </h3>

            {txs.length === 0 ? (
              <p className="text-sm text-slate-400">
                No transactions yet
              </p>
            ) : (
              <div className="space-y-3">
                {txs.map((tx) => (
                  <div
                    key={tx.id}
                    className="flex justify-between border-b pb-2 text-sm"
                  >
                    <span>{tx.type}</span>
                    <span
                      className={
                        tx.type === "CREDIT"
                          ? "text-green-600 font-semibold"
                          : "text-red-600 font-semibold"
                      }
                    >
                      ₹{tx.amount}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
