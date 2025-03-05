import axios from "axios";
import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";


export default function AdminItem() {
  const [items, setItems] = useState([]);
  const [itemsLoad, setItemsLoad] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {

        if(!itemsLoad){
            axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/api/products`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            })
            .then((res) => {
            setItems(res.data);
            setItemsLoad(true);
            })
            .catch((err) => {
            console.error(err);
            });
        }
    }, [itemsLoad]);

  const handleEdit = (key) => {
    // Implement edit logic here
  };

  const handleDelete = (key) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setItems(items.filter((item) => item.key !== key));
      axios
        .delete(`${import.meta.env.VITE_BACKEND_URL}/api/products/${key}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          setItemsLoad(false);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md relative overflow-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Admin Items</h2>
      

      {!itemsLoad && (
        <div className="flex justify-center items-center my-4">
          <div className="border-4 border-b-green-500 rounded-full animate-spin w-12 h-12"></div>
        </div>
      )}
      {itemsLoad && <div className="overflow-x-auto max-h-[500px] ">
      
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200 text-gray-700 sticky top-0">
            <tr>
              <th className="p-3 border text-left">Key</th>
              <th className="p-3 border text-left">Name</th>
              <th className="p-3 border text-center">Price ($)</th>
              <th className="p-3 border text-left">Category</th>
              <th className="p-3 border text-left">Dimensions</th>
              <th className="p-3 border text-left">Description</th>
              <th className="p-3 border text-center">Availability</th>
              <th className="p-3 border text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {items.map((product) => (
              <tr
                key={product.key}
                className="border hover:bg-gray-100 transition"
              >
                <td className="p-3 border">{product.key}</td>
                <td className="p-3 border">{product.name}</td>
                <td className="p-3 border text-center">
                  ${product.price.toFixed(2)}
                </td>
                <td className="p-3 border">{product.category}</td>
                <td className="p-3 border">{product.dimensions}</td>
                <td className="p-3 border truncate w-40">
                  {product.description}
                </td>
                <td className="p-3 border text-center">
                  {product.availability ? (
                    <span className="text-green-600 font-semibold">
                      Available
                    </span>
                  ) : (
                    <span className="text-red-600 font-semibold">
                      Not Available
                    </span>
                  )}
                </td>
                <td className="p-3 border text-center flex items-center justify-center space-x-4">
                  <button
                    onClick={()=>{
                      navigate(`/admin/items/edit`,{state:product});
                    }}
                    className="p-2 flex items-center text-blue-600 hover:text-blue-800 transition"
                  >
                    <Pencil size={20} />
                    <span className="ml-1">Edit</span>
                  </button>
                  <button
                    onClick={() => handleDelete(product.key)}
                    className="p-2 flex items-center text-red-600 hover:text-red-800 transition"
                  >
                    <Trash2 size={20} />
                    <span className="ml-1">Delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>}

      {/* Floating Add Button */}
      <Link to="/admin/items/add">
        <CiCirclePlus className="text-[70px] fixed bottom-6 right-6 text-blue-600 hover:text-blue-800 cursor-pointer transition-all duration-300" />
      </Link>
    </div>



  );
}
