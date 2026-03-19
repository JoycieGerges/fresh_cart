"use client";

import { AppState } from "@/shop/auth.shop";
import useLogout from "@/app/auth/hook/logout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import imageLogo from "../../../../public/images/freshcart-logo.png";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useLogout();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { isAuthenticated, userInfo } = useSelector(
    (AppState: AppState) => AppState.auth,
  );
  const { numOfCartItems } = useSelector((CartApp: AppState) => CartApp.cart);
  const { count } = useSelector((appState: AppState) => appState.wishlist);
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    setIsProfileOpen(false);
    router.push("/auth/login");
  };
  return (
    <>
      <div className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <nav className="container mx-auto w-[95%] lg:w-[90%] py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between h-16 lg:h-[72px] gap-4 lg:gap-8">
              <Link href="/" className="shrink-0">
                <Image
                  src="/images/freshcart-logo.png"
                  alt="FreshCart"
                  width={160}
                  height={31}
                  className="h-6 lg:h-8 w-auto"
                />
              </Link>

              <form className="hidden lg:flex flex-1 max-w-2xl">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search for products, brands and more..."
                    className="w-full px-5 py-3 pr-12 rounded-full border border-gray-200 bg-gray-50/50 text-gray-700 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-sm"
                  />

                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg--600 text-green-400absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-primary-700 transition-colors flex items-center justify-center hover:bg-primary-700 transition-colors"
                  >
                    <Search />
                  </button>
                </div>
              </form>

              <nav className="hidden xl:flex items-center gap-6">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                >
                  Home
                </Link>

                <Link
                  href="/web/products"
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                >
                  Shop
                </Link>

                <div className="relative group">
                  <Link
                    className="flex items-center gap-1.5 text-gray-700 hover:text-green-600 font-medium transition-colors py-2"
                    href="/web/categories"
                  >
                    Categories
                  </Link>
                </div>

                <Link
                  href="/web/brands"
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                >
                  Brands
                </Link>
              </nav>
            </div>

            <div className="hidden lg:flex gap-6 items-center">
              <div className="flex items-center gap-5 border-r pr-6 border-gray-200">
                <Link
                  href="/web/wishlist"
                  className="relative group text-gray-600 hover:text-red-500 transition"
                >
                  <i className="fa-regular fa-heart text-xl"></i>
                  {count > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                      {isAuthenticated ? count : 0}
                    </span>
                  )}
                </Link>

                <Link
                  href="/web/cart"
                  className="relative group text-gray-600 hover:text-green-600 transition"
                >
                  <i className="fa-solid fa-cart-shopping text-xl"></i>
                  <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    {isAuthenticated ? numOfCartItems : 0}
                  </span>
                </Link>
              </div>

              <div className="flex items-center">
                {isAuthenticated ? (
                  <div className="relative">
                    <button
                      onClick={() => setIsProfileOpen(!isProfileOpen)}
                      className="flex items-center gap-2 group focus:outline-none"
                    >
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-sm border border-green-200 group-hover:bg-green-600 group-hover:text-white transition-all">
                        {userInfo?.name.charAt(0).toUpperCase() || "U"}
                      </div>
                      <i
                        className={`fa-solid fa-chevron-down text-[10px] text-gray-400 transition-transform ${isProfileOpen ? "rotate-180" : ""}`}
                      ></i>
                    </button>
                    {isProfileOpen && (
                      <>
                        <div
                          className="fixed inset-0 z-10"
                          onClick={() => setIsProfileOpen(false)}
                        ></div>
                        <div className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-20 animate-in fade-in zoom-in duration-150">
                          <div className="px-4 py-2 border-b border-gray-50 mb-1">
                            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
                              Account
                            </p>
                            <p className="text-sm font-bold text-gray-800 truncate">
                              {userInfo?.name || "User"}
                            </p>
                          </div>
                          <Link
                            href="/web/order"
                            className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-green-600 transition font-medium"
                          >
                            <i className="fa-solid fa-box-open w-4"></i> My
                            Orders
                          </Link>
                          <Link
                            href="/wishlist"
                            className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-green-600 transition font-medium lg:hidden"
                          >
                            <i className="fa-solid fa-heart w-4"></i> Wishlist
                          </Link>
                          <button
                            onClick={handleLogout}
                            className="w-full cursor-pointer flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition font-medium"
                          >
                            <i className="fa-solid fa-arrow-right-from-bracket w-4"></i>{" "}
                            Logout
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <Link
                      href="/auth/login"
                      className="text-sm font-bold text-gray-700 hover:text-green-600 transition px-4 py-2"
                    >
                      Login
                    </Link>
                    <Link
                      href="/auth/register"
                      className="text-sm font-bold bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition shadow-md shadow-green-100"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <button
              className="lg:hidden text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              <i
                className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars-staggered"} text-gray-700`}
              ></i>
            </button>
          </div>
        </nav>
      </div>

      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity lg:hidden z-40 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      ></div>

      <aside
        className={`fixed top-0 left-0 h-full w-[280px] bg-white shadow-2xl z-50 transform transition-transform duration-300 lg:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center gap-2 mb-8">
            <Image src={imageLogo} alt="FreshCart Logo" className="w-14 h-14" />
          </div>

          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 hover:text-green-600 transition font-bold text-gray-700"
              >
                <i className="fa-solid fa-house w-5 text-gray-400"></i> Home
              </Link>
            </li>
            <li>
              <Link
                href="/web/products"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 hover:text-green-600 transition font-bold text-gray-700"
              >
                <i className="fa-solid fa-box w-5 text-gray-400"></i> Products
              </Link>
            </li>
            <li>
              <Link
                href="/web/wishlist"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 hover:text-green-600 transition font-bold text-gray-700"
              >
                <i className="fa-solid fa-heart w-5 text-gray-400"></i> Wishlist
              </Link>
            </li>
            <li>
              <Link
                href="/web/cart"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 hover:text-green-600 transition font-bold text-gray-700"
              >
                <i className="fa-solid fa-cart-shopping w-5 text-gray-400"></i>{" "}
                Cart
              </Link>
            </li>
            <li>
              <Link
                href="/web/order"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 hover:text-green-600 transition font-bold text-gray-700"
              >
                <i className="fa-solid fa-receipt w-5 text-gray-400"></i> My
                Orders
              </Link>
            </li>
            <li>
              <Link
                href="/web/brands"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 hover:text-green-600 transition font-bold text-gray-700"
              >
                <i className="fa-solid fa-box w-5 text-gray-400"></i> Brands
              </Link>
            </li>
            <li>
              <Link
                href="/web/categories"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 hover:text-green-600 transition font-bold text-gray-700"
              >
                <i className="fa-solid fa-box w-5 text-gray-400"></i> Categoties
              </Link>
            </li>
          </ul>

          <div className="mt-auto pt-6 border-t border-gray-100">
            {isAuthenticated ? (
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="w-full py-3 bg-red-50 text-red-600 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-100 transition"
              >
                <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
              </button>
            ) : (
              <div className="flex flex-col gap-3">
                <Link
                  href="/auth/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 bg-green-600 text-white rounded-xl font-bold shadow-lg shadow-green-100"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
