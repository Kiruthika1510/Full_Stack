import { useState } from "react";

export default function ProductListing() {
  const [products] = useState([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Smartphone", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 },
    { id: 4, name: "Smartwatch", price: 5000 }
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">🛒 Product Listing</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 rounded shadow text-center">
            <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
            <p className="mb-2">Price: ₹{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-white p-4 rounded shadow">
        <h3 className="font-semibold text-lg mb-2">Cart ({cart.length})</h3>
        {cart.length === 0 ? (
          <p className="text-gray-500">No items in cart.</p>
        ) : (
          <ul className="list-disc list-inside">
            {cart.map((item, index) => (
              <li key={index}>{item.name} - ₹{item.price}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
