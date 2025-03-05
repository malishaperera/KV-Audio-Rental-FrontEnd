import { Route, Routes } from "react-router-dom";
import Header from "../../components/header";
import Home from "./home";
import Contact from "./contact";
import Gallery from "./gallery";
import Items from "./items";
import ErrorNotFound from "./error";
import ProductOverview from "./productOverview";

export default function HomePage(){
    return(
        <>
            <Header/>
            <div className="h-[calc(100vh-100px)] w-full bg-primary">
                <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                
                <Route path="/gallery" element={<Gallery/>}/>

                <Route path="/product/:key" element={<ProductOverview/>}/>
           
                <Route path="/items" element={<Items/>}/>
            
                <Route path="/*" element={<ErrorNotFound/>}/>
                          
                </Routes>
            </div>
        </>
    )

}