import Footer from "./Footer";
import Navbar from "./Navbar"


import { Outlet } from "react-router-dom";
const Body=()=>{
    return(
<>
    {/* FIXED NAVBAR */}
    <div className=" fixed top-0 left-0 right-0 z-50 h-16">
        <Navbar />
    </div>

    {/* PAGE CONTENT */}
    <main className="pt-16 pb-24 bg-base-200 min-h-screen">
        <Outlet />
    </main>

    {/* FIXED FOOTER */}
    <div className="bottom-0 left-0 right-0 z-40 h-24">
        <Footer />
    </div>
</>

)
}

export default Body;