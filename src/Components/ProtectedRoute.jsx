import axios from "axios";
import { useEffect, useState } from "react"
import Base_url from "../Constants/Base_url";
import { Navigate} from "react-router-dom";


const ProtectedRoute=({children})=>{
    const [loading,setLoading]=useState(true);
    const[isAuth,setIsAuth]=useState(false);

    useEffect(()=>{
        async function checkAuth(){
            try{
                await axios.get(Base_url+"/auth/protected",{withCredentials:true})
                setIsAuth(true);
            }
            catch(err){
                setIsAuth(false);
            } finally{
                setLoading(false);
            }
        }
        checkAuth();
    },[])

    if(loading){
        return <div>Loading...</div>
    }
    

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
    return children;

}

export default ProtectedRoute;