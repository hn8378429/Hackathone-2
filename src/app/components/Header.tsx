import Link from 'next/link';
import { HeartIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';


export default function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-4 bg-orange-200 shadow-md sticky top-0 z-10">
      <h1 className="text-2xl font-bold">Furniture Store</h1>
      <nav className="flex items-center">
        <ul className="flex space-x-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li> 
       </ul>
    {/* Icons Section */}
    <div className="flex space-x-6 items-center ml-6">
          {/* User Icon */}
          <Link href="/profile">
            <UserIcon className="h-6 w-6 text-black-600 hover:text-gray-800 cursor-pointer" />
          </Link>
          {/* Search Icon */}
          <button>
            <MagnifyingGlassIcon className="h-6 w-6 text-black-600 hover:text-gray-800 cursor-pointer" />
          </button>
          {/* Heart Icon */}
          <Link href="/wishlist">
            <HeartIcon className="h-6 w-6 text-y-6black00 hover:text-gray-800 cursor-pointer" />
          </Link>
          {/* Shopping Cart Icon */}
          <Link href="/cart">
            <ShoppingCartIcon className="h-6 w-6 text-black-600 hover:text-gray-800 cursor-pointer" />
          </Link>
        </div>
      </nav>
    </header>
  )
}
