"use client";
// import CartItem from "@/app/components/cardItem";
// import { useState } from "react";

export default function CartPage() {
  // Example dummy data (later can fetch from API or state)
  // const [cart, setCart] = useState([
  //   { id: 1, title: "Cool T-Shirt", price: 499, image: "/default-product.jpg" },
  //   { id: 2, title: "Sneakers", price: 1999, image: "/default-product.jpg" },
  // ]);

  // Calculate total
  // const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="px-6 py-12 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {/* Cart Items */}
      {/* {cart.map((item) => (
        <CartItem
          key={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
        />
      ))}

      {/* Cart Summary 
      <div className="flex justify-end mt-8">
        <div className="bg-white shadow-md rounded-xl p-6 w-80">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <p className="flex justify-between text-gray-600">
            <span>Subtotal:</span> <span>₹{totalPrice}</span>
          </p>
          <p className="flex justify-between text-gray-600">
            <span>Shipping:</span> <span>₹0</span>
          </p>
          <hr className="my-2" />
          <p className="flex justify-between font-bold text-lg">
            <span>Total:</span> <span>₹{totalPrice}</span>
          </p>
          <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Checkout
          </button>
        </div>
      </div> */}
    </div>
  );
}
