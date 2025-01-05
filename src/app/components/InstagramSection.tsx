export default function InstagramSection() {
    return (
      <div className="bg-white py-20 flex flex-col items-center justify-center">
        {/* Headline */}
        <h2 className="text-4xl font-bold mb-4">Our Instagram</h2>
        
        {/* Subheading */}
        <p className="text-gray-600 mb-8">Follow our store on Instagram</p>
        
        {/* Button */}
        <button className="px-6 py-3 bg-black text-white rounded shadow-lg hover:bg-gray-800">
          Follow Us
        </button>
      </div>
    );
  }