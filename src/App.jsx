// import ProductCard from "./components/products";
import { GoGraph } from "react-icons/go";
import { FaRegBookmark } from "react-icons/fa";
import { LuSpeaker } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";
function App() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-[300px] h-full bg-green-200">
        <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center"><GoGraph/>DashBoard</button>
        <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center"><FaRegBookmark/>Booking</button>
        <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center"><LuSpeaker/>Items</button>
        <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center"><FaRegUser/>Users</button>
        <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center"><MdOutlineReviews/>Reviews</button>
        
      </div>
      <div className="w-full bg-red-900">
       
      </div>
    </div>
  );
}

export default App;



