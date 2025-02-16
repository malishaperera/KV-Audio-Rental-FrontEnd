import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function AdminItem (){ 

    //Items array - first frontEnd Create 
    const sampleArr = [
        {
            key: "PROD001",
            name: "Wireless Mouse",
            price: 25.99,
            category: "Electronics",
            dimensions: "4.5 x 2.5 x 1.5 inches",
            description: "Ergonomic wireless mouse with adjustable DPI and silent click.",
            availability: true,
            image: [
                "https://example.com/images/wireless-mouse.jpg"
            ]
        },
        {
            key: "PROD002",
            name: "Bluetooth Headphones",
            price: 59.99,
            category: "Electronics",
            dimensions: "6 x 3 x 7 inches",
            description: "Noise-canceling over-ear Bluetooth headphones with 20-hour battery life.",
            availability: true,
            image: [
                "https://example.com/images/bluetooth-headphones.jpg"
            ]
        },
        {
            key: "PROD003",
            name: "Gaming Keyboard",
            price: 45.99,
            category: "Accessories",
            dimensions: "17 x 5 x 1.5 inches",
            description: "Mechanical RGB gaming keyboard with customizable keys and anti-ghosting.",
            availability: false,
            image: [
                "https://example.com/images/gaming-keyboard.jpg"
            ]
        },
        {
            key: "PROD004",
            name: "Smartphone Stand",
            price: 12.99,
            category: "Accessories",
            dimensions: "5 x 4 x 6 inches",
            description: "Adjustable aluminum smartphone stand for desk use.",
            availability: true,
            image: [
                "https://example.com/images/smartphone-stand.jpg"
            ]
        },
        {
            key: "PROD005",
            name: "Portable Power Bank",
            price: 39.99,
            category: "Electronics",
            dimensions: "5.5 x 2.7 x 1 inches",
            description: "10000mAh fast-charging power bank with dual USB ports.",
            availability: true,
            image: [
                "https://example.com/images/power-bank.jpg"
            ]
        }
    ];

    const [items, setItems] = useState(sampleArr);

    return(

        <div className="w-full h-full relative">

            <table>
                <thead>
                    {
                        items.map((product)=>{
                            return(
                                <tr key={product.key}>
                                    <td>{product.key}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.category}</td>
                                    <td>{product.dimensions}</td>
                                    <td>{product.description}</td>
                                    <td>{product.availability}</td>
                                </tr>
                            )

                        }) 
                    }
                </thead>
               
            </table>

            <Link to="/admin/items/add">
                <CiCirclePlus className="text-[70px] absolute right-2 bottom-2 hover:text-red-900"/>
            </Link>
            
        </div>
    
    )
}