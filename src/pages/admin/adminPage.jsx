import { GoGraph } from "react-icons/go";
import { FaRegBookmark } from "react-icons/fa";
import { LuSpeaker } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";
import { Link, Route, Routes } from "react-router-dom";
import AdminItem from "./adminItem";
import AddItemPage from "./addItemPage";
import UpdateItemPage from "./updateItemPage";


export default function AdminPage(){
    return(

        <div className="w-full h-screen flex">
            <div className="w-[250px] h-full bg-green-200">
                <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center"><GoGraph/>DashBoard</button>
                <Link to="/admin/bookings" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center"><FaRegBookmark/>Booking</Link>
                <Link to="/admin/items" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center"><LuSpeaker/>Items</Link>
                <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center"><FaRegUser/>Users</button>
                <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center"><MdOutlineReviews/>Reviews</button>
            </div>
            <div className="w-[calc(100vw-250px)]">
            {/* bg-red-900 */}
                <Routes path='/*'>
                    <Route path="/bookings" element={<h1>Booking</h1>}></Route>
                    <Route path="/items" element={<AdminItem/>}></Route>
                    <Route path="/items/add" element={<AddItemPage/>}></Route>
                    <Route path="/items/edit" element={<UpdateItemPage/>}></Route>
                </Routes>
            </div>
        </div>
    )
}


