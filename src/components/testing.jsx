import { useState } from "react";
import mediaUpload from "../utils/mediaUpload";

export default function Testing(){

    const [file,setFile] = useState(null);

     function uploadFile(){
        console.log(file.name);
        mediaUpload(file).then((url)=>{
            console.log(url);
        }).catch(()=>{
            
        });
    }
    
    
    return(
    
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <input type="file"  onChange={(e)=>{setFile(e.target.files[0])}}/>
            <button onClick={uploadFile} className="w-[200px] h-[50px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">Upload</button>
            
        </div>
    )
}