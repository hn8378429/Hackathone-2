// export default function Banner() {
//   return (
//     <div className="bg-yellow-100 p-0 flex flex-col gap-0">
//       {/* First Section */}
//       <div className="flex items-center justify-between">
//         {/* Text Section */}
//         <div className="flex-1 text-left pr-6">
//           <h2 className="text-4xl font-semibold">Rocket Single Seater</h2>
//           <button className="inline text-black font-bold border-b-2 border-black hover:text-gray-800 mt-1">
//             Shop Now
//           </button>
//         </div>

//         {/* Image Section */}
//         <div className="flex-1 flex justify-start">
//           <img
//             src="/SingleSofa.png" // Replace with the actual path to your image
//             alt="Rocket Single Seater"
//             style={{
//               width: "755px",
//               height: "700px",
//             }}
//             className="object-contain"
//           />
//         </div>
//       </div>

//       {/* Second Section with Two Images Side by Side */}
//       <div className="bg-white p-0 rounded-lg shadow-md">
//         <div className="flex items-center justify-between gap-0">
//           {/* First Image and Text */}
//           <div className="flex-1 flex flex-col items-center text-center">
//             <img
//               src="/Mask group (4).png" // Replace with the actual path to your image
//               alt="First Image"
//               style={{
//                 width: "355px",
//                 height: "400px",
//               }}
//               className="mb-4"
//             />
//             <h2 className="text-2xl font-semibold mb-2">Side Table</h2>
//             <button className="inline text-black font-bold border-b-2 border-black hover:text-gray-800">
//               View More
//             </button>
//           </div>

//           {/* Second Image and Text */}
//           <div className="flex-1 flex flex-col items-center text-center">
//             <img
//               src="/Mask group (1).png" // Replace with the actual path to your image
//               alt="Second Image"
//               style={{
//                 width: "355px",
//                 height: "400px",
//               }}
//               className="mb-4"
//             />
//             <h2 className="text-2xl font-semibold mb-2">Side Single Sofa</h2>
//             <button className="inline text-black font-bold border-b-2 border-black hover:text-gray-800">
//               View More
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Third Section: Four Images with Text and Prices */}
//       <div className="bg-white p-0 rounded-lg shadow-md">
//         {/* Section Title */}
//         <div className="text-center mb-10">
//           <h2 className="text-black-600">
//             Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
//           </h2>
//           <p className="text-3xl font-bold">Top Picks For You</p>
//         </div>

//         {/* Images Row */}
//         <div className="grid grid-cols-4 gap-8">
//           {/* First Product */}
//           <div className="flex flex-col items-center">
//             <img
//               src="/Mask group (6).png" // Replace with the actual path to your image
//               alt="Trenton modular sofa"
//               className="w-48 h-48 object-contain mb-4"
//             />
//             <p className="text-black-600">Trenton modular sofa-3</p>
//             <h3 className="text-lg font-medium">Rs. 25,000.00</h3>
//           </div>

//           {/* Second Product */}
//           <div className="flex flex-col items-center">
//             <img
//               src="Granite dining table with dining chair 1.png" // Replace with the actual path to your image
//               alt="Granite dining table"
//               className="w-48 h-48 object-contain mb-4"
//             />
//             <p className="text-black-600">
//               Granite dining table with dining chairs
//             </p>
//             <h3 className="text-lg font-medium">Rs. 25,000.00</h3>
//           </div>

//           {/* Third Product */}
//           <div className="flex flex-col items-center">
//             <img
//               src="/Mask group (5).png" // Replace with the actual path to your image
//               alt="Outdoor bar table"
//               className="w-48 h-48 object-contain mb-4"
//             />
//             <p className="text-black-600">Outdoor bar table</p>
//             <h3 className="text-lg font-medium">Rs. 25,000.00</h3>
//           </div>

//           {/* Fourth Product */}
//           <div className="flex flex-col items-center">
//             <img
//               src="/Mask group (3).png" // Replace with the actual path to your image
//               alt="Plain console with mirror"
//               className="w-48 h-48 object-contain mb-4"
//             />
//             <p className="text-black-600">Plain console with mirror</p>
//             <h3 className="text-lg font-medium">Rs. 25,000.00</h3>
//           </div>
//         </div>

//         {/* View More Button */}
//         <div className="flex justify-center mt-8">
//           <button className="px-8 py-3 bg-black text-white rounded hover:bg-gray-800">
//             View More
//           </button>
//         </div>
//       </div>

//       {/* New Section with Uploaded Image */}
//       <div className="bg-[#FFF8E6] flex items-center justify-between px-10 py-16">
//   {/* Left Image Section */}
//   <div className="flex-1">
//     <img
//       src="/Asgaard sofa 1.png" // Replace with your uploaded image path
//       alt="Asgaard Sofa"
//       className="w-full h-auto object-contain"
//     />
//   </div>

//   {/* Right Text Section */}
//   <div className="flex-1 text-left pl-10">
//     <p className="text-lg text-gray-600 mb-4">New Arrivals</p>
//     <h2 className="text-4xl font-bold text-black mb-6">Asgaard sofa</h2>
//     <button className="px-6 py-3 bg- text-black border border-black rounded">
//       Order Now
//     </button>
//   </div>
// </div>
 

//       {/* Blog Section */}
//       <div className="bg-gray-50 py-16">
//         <div className="text-center mb-10">
//           <h2 className="text-4xl font-bold">Our Blogs</h2>
//           <p className="text-gray-500 mt-2">
//             Find a bright idea to suit your taste with our great selection
//           </p>
//         </div>

//         {/* Blog Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
//           {/* Blog Card 1 */}
//           <div className="bg-white rounded-lg shadow-md overflow-hidden">
//             <img
//               src="/Rectangle 15.png" // Replace with the path to your image
//               alt="Blog Image 1"
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2">
//                 Going all-in with millennial design
//               </h3>
//               <p className="text-gray-500 mb-4">5 min &nbsp; | &nbsp; 12th Oct 2022</p>
//               <button className="text-blue-500 font-semibold hover:underline">
//                 Read More
//               </button>
//             </div>
//           </div>

//           {/* Blog Card 2 */}
//           <div className="bg-white rounded-lg shadow-md overflow-hidden">
//             <img
//               src="/Rectangle 14.png" // Replace with the path to your image
//               alt="Blog Image 2"
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2">
//                 Exploring creative workspace designs
//               </h3>
//               <p className="text-gray-500 mb-4">5 min &nbsp; | &nbsp; 12th Oct 2022</p>
//               <button className="text-blue-500 font-semibold hover:underline">
//                 Read More
//               </button>
//             </div>
//           </div>

//           {/* Blog Card 3 */}
//           <div className="bg-white rounded-lg shadow-md overflow-hidden">
//             <img
//               src="/Rectangle 13.png" // Replace with the path to your image
//               alt=""
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2">
//                 Modern furniture for your home
//               </h3>
//               <p className="text-gray-500 mb-4">5 min &nbsp; | &nbsp; 12th Oct 2022</p>
//               <button className="text-blue-500 font-semibold hover:underline">
//                 Read More
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* View All Button */}
//         <div className="flex justify-center mt-10">
//           <button className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800">
//             View All Posts
//           </button>
//         </div>
//       </div>

//       <div
//         className="bg-gray-50 py-16 bg-cover bg-center"
//         style={{ backgroundImage: "url('/Rectangle 17.png')" }}
//       >
//         <div className="text-center mb-6">
//           <h2 className="text-3xl font-bold text-black">Our Instagram</h2>
//           <p className="text-black-200 mt-2">Follow our store on Instagram</p>
//         </div>
//         <div className="flex justify-center">
//           <button className="px-8 py-3 bg-lightwhite text-black font-semibold rounded hover:bg-black-800">
//             Follow Us
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


export default function Banner() {
  return (
    <div className="bg-yellow-100 p-0 flex flex-col gap-8">
      {/* First Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-4 lg:px-12">
        {/* Text Section */}
        <div className="flex-1 text-left md:pr-6">
          <h2 className="text-2xl md:text-4xl font-semibold">Rocket Single Seater</h2>
          <button className="inline text-black font-bold border-b-2 border-black hover:text-gray-800 mt-2">
            Shop Now
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src="/SingleSofa.png"
            alt="Rocket Single Seater"
            className="w-full md:w-3/4 lg:w-auto h-auto object-contain"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* First Image and Text */}
          <div className="flex-1 flex flex-col items-center text-center">
            <img
              src="/Mask group (4).png"
              alt="Side Table"
              className="w-full md:w-64 lg:w-72 h-auto object-contain mb-4"
            />
            <h2 className="text-lg md:text-2xl font-semibold mb-2">Side Table</h2>
            <button className="inline text-black font-bold border-b-2 border-black hover:text-gray-800">
              View More
            </button>
          </div>

          {/* Second Image and Text */}
          <div className="flex-1 flex flex-col items-center text-center">
            <img
              src="/Mask group (1).png"
              alt="Side Single Sofa"
              className="w-full md:w-64 lg:w-72 h-auto object-contain mb-4"
            />
            <h2 className="text-lg md:text-2xl font-semibold mb-2">Side Single Sofa</h2>
            <button className="inline text-black font-bold border-b-2 border-black hover:text-gray-800">
              View More
            </button>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="text-center mb-8">
          <h2 className="text-lg md:text-xl text-gray-600">
            Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
          </h2>
          <p className="text-2xl md:text-3xl font-bold">Top Picks For You</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {/* Products */}
          {[
            { img: '/Mask group (6).png', title: 'Trenton modular sofa-3', price: 'Rs. 25,000.00' },
            { img: '/Granite dining table with dining chair 1.png', title: 'Granite dining table', price: 'Rs. 25,000.00' },
            { img: '/Mask group (5).png', title: 'Outdoor bar table', price: 'Rs. 25,000.00' },
            { img: '/Mask group (3).png', title: 'Plain console with mirror', price: 'Rs. 25,000.00' },
          ].map((product, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={product.img}
                alt={product.title}
                className="w-32 md:w-48 h-32 md:h-48 object-contain mb-2"
              />
              <p className="text-sm md:text-base text-gray-600">{product.title}</p>
              <h3 className="text-base md:text-lg font-medium">{product.price}</h3>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800">
            View More
          </button>
        </div>
      </div>

      {/* New Section with Uploaded Image */}
      <div className="bg-[#FFF8E6] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-8 lg:py-16">
        {/* Left Image Section */}
        <div className="flex-1">
          <img
            src="/Asgaard sofa 1.png"
            alt="Asgaard Sofa"
            className="w-full md:w-3/4 lg:w-auto h-auto object-contain"
          />
        </div>

        {/* Right Text Section */}
        <div className="flex-1 text-left lg:pl-10 mt-6 lg:mt-0">
          <p className="text-base md:text-lg text-gray-600 mb-4">New Arrivals</p>
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-6">Asgaard sofa</h2>
          <button className="px-6 py-3 border border-black text-black rounded hover:bg-black hover:text-white">
            Order Now
          </button>
        </div>
      </div>

      {/* Blog Section */}
      <div className="bg-gray-50 py-8 lg:py-16">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-4xl font-bold">Our Blogs</h2>
          <p className="text-sm md:text-base text-gray-500 mt-2">
            Find a bright idea to suit your taste with our great selection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-12">
          {[
            { img: '/Rectangle 15.png', title: 'Going all-in with millennial design' },
            { img: '/Rectangle 14.png', title: 'Exploring creative workspace designs' },
            { img: '/Rectangle 13.png', title: 'Modern furniture for your home' },
          ].map((blog, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={blog.img} alt={blog.title} className="w-full h-40 md:h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-sm md:text-base text-gray-500 mb-4">
                  5 min &nbsp; | &nbsp; 12th Oct 2022
                </p>
                <button className="text-blue-500 font-semibold hover:underline">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
