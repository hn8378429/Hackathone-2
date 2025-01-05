export default function Footer() {
    return (
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Address Section */}
            <div className="text-gray-700">
              <p>400 University Drive Suite 200</p>
              <p>Coral Gables,</p>
              <p>FL 33134 USA</p>
            </div>
  
            {/* Links Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">Shop</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
  
            {/* Help Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Help</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Payment Options</a></li>
                <li><a href="#" className="hover:underline">Returns</a></li>
                <li><a href="#" className="hover:underline">Privacy Policies</a></li>
              </ul>
            </div>
  
            {/* Newsletter Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="px-4 py-2 w-full focus:outline-none"
                />
                <button className="px-4 py-2 bg-black text-white font-semibold">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>© 2022 Meliah House. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  