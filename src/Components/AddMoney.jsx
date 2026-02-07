import axios from "axios"
import Base_url from "../Constants/Base_url"
import { v4 as uuidv4 } from "uuid";



const AddMoney=()=>{
    const createOrder=async(amount,clientRequestId)=>{
            try{
                const res=await axios.post(Base_url+"/payment/create-order",{amount,clientRequestId},{withCredentials:true});
                return res?.data;
            }
            catch(err){
                console.log(err);
            }
    }

    const handlePayment=async()=>{
        try{
        const clientRequestId = uuidv4();
        const orderData=await createOrder(1800,clientRequestId) //500
        
        const options={
            key:orderData.key,
            amount:orderData.amount*100,
            currency:"INR",
            name:"VaultPay wallet",
            description:"Add Money",
            order_id:orderData.orderId,
            
            handler:async function (response){
                await axios.post(Base_url+"/payment/verify-payment",{
                    razorpay_payment_id:response.razorpay_payment_id,
                    razorpay_order_id:response. razorpay_order_id,
                    razorpay_signature: response.razorpay_signature,
                    amount:orderData.amount,
                    userId:orderData.userId
                },{withCredentials:true})

                alert("Payment received. Wallet updating...")
            },

            theme:{color:"#3399cc"}
        };

        const rzp = new window.Razorpay(options); // ✅ correct
            rzp.open();
        }
        catch(err){
            console.log(err);
        }

    }

    return(
        <button onClick={handlePayment}>
            Add money 
        </button>
    )
}


export default AddMoney;