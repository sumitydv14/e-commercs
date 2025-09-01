"use client";
import { useState } from "react";
import Image from "next/image";

export default function CartItem({
  image = "/default-product.jpg",
  title = "Sample Product",
  price = 999,
}) {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () =>
    setQuantity((q) => (q > 1 ? q - 1 : 1));

  const total = price * quantity;

  return (
    <div className="flex items-center gap-6 bg-white shadow-md rounded-xl p-4 max-w-[1400px] mt-5 mx-auto">
      {/* Product Image */}
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="rounded-lg object-cover"
      />

      {/* Product Details */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">Price: ₹{price}</p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={decrement}
            className="px-3 py-1 bg-gray-200 rounded-lg text-lg font-bold"
          >
            −
          </button>
          <span className="text-lg font-medium">{quantity}</span>
          <button
            onClick={increment}
            className="px-3 py-1 bg-gray-200 rounded-lg text-lg font-bold"
          >
            +
          </button>
        </div>
      </div>

      {/* Total */}
      <div className="text-right">
        <p className="text-lg font-semibold text-green-600">₹{total}</p>
        <p className="text-sm text-gray-500">Total Items: {quantity}</p>
      </div>
    </div>
  );
}
