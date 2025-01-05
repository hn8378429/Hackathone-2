export default function Banner() {
  return (
    <div className="bg-yellow-100 p-0 flex flex-col gap-0">
      {/* First Section */}
      <div className="flex items-center justify-between">
        {/* Text Section */}
        <div className="flex-1 text-left pr-6">
          <h2 className="text-4xl font-semibold">Rocket Single Seater</h2>
          <button className="inline text-black font-bold border-b-2 border-black hover:text-gray-800 mt-1">
            Shop Now
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-start">
          <img
            src="/SingleSofa.png" // Replace with the actual path to your image
            alt="Rocket Single Seater"
            style={{
              width: "755px",
              height: "700px",
            }}
            className="object-contain"
          />
        </div>
      </div>

      {/* Second Section with Two Images Side by Side */}
      <div className="bg-white p-0 rounded-lg shadow-md">
        <div className="flex items-center justify-between gap-0">
          {/* First Image and Text */}
          <div className="flex-1 flex flex-col items-center text-center">
            <img
              src="/Mask group (4).png" // Replace with the actual path to your image
              alt="First Image"
              style={{
                width: "355px",
                height: "400px",
              }}
              className="mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Side Table</h2>
            <button className="inline text-black font-bold border-b-2 border-black hover:text-gray-800">
              View More
            </button>
          </div>

          {/* Second Image and Text */}
          <div className="flex-1 flex flex-col items-center text-center">
            <img
              src="/Mask group (1).png" // Replace with the actual path to your image
              alt="Second Image"
              style={{
                width: "355px",
                height: "400px",
              }}
              className="mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Side Single Sofa</h2>
            <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
              View More
            </button>
          </div>
        </div>
      </div>

      {/* Third Section: Four Images with Text and Prices */}
<div className="bg-white p-0 rounded-lg shadow-md">
  {/* Section Title */}
  <div className="text-center mb-10">
    <h2 className="text-black-600">
      Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
    </h2>
    <p className="text-3xl font-bold">Top Picks For You</p>
  </div>

  {/* Images Row */}
  <div className="grid grid-cols-4 gap-8">
    {/* First Product */}
    <div className="flex flex-col items-center">
      <img
        src="/Mask group (6).png" // Replace with the actual path to your image
        alt="Trenton modular sofa"
        className="w-48 h-48 object-contain mb-4"
      />
      <p className="text-black-600">Trenton modular sofa-3</p>
      <h3 className="text-lg font-medium">Rs. 25,000.00</h3>
    </div>

    {/* Second Product */}
    <div className="flex flex-col items-center">
      <img
        src="Granite dining table with dining chair 1.png" // Replace with the actual path to your image
        alt="Granite dining table"
        className="w-48 h-48 object-contain mb-4"
      />
      <p className="text-black-600">
        Granite dining table with dining chairs
      </p>
      <h3 className="text-lg font-medium">Rs. 25,000.00</h3>
    </div>

    {/* Third Product */}
    <div className="flex flex-col items-center">
      <img
        src="/Mask group (5).png" // Replace with the actual path to your image
        alt="Outdoor bar table"
        className="w-48 h-48 object-contain mb-4"
      />
      <p className="text-black-600">Outdoor bar table</p>
      <h3 className="text-lg font-medium">Rs. 25,000.00</h3>
    </div>

    {/* Fourth Product */}
    <div className="flex flex-col items-center">
      <img
        src="/Mask group (3).png" // Replace with the actual path to your image
        alt="Plain console with mirror"
        className="w-48 h-48 object-contain mb-4"
      />
      <p className="text-black-600">Plain console with mirror</p>
      <h3 className="text-lg font-medium">Rs. 25,000.00</h3>
    </div>
  </div>

  {/* View More Button */}
  <div className="flex justify-center mt-8">
    <button className="px-8 py-3 bg-black text-white rounded hover:bg-gray-800">
      View More
    </button>
  </div>
</div>


      {/* Blog Section */}
      <div className="bg-gray-50 py-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Our Blogs</h2>
          <p className="text-gray-500 mt-2">
            Find a bright idea to suit your taste with our great selection
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
          {/* Blog Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/Rectangle 15.png" // Replace with the path to your image
              alt="Blog Image 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Going all-in with millennial design
              </h3>
              <p className="text-gray-500 mb-4">5 min &nbsp; | &nbsp; 12th Oct 2022</p>
              <button className="text-blue-500 font-semibold hover:underline">
                Read More
              </button>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/Rectangle 14.png" // Replace with the path to your image
              alt="Blog Image 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Exploring creative workspace designs
              </h3>
              <p className="text-gray-500 mb-4">5 min &nbsp; | &nbsp; 12th Oct 2022</p>
              <button className="text-blue-500 font-semibold hover:underline">
                Read More
              </button>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/Rectangle 13.png" // Replace with the path to your image
              alt=""
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Modern furniture for your home
              </h3>
              <p className="text-gray-500 mb-4">5 min &nbsp; | &nbsp; 12th Oct 2022</p>
              <button className="text-blue-500 font-semibold hover:underline">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <button className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800">
            View All Posts
          </button>
        </div>
      </div>

      <div
        className="bg-gray-50 py-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/Rectangle 17.png')" }}
      >
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-black">Our Instagram</h2>
          <p className="text-black-200 mt-2">Follow our store on Instagram</p>
        </div>
        <div className="flex justify-center">
          <button className="px-8 py-3 bg-lightwhite text-black font-semibold rounded hover:bg-black-800">
            Follow Us
          </button>
        </div>
      </div>
    </div>
  );
}
