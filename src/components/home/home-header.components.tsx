import { useState } from "react";
import { NavLink } from "react-router-dom";

export interface UserInterface {
    name: string;
}

const HomeHeaderMenu = () => {
    const [isCartVisible, setCartVisible] = useState(false);
    const [isUserDropdownVisible, setUserDropdownVisible] = useState(false);

    const toggleCartView = () => setCartVisible(!isCartVisible);
    const toggleUserDropdown = () => setUserDropdownVisible(!isUserDropdownVisible);
    

    return (
        <nav className="bg-teal-800 text-white dark:bg-gray-800 antialiased">
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        {/* Logo and Menu Items */}
                        <div className="shrink-0">
                            <a href="#" title="">
                                <img className="block w-auto h-8 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg" alt="" />
                                <img className="hidden w-auto h-8 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg" alt="" />
                            </a>
                        </div>
                        <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-4 py-4 sm:justify-center">
                            <li><a href="/" className="text-sm font-medium text-white hover:text-primary-700 dark:text-white dark:hover:text-primary-500">Home</a></li>
                            <li><a href="/best-seller" className="text-sm font-medium text-white hover:text-primary-700 dark:text-white dark:hover:text-primary-500">Best Sellers</a></li>
                            <li><a href="/categories" className="text-sm font-medium text-white hover:text-primary-700 dark:text-white dark:hover:text-primary-500">Categories</a></li>
                            <li><a href="/brands" className="text-sm font-medium text-white hover:text-primary-700 dark:text-white dark:hover:text-primary-500">Brands</a></li>
                            <li><a href="/all-products" className="text-sm font-medium text-white hover:text-primary-700 dark:text-white dark:hover:text-primary-500">Buy</a></li>
                        </ul>
                    </div>

                    <div className="flex items-center lg:space-x-3">

                        {/* Cart Dropdown */}
                        {isCartVisible && (
                            <div id="myCartDropdown1" className="z-10 mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-teal-800 p-4 antialiased shadow-lg dark:bg-gray-800">
                                {/* Cart Items */}
                                {/* ... (rest of the cart items and UI) */}
                            </div>
                        )}

                        {/* User Dropdown Button */}
                        <button onClick={toggleUserDropdown} id="userDropdownButton1" aria-expanded={isUserDropdownVisible} type="button" className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-teal-700 dark:hover:bg-gray-700 text-sm font-medium leading-none text-white dark:text-white">
                            <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            Account
                            <svg className="w-4 h-4 text-white dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                            </svg>
                        </button>

                        {/* User Dropdown */}
                        {isUserDropdownVisible && (
                            <div id="userDropdown1" className="z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-teal-800 antialiased shadow dark:divide-gray-600 dark:bg-gray-700">
                                <ul className="p-2 text-start text-sm font-medium text-white dark:text-white">
                                    <li><a href="#" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-teal-700 dark:hover:bg-gray-600">My Account</a></li>

                                    {/* ... (rest of the dropdown items) */}
                                </ul>
                                <div className="p-2 text-sm font-medium text-white dark:text-white">
                                    <NavLink to="/login" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-teal-700 dark:hover:bg-gray-600">Login</NavLink>
                                    <NavLink to="/Register" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-teal-700 dark:hover:bg-gray-600">Register</NavLink>
                                </div>
                            </div>
                        )}

                        {/* Mobile Menu Button */}
                        <button type="button" data-collapse-toggle="ecommerce-navbar-menu-1" aria-controls="ecommerce-navbar-menu-1" aria-expanded="false" className="inline-flex lg:hidden items-center justify-center hover:bg-teal-700 rounded-md dark:hover:bg-gray-700 p-2 text-white dark:text-white">
                            <span className="sr-only">Open Menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default HomeHeaderMenu;
