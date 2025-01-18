import React from 'react'
import Image from 'next/image';


export const Selling = () => {
  return (
    <section className="py-14 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 border-t-[1px] border-solid border-[#CCCCCC]"> <br />
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-center text-gray-800 mb-10">
          TOP SELLING
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="relative border rounded-lg shadow-lg p-4 sm:p-6 bg-white transition-transform transform hover:scale-105 hover:shadow-xl">
            <Image
              src="/selling/shirt2.svg"
              alt="Skinny Fit Jeans"
              width={160}
              height={160}
              className="mx-auto mb-4 sm:mb-6 object-contain"
            />
            <h3 className="text-lg font-semibold text-gray-700 text-center">
                Vertical Striped Shirt
            </h3>
            <p className="text-yellow-500 mt-2 text-sm text-center">⭐⭐⭐⭐☆</p>
            <p className="text-gray-600 text-sm mt-1 text-center">5.0/5</p>
            <div className="flex justify-center items-center mt-4 space-x-2">
              <span className="text-2xl font-bold text-gray-800">$212</span>
              <span className="line-through text-gray-500">$232</span>
              <span className="text-red-600">(-20%)</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative border rounded-lg shadow-lg p-4 sm:p-6 bg-white transition-transform transform hover:scale-105 hover:shadow-xl">
            <Image
              src="/selling/t-shirt3.svg"
              alt="Skinny Fit Jeans"
              width={160}
              height={160}
              className="mx-auto mb-4 sm:mb-6 object-contain"
            />
            <h3 className="text-lg font-semibold text-gray-700 text-center">
              Courage Graphic T-shirt
            </h3>
            <p className="text-yellow-500 mt-2 text-sm text-center">⭐⭐⭐⭐☆</p>
            <p className="text-gray-500 text-sm mt-1 text-center">4.0/5</p>
            <p className="text-2xl font-bold text-gray-800 mt-4 text-center">$145</p>
          </div>

          {/* Card 3 */}
          <div className="relative border rounded-lg shadow-lg p-4 sm:p-6 bg-white transition-transform transform hover:scale-105 hover:shadow-xl">
            <Image
              src="/selling/shorts.svg"
              alt="Checkered Shirt"
              width={160}
              height={160}
              className="mx-auto mb-4 sm:mb-6 object-contain"
            />
            <h3 className="text-lg font-semibold text-gray-700 text-center">
              Loose Fit Bermuda Shorts
            </h3>
            <p className="text-yellow-500 mt-2 text-sm text-center">⭐⭐⭐⭐☆</p>
            <p className="text-gray-500 text-sm mt-1 text-center">3.0/5</p>
            <p className="text-2xl font-bold text-gray-800 mt-4 text-center">$80</p>
          </div>

          {/* Card 4 */}
          <div className="relative border rounded-lg shadow-lg p-4 sm:p-6 bg-white transition-transform transform hover:scale-105 hover:shadow-xl">
            <Image
              src="/selling/jeens2.svg"
              alt="Sleeve Striped T-shirt"
              width={160}
              height={160}
              className="mx-auto mb-4 sm:mb-6 object-contain"
            />
            <h3 className="text-lg font-semibold text-gray-700 text-center">
              Faded Skinny Jeans
            </h3>
            <p className="text-yellow-500 mt-2 text-sm text-center">⭐⭐⭐⭐☆</p>
            <p className="text-gray-500 text-sm mt-1 text-center">4.5/5</p>
            <p className="text-2xl font-bold text-gray-800 mt-4 text-center">$210</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 text-lg font-medium text-white bg-black rounded-lg shadow hover:bg-gray-800 transition-transform transform hover:scale-105">
            View All
          </button>
        </div>
      </div>
    </section>
  )
}
export default Selling;
