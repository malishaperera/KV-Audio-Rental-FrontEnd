import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddItemPage() {
    const [productKey, setProductKey] = useState();
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productCategory, setProductCategory] = useState("Audio");
    const [productDimensions, setProductDimensions] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const navigate = useNavigate();


    async function handleAddItem() {
        console.log("Submitted", productKey, productName, productPrice, productCategory, productDimensions, productDescription);

        const token = localStorage.getItem('token')

        //project specific
        if(token === null){
            toast.error("Please Login first");
        }

        try{
            const result = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/products`,{

                key:productKey,
                name:productName,
                price:productPrice,
                category:productCategory,
                dimensions:productDimensions,
                description:productDescription
            },{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success(result.data.message,"Item Added");
            console.log(result);
            navigate("/admin/items");
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className="w-full h-full flex flex-col items-center p-4">
            <h1 className="text-2xl font-bold mb-4">Add Item</h1>
            <div className="w-[400px] border p-4 flex flex-col gap-2 rounded-lg shadow-md">
                <input 
                    type="text" 
                    placeholder="Product Key" 
                    value={productKey} 
                    onChange={(e) => setProductKey(e.target.value)} 
                    className="p-2 border rounded"
                />
                <input 
                    type="text" 
                    placeholder="Product Name" 
                    value={productName} 
                    onChange={(e) => setProductName(e.target.value)} 
                    className="p-2 border rounded"
                />
                <input 
                    type="text" 
                    placeholder="Product Price" 
                    value={productPrice} 
                    onChange={(e) => setProductPrice(e.target.value)} 
                    className="p-2 border rounded"
                />
                <select 
                    value={productCategory} 
                    onChange={(e) => setProductCategory(e.target.value)} 
                    className="p-2 border rounded"
                >
                    <option value="Audio">Audio</option>
                    <option value="Lights">Lights</option>
                </select>
                <input 
                    type="text" 
                    placeholder="Product Dimensions" 
                    value={productDimensions} 
                    onChange={(e) => setProductDimensions(e.target.value)} 
                    className="p-2 border rounded"
                />
                <input 
                    type="text" 
                    placeholder="Product Description" 
                    value={productDescription} 
                    onChange={(e) => setProductDescription(e.target.value)} 
                    className="p-2 border rounded"
                />
                <button onClick={handleAddItem} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add</button>
                <button onClick={() => navigate("/admin/items")} className="p-2 bg-red-500 text-white rounded hover:bg-red-600">Cancel</button>
            </div>
        </div>
    );
}