import Image from "next/image";
import Link from "next/link";

import { Phone, Mail, Twitter, Instagram, Youtube, MapPin, Facebook, CreditCard, }from "lucide-react";

export default function Footer() {
  return (
    <>
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
       
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <div className="bg-white rounded-lg px-4 py-2 inline-block">
                <Image
                  src="/images/freshcart-logo.png"
                  alt="FreshCart Logo"
                  width={160}
                  height={31}
                  className="h-8 w-auto"
                />
              </div>
            </Link>

            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              FreshCart is your one-stop destination for quality products. From
              fashion to electronics, we bring you the best brands at
              competitive prices with a seamless shopping experience.
            </p>

            <div className="space-y-3 mb-6">
              <a
                href="tel:+18001234567"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 text-sm"
              >
                <Phone className="text-green-500" />
                +1 (800) 123-4567
              </a>

              <a
                href="mailto:support@freshcart.com"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 text-sm"
              >
                <Mail className="text-green-500" />
                support@freshcart.com
              </a>

              <div className="flex items-center gap-3 text-gray-400  text-sm">
                <MapPin className="text-green-500" />
                123 Commerce Street, New York, NY 10001
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#"
               className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-colors"
              >
           <Facebook />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-colors"
              >
        < Twitter/> 
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-colors"
              >
        <Instagram/> 
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-colors"
              >
           <Youtube />
              </a>
            </div>
          </div>


          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-5">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/web/products"
                  className="text-gray-400 hover:text-green-400 text-sm"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/web/categories"
                  className="text-gray-400 hover:text-green-400 text-sm"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/web/brands"
                  className="text-gray-400 hover:text-green-400 text-sm"
                >
                  Brands
                </Link>
              </li>
                  <li>
                <Link
                   href="/notfound"
                  className="text-gray-400 hover:text-green-400 text-sm"
                >
                 Electronics
                </Link>
              </li>
                  <li>
                <Link
                   href="/notfound"
                  className="text-gray-400 hover:text-green-400 text-sm"
                >
                  Men's Fashion
                </Link>
              </li>
                  <li>
                <Link
                  href="/notfound"
                  className="text-gray-400 hover:text-green-400 text-sm"
                >
                  Women's Fashion
                </Link>
              </li>
            </ul>
          </div>


          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-5">Account</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/notfound"
                  className="text-gray-400 hover:text-green-400 text-sm"
                >
                  My Account
                </Link>
              </li>
               <li>
                <Link
                  href="/notfound"
                  className="text-gray-400 hover:text-green-400 text-sm"
                >
                 Order History
                </Link>
              </li>
              <li>
                <Link
                  href="/web/wishlist"
                  className="text-gray-400 hover:text-green-400 text-sm"
                >
                  Wishlist
                </Link>
              </li>
              <li>
                <Link
                  href="/web/products"
                  className="text-gray-400 hover:text-green-400 text-sm"
                >
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link
                  href="/auth/login"
                  className="text-gray-400 hover:text-green-400 text-sm"
                >
                  Sign In
                </Link>
              </li>
               <li>
                <Link
                  href="/auth/register"
                  className="text-gray-400 hover:text-green-400 text-sm"
                >
                 Create Account 
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-5">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/notfound"
                  className="text-gray-400 hover:text-green-400 text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/notfound"
                  className="text-gray-400 hover:text-green-400 text-sm"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/notfound"
                  className="text-gray-400 hover:text-green-400 text-sm"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href="/notfound"
                  className="text-gray-400 hover:text-green-400 text-sm"
                >
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link
                  href="/notfound"
                  className="text-gray-400 hover:text-green-400 text-sm"
                >
                 Track Order
                </Link>
              </li>
            </ul>
          </div>


          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-5">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/notfound"
                  className="text-gray-400 hover:text-green-400 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/web/terms"
                  className="text-gray-400 hover:text-green-400 text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/notfound"
                  className="text-gray-400 hover:text-green-400 text-sm"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} FreshCart. All rights reserved.
          </p>

       <div className="flex gap-4 text-gray-500 text-sm">
  
  <span className="flex items-center gap-2">
    <CreditCard/>
    Visa
  </span>

  <span className="flex items-center gap-2">
    <CreditCard/>
    Mastercard
  </span>

  <span className="flex items-center gap-2">
    <CreditCard/>
    PayPal
  </span>
</div>
        </div>
      </div>
    </footer>
    </>
  );
}