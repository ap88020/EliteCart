import React from 'react';
import { MdDeleteOutline } from "react-icons/md";



const CartContent = () => {
    const cartProducts = [
        {
            productId: 1,
            name: "T-shirt",
            size: "M",
            color: "Red",
            quantity: 1,
            price: 15,
            image: "https://picsum.photos/200?random=1"
        },
        {
            productId: 2,
            name: "Jeans",
            size: "L",
            color: "blue",
            quantity: 1,
            price: 25,
            image: "https://picsum.photos/200?random=2"
        },
    ];

    return (
        <div className="w-full max-w-md mx-auto p-4 shadow-md rounded-md">
            {cartProducts.map((product, idx) => (
                <div
                    key={idx}
                    className="flex items-center  py-1 border-b"
                >
                    <div className="flex items-center gap-x-2">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-16 w-16 object-cover rounded-md"
                        />
                        <div className="text-left text-white">
                            <h3 className="font-semibold">{product.name}</h3>
                            <p className="text-sm text-green-600">
                                Size: {product.size} | Color: {product.color}
                            </p>
                            <div className='flex items-center mt-1 space-x-1'> 
                                <button className='border py-0 px-1 rounded text-xl items-center font-medium'>-</button>
                                <span>{product.quantity}</span>
                                <button className='border py-0 px-1 rounded text-xl items-center font-medium'>+</button>
                            </div>
                        </div>
                        <div className='ml-16'>
                            <p className='text-white'>${product.price.toLocaleString()}</p>
                            <button>
                                < MdDeleteOutline className='text-red-300' />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartContent;
