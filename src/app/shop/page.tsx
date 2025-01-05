export default function shop() {
    return (
      <div className="bg-yellow-100 p-10 flex flex-col gap-10">

        {/* Second Section with Two Images Side by Side */}
        <div className="bg-white p-10 rounded-lg shadow-md">
          <div className="flex items-center justify-between gap-10">
            {/* First Image and Text */}
            <div className="flex-1 flex flex-col items-center text-center">
              <img
                src="/Mask group.png" // Replace with the actual path to your image
                alt="First Image"
                style={{
                  width: "355px",
                  height: "400px",
                }}
                className="mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">Side Table</h2>
              <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
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
        <div className="bg-white p-10 rounded-lg shadow-md">
          {/* Section Title */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Top Picks For You</h2>
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
              <h3 className="text-lg font-medium">Trenton modular sofa</h3>
              <p className="text-gray-600">Rs. 25,000.00</p>
            </div>
  
            {/* Second Product */}
            <div className="flex flex-col items-center">
              <img
                src="Granite dining table with dining chair 1.png" // Replace with the actual path to your image
                alt="Granite dining table"
                className="w-48 h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-medium">Granite dining table</h3>
              <p className="text-gray-600">Rs. 25,000.00</p>
            </div>
  
            {/* Third Product */}
            <div className="flex flex-col items-center">
              <img
                src="/Mask group (5).png" // Replace with the actual path to your image
                alt="Outdoor bar table"
                className="w-48 h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-medium">Outdoor bar table</h3>
              <p className="text-gray-600">Rs. 25,000.00</p>
            </div>
  
            {/* Fourth Product */}
            <div className="flex flex-col items-center">
              <img
                src="/Mask group (3).png" // Replace with the actual path to your image
                alt="Plain console with mirror"
                className="w-48 h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-medium">Plain console with mirror</h3>
              <p className="text-gray-600">Rs. 25,000.00</p>
            
  
        
  
        {/* Second Product */}
        <div className="flex flex-col items-center">
              <img
                src="Granite dining table with dining chair 1.png" // Replace with the actual path to your image
                alt="Granite dining table"
                className="w-48 h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-medium">Granite dining table</h3>
              <p className="text-gray-600">Rs. 25,000.00</p>
            </div>
  
            {/* Third Product */}
            <div className="flex flex-col items-center">
              <img
                src="/Mask group (5).png" // Replace with the actual path to your image
                alt="Outdoor bar table"
                className="w-48 h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-medium">Outdoor bar table</h3>
              <p className="text-gray-600">Rs. 25,000.00</p>
            </div>
  
            {/* Fourth Product */}
            <div className="flex flex-col items-center">
              <img
                src="/Mask group (3).png" // Replace with the actual path to your image
                alt="Plain console with mirror"
                className="w-48 h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-medium">Plain console with mirror</h3>
              <p className="text-gray-600">Rs. 25,000.00</p>
            </div>
          </div>
            {/* View More Button */}
            <div className="flex justify-center mt-8">
            <button className="px-8 py-3 bg-black text-white rounded hover:bg-gray-800">
              View More
            </button>
          </div>
        </div>
        </div>
          </div>
    );
  }
