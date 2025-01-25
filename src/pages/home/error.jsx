import { Link } from "react-router-dom";


export default function ErrorNotFound(){
    return(
        <div>
             <h1>404 Error: Page Not Found</h1>
             <Link to="/" className="text-[25px] font-bold m-1 bg-[#f0ad38] p-1">Back to home 
             </Link>
        </div>

    )
}