// pages/index.js
export default function Hero() {
    return (
      <div className="bg-white relative">
        {/* Hero Section with Image and Overlay Text */}
        <div className="relative">
          {/* Main Image */}
          <img
            src="/hero/clothes.svg" // Replace with your image path
            alt="Fashion Models"
            className="w-full lg:w-[100%] rounded-lg"
          />
  
          {/* Overlay Text on Image */}
          <div className="absolute top-52 left-28 text-left space-y-8 ">
  <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
    FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
  </h1>
  <p className="text-gray-600 text-lg leading-relaxed">
    Browse through our diverse range of meticulously crafted garments,<br /> designed 
    to bring out your individuality and cater to your sense of style.
  </p>
  <button className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition duration-300">
    Shop Now
  </button>
</div>

        </div>
        <section className="bg-black py-6">
          <div className="container mx-auto px-4 flex justify-center space-x-12">
            <span className="text-white text-lg font-semibold tracking-wide">VERSACE</span>
            <span className="text-white text-lg font-semibold tracking-wide">ZARA</span>
            <span className="text-white text-lg font-semibold tracking-wide">GUCCI</span>
            <span className="text-white text-lg font-semibold tracking-wide">PRADA</span>
            <span className="text-white text-lg font-semibold tracking-wide">Calvin Klein</span>
          </div>
        </section>
      </div>
    );
  }
  // Responsive
  
  