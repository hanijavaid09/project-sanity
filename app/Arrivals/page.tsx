import React from 'react'
import Image from 'next/image';

export const Arrivals = () => {
  return (
    <section className="py-14 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-10">
          NEW ARRIVALS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="relative border rounded-lg shadow-lg p-4 sm:p-6 bg-white transition-transform transform hover:scale-105 hover:shadow-xl">
            <Image
              src="/arrivals/t-shirt1.svg"
              alt="Skinny Fit Jeans"
              width={160}
              height={160}
              className="mx-auto mb-6 object-contain"
            />
            <h3 className="text-lg font-semibold text-gray-700 text-center">
              T-shirt with Tape Details
            </h3>
            <p className="text-yellow-500 mt-2 text-sm text-center">⭐⭐⭐⭐☆</p>
            <p className="text-gray-600 text-sm mt-1 text-center">4.5/5</p>
            <div className="flex justify-center items-center mt-4 space-x-2">
              <span className="text-2xl font-bold text-gray-800">$220</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative border rounded-lg shadow-lg p-4 sm:p-6 bg-white transition-transform transform hover:scale-105 hover:shadow-xl">
            <Image
              src="/arrivals/jeens1.svg"
              alt="Skinny Fit Jeans"
              width={160}
              height={160}
              className="mx-auto mb-6 object-contain"
            />
            <h3 className="text-lg font-semibold text-gray-700 text-center">
              Skinny Fit Jeens
            </h3>
            <p className="text-yellow-500 mt-2 text-sm text-center">⭐⭐⭐⭐☆</p>
            <p className="text-gray-600 text-sm mt-1 text-center">3.5/5</p>
            <div className="flex justify-center items-center mt-4 space-x-2">
              <span className="text-2xl font-bold text-gray-800">$240</span>
              <span className="line-through text-gray-500">$160</span>
              <span className="text-red-600">(-20%)</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative border rounded-lg shadow-lg p-4 sm:p-6 bg-white transition-transform transform hover:scale-105 hover:shadow-xl">
            <Image
              src="/arrivals/shirt1.svg"
              alt="Checkered Shirt"
              width={160}
              height={160}
              className="mx-auto mb-6 object-contain"
            />
            <h3 className="text-lg font-semibold text-gray-700 text-center">
              Checkered Shirt
            </h3>
            <p className="text-yellow-500 mt-2 text-sm text-center">⭐⭐⭐⭐☆</p>
            <p className="text-gray-500 text-sm mt-1 text-center">4.5/5</p>
            <p className="text-2xl font-bold text-gray-800 mt-4 text-center">$180</p>
          </div>

          {/* Card 4 */}
          <div className="relative border rounded-lg shadow-lg p-4 sm:p-6 bg-white transition-transform transform hover:scale-105 hover:shadow-xl">
            <Image
              src="/arrivals/t-shirt2.svg"
              alt="Skinny Fit Jeans"
              width={160}
              height={160}
              className="mx-auto mb-6 object-contain"
            />
            <h3 className="text-lg font-semibold text-gray-700 text-center">
              Sleeve Striped T-shirt
            </h3>
            <p className="text-yellow-500 mt-2 text-sm text-center">⭐⭐⭐⭐☆</p>
            <p className="text-gray-600 text-sm mt-1 text-center">4.5/5</p>
            <div className="flex justify-center items-center mt-4 space-x-2">
              <span className="text-2xl font-bold text-gray-800">$130</span>
              <span className="line-through text-gray-500">$160</span>
              <span className="text-red-600">(-30%)</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 text-lg font-medium text-white bg-black rounded-lg shadow-md hover:bg-gray-800 transition-transform transform hover:scale-105">
            View All
          </button>
        </div>
      </div>
    </section>
  )
}
export default Arrivals