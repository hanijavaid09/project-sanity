"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const products = [
    { id: 1, image: "/like/Frame 2.svg", name: "Gradient Graphic T-Shirt", price: "$145" },
    { id: 2, image: "/like/Frame 3.svg", name: "Polo with Tipping Details", price: "$180" },
    { id: 3, image: "/like/Frame 4.svg", name: "Black Striped T-Shirt", price: "$120" },
    { id: 4, image: "/arrivals/jeens1.svg", name: "Skinny Fit Jeans", price: "$240" },
    { id: 5, image: "/arrivals/shirt1.svg", name: "Checkered Shirt", price: "$180" },
    { id: 6, image: "/arrivals/t-shirt2.svg", name: "Sleeve Striped T-shirt", price: "$130" },
    { id: 7, image: "/selling/shirt2.svg", name: "Vertical Striped Shirt", price: "$212" },
    { id: 8, image: "/selling/t-shirt3.svg", name: "Courage Graphic T-shirt", price: "$145" },
    { id: 9, image: "/selling/shorts.svg", name: "Loose Fit Bermuda Shorts", price: "$80" },
  ];

  return (
    <section className="w-full px-4 py-8 bg-gray-50">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside
  className={`fixed md:static bg-white z-20 w-[300px] p-6 shadow-lg transform ${
    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
  } md:translate-x-0 transition-transform duration-300`}
>
  {/* Sidebar Header */}
  <h3 className="font-bold text-xl mb-6">Filters</h3>

  {/* Price Filter */}
  <div className="mb-8">
    <h4 className="font-medium text-sm mb-4">Price</h4>
    <div className="space-y-2">
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" /> $80 - $160
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" /> Above $240
      </label>
    </div>
  </div>

  {/* Color Filter */}
  <div className="mb-8"><hr /><br />
    <h4 className="font-medium text-sm mb-4">Colors</h4>
    <div className="grid grid-cols-4 gap-2">
      <span className="w-6 h-6 bg-blue-500 rounded-full"></span>
      <span className="w-6 h-6 bg-red-500 rounded-full"></span>
      <span className="w-6 h-6 bg-yellow-500 rounded-full"></span>
      <span className="w-6 h-6 bg-green-500 rounded-full"></span>
      <span className="w-6 h-6 bg-pink-500 rounded-full"></span>
      <span className="w-6 h-6 bg-purple-500 rounded-full"></span>
      <span className="w-6 h-6 bg-orange-500 rounded-full"></span>
      <span className="w-6 h-6 bg-black rounded-full"></span>
    </div>
  </div><hr /><br />

  {/* Size Filter */}
  <div className="mb-8">
    <h4 className="font-medium text-sm mb-4">Size</h4>
    <div className="space-y-2">
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" /> Small
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" /> Medium
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" /> Large
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" /> Extra Large
      </label>
    </div>
  </div><hr /><br />

  {/* Dress Style */}
  <div className="mb-8">
    <h4 className="font-medium text-sm mb-4">Dress Style</h4>
    <div className="space-y-2">
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" /> Casual
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" /> Formal
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" /> Party
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" /> Gym
      </label>
    </div>
  </div> <hr /> <br />

  {/* Apply Filters Button */}
  <button className="w-full bg-black text-white py-2 rounded-lg font-medium">
    Apply Filters
  </button>
</aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-2xl">Casual</h3>
            <button
              className="md:hidden text-black font-medium"
              onClick={() => setIsSidebarOpen(true)}
            >
              ☰ Filters
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link href="#" key={product.id}>
                <div className="bg-white p-4 border rounded-lg shadow hover:shadow-md transition-shadow">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full mb-3"
                  />
                  <p className="text-lg font-bold">{product.name}</p>
                  <p className="text-md font-semibold text-gray-800">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Sidebar;