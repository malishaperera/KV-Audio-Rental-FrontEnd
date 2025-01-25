import { GoGraph } from "react-icons/go";
import { FaRegBookmark } from "react-icons/fa";
import { LuSpeaker } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";
import { Link, Route, Routes } from "react-router-dom";

export default function AdminPage(){
    return(

        <div className="w-full h-screen flex">
            <div className="w-[300px] h-full bg-green-200">
                <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center"><GoGraph/>DashBoard</button>
                <Link to="/admin/bookings" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center"><FaRegBookmark/>Booking</Link>
                <Link to="/admin/items" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center"><LuSpeaker/>Items</Link>
                <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center"><FaRegUser/>Users</button>
                <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center"><MdOutlineReviews/>Reviews</button>
            </div>
            <div className="w-[calc(100vw-300px)] bg-red-900">
                <Routes path='/*'>
                    <Route path="/bookings" element={<h1>Booking</h1>}></Route>
                </Routes>
            </div>
        </div>
    )
}


