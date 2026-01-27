import axios from "axios";
import { useState } from "react"
import {v4 as uuidv4} from "uuid"
import Base_url from "../Constants/Base_url";
import { useNavigate } from "react-router-dom";


const AddMoneyPage=()=>{
    const [amount,setAmount]=useState("");
    const [status,setStatus]=useState("INIT");
    const [error, setError]=useState("");
    const navigate=useNavigate();
    
    const startPayment=async()=>{
        if(!amount || amount<=0){
            setError("Invalid Amount");
            return;
        }
        
        setStatus("PROCESSING");
        const idempotencyKey=uuidv4();

        try{    

            // fake gateway delay
            await new Promise((resolve) => setTimeout(resolve, 1500));

                await axios.post(Base_url+"/wallet/add",{
                    amount,idempotencyKey
                },{withCredentials:true})
           

            setStatus("SUCCESS");
        }
        catch(err){
            setStatus("Failed");
        }
    }

    return(
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#020617]">
  <div className="bg-white w-full max-w-md rounded-2xl p-8 shadow-xl">

    <h2 className="text-xl font-bold text-center">Add Money</h2>
    <p className="text-sm text-slate-500 text-center">
      Secure wallet top-up
    </p>

    {status === "INIT" && (
      <>
        <input
          type="number"
          className="input input-bordered w-full mt-6"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        {error && <p className="text-sm text-red-500 mt-2">{error}</p>}

        <button
          className="btn btn-primary w-full mt-4"
          onClick={startPayment}
        >
          Pay ₹{amount || 0}
        </button>
      </>
    )}

    {status === "PROCESSING" && (
      <div className="text-center mt-10">
        <span className="loading loading-spinner loading-lg"></span>
        <p className="mt-4 text-sm text-slate-500">
          Processing payment…
        </p>
      </div>
    )}

    {status === "SUCCESS" && (
      <div className="text-center mt-10">
        <p className="text-green-600 font-semibold text-lg">
          ✅ Payment Successful
        </p>
        <p className="text-sm text-slate-500 mt-1">
          Amount added to wallet
        </p>
        <button
          className="btn btn-outline mt-4"
          onClick={() => window.location.href = "/"}
        >
          Go to Dashboard
        </button>
      </div>
    )}

    {status === "FAILED" && (
      <div className="text-center mt-10">
        <p className="text-red-500 font-semibold">
          ❌ Payment Failed
        </p>
        <button
          className="btn btn-primary mt-4"
          onClick={() => setStatus("INIT")}
        >
          Try Again
        </button>
      </div>
    )}

  </div>
</div>


    )
}

export default AddMoneyPage