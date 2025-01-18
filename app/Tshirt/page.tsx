"use client";
import { useState } from 'react';

export default function Tshirt() {
  const [selectedColor, setSelectedColor] = useState('green');
  const [selectedSize, setSelectedSize] = useState('Large');
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-5xl mx-auto p-6"> {/* Added gap with padding */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Adjusted gap */}
        {/* Left Side - Images */}
        <div className="space-y-4">
          <img
            src="/tshirt/image 1.svg"
            alt="T-shirt"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Side - Product Info */}
        <div className="space-y-4"> {/* Added spacing between sections */}
          <h1 className="text-2xl font-bold">ONE LIFE GRAPHIC T-SHIRT</h1>
          <div className="flex items-center mt-2 space-x-2"> {/* Added gap between stars and reviews */}
            <span className="text-yellow-500 text-lg">★ ★ ★ ★ ☆</span>
            <span className="text-gray-600 text-sm">(451 reviews)</span>
          </div>
          <div className="flex items-center space-x-4 mt-4"> {/* Adjusted gap for price */}
            <span className="text-2xl font-bold text-gray-900">$260</span>
            <span className="text-lg line-through text-gray-500">$300</span>
            <span className="text-red-600 text-lg">-40%</span>
          </div>
          <p className="mt-4 text-gray-700 leading-relaxed"> {/* Added leading to space text better */}
            This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
          </p>
          {/* Color Selection */}
          <div className="mt-6"><hr /><br />
            <h3 className="font-semibold">Select Colors</h3>
            <div className="flex space-x-3 mt-3"> {/* Added margin */}
              {['#314F4A', '#4F4631', '#31344F'].map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color ? 'border-black' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div> <br /> <hr />

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Choose Size</h3>
            <div className="flex space-x-4 mt-2">
              {['Small', 'Medium', 'Large', 'X-Large'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border ${
                    selectedSize === size ? 'border-black' : 'border-gray-300'
                  } rounded-lg`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div> <br /><hr />

          {/* Quantity & Add to Cart */}
          <div className="mt-6 flex items-center space-x-6"> {/* Added more space */}
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="px-4 py-2 bg-gray-100"
              >
                -
              </button>
              <span className="px-4 text-gray-600">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="px-4 py-2 bg-gray-100"
              >
                +
              </button>
            </div>
            <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-transform transform hover:scale-105"> {/* Added hover effects */}
              Add to Cart
            </button>
          </div>
        </div>
      </div>
       {/* Tabs */}
       <div className="mt-8">
        <div className="border-b">
            <ul className="flex justify-center space-x-40">
                {/* Navigation Tabs */}
                <li className="pb-2 cursor-pointer hover:text-black hover:scale-105 transition-all duration-300">Product Details</li>
                <li className="pb-2 border-b-4 border-black cursor-pointer hover:text-black hover:scale-105 transition-all duration-300">Rating & Reviews</li>
                <li className="pb-2 cursor-pointer hover:text-black hover:scale-105 transition-all duration-300">FAQs</li>
                </ul>
       </div>
     </div>
</div>
);
}

