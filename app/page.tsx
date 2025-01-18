// import React from 'react'
// import Hero from './Hero/page'
// import Arrivals from './Arrivals/page'
// import Selling from './Selling/page'
// import Dress from './Dress/page'
// import Customer from './Customer/page'
// import Sidebar from './Sidebar/page'
// import Tshirt from './Tshirt/page'
// import Reviews from './Reviews/page'
// import Like from './Like/page'
// import Header from './components/header'
// import Footer from './components/footer'
// import AnnouncementBar from './components/AnnouncementBar'

// const page = () => {
//   return (
//     <div>
//       <AnnouncementBar/>
//       <Header/>
//       <Hero/>
//       <Arrivals/>
//       <Selling/>
//       <Dress/>
//       <Customer/>
//       <Sidebar/>
//       <Tshirt/>
//       <Reviews/>
//       <Like/>
//       <Footer/>
//     </div>
//   )
// }
import Image from 'next/image'; // Import the Image component
import { sanityFetch } from "@/sanity/lib/fetch"; // Import your custom fetch function
import { allproducts } from "@/sanity/lib/queries"; // Import the query

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: { asset: { url: string } }; // Adjust the image type to match Sanity's structure
};

export default async function Home() {
  const products: Product[] = await sanityFetch({ query: allproducts });

  console.log("Fetched products:", products);  // Log the products to check the data

  return (
    <div>
      <h1 className="text-5xl font-extrabold text-center text-whi my-8 font-serif tracking-tight">
  Products
</h1>
<div className="grid grid-cols-3 gap-8 p-4">
        {products.map((product) => (
          <div className="border p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" key={product._id}>
            {/* Check if image URL exists */}
            {product.image && product.image.asset && product.image.asset.url ? (
              <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src={product.image.asset.url} // Image URL from Sanity
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ) : (
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg mb-4">
                <p className="text-gray-500">No image available</p>
              </div>
            )}
            <h2 className="text-xl font-semibold text-white text-center truncate">{product.name}</h2> {/* Product name */}
            <p className="text-sm text-white text-center mt-2">{product.description}</p> {/* Description */}
            <p className="text-center text-lg font-semibold text-white mt-4">Price: ${product.price}</p> {/* Price */}
          </div>
        ))}
      </div>
    </div>
  );
}
