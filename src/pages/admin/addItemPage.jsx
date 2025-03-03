import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import mediaUpload from "../../utils/mediaUpload";
import { FaPlus, FaTimes } from "react-icons/fa";

export default function AddItemPage() {
  const [productKey, setProductKey] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productCategory, setProductCategory] = useState("audio");
  const [productDimensions, setProductDimensions] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImages, setProductImages] = useState([]);
  const navigate = useNavigate();

  async function handleAddItem() {
    const promises = productImages.map((image) => mediaUpload(image));
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const imageUrls = await Promise.all(promises);

        const result = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/products`,
          {
            key: productKey,
            name: productName,
            price: productPrice,
            category: productCategory,
            dimensions: productDimensions,
            description: productDescription,
            image: imageUrls,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        toast.success(result.data.message);
        navigate("/admin/items");
      } catch (err) {
        toast.error(err.response.data.error);
      }
    } else {
      toast.error("You are not authorized to add items");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg border">
        <h1 className="text-2xl font-bold text-center mb-6">Add Item</h1>
        <div className="space-y-4">
          <input type="text" placeholder="Product Key" value={productKey} onChange={(e) => setProductKey(e.target.value)} className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400" />
          <input type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400" />
          <input type="number" placeholder="Product Price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400" />
          <select value={productCategory} onChange={(e) => setProductCategory(e.target.value)} className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400">
            <option value="audio">Audio</option>
            <option value="lights">Lights</option>
          </select>
          <input type="text" placeholder="Product Dimensions" value={productDimensions} onChange={(e) => setProductDimensions(e.target.value)} className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400" />
          <textarea placeholder="Product Description" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400" />
          <input type="file" multiple onChange={(e) => setProductImages([...e.target.files])} className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400" />

          {productImages.length > 0 && (
            <div className="grid grid-cols-3 gap-2 mt-2">
              {Array.from(productImages).map((file, index) => (
                <img key={index} src={URL.createObjectURL(file)} alt="Preview" className="w-20 h-20 object-cover rounded" />
              ))}
            </div>
          )}

          <button onClick={handleAddItem} className="w-full flex items-center justify-center gap-2 p-3 bg-blue-500 text-white rounded hover:bg-blue-600">
            <FaPlus /> Add Item
          </button>
          <button onClick={() => navigate("/admin/items")} className="w-full flex items-center justify-center gap-2 p-3 bg-red-500 text-white rounded hover:bg-red-600">
            <FaTimes /> Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
