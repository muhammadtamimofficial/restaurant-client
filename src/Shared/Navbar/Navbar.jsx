import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        Swal.fire({
            title: "Logout",
            icon: "success"
        });
    }
    const menubar = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/menu'}>Our Menu</Link></li>
        <li><Link to={'/order/Salad'}>Order Food</Link></li>
        <li><Link to={'/'}>
            <FaShoppingCart color='white'></FaShoppingCart>
            <div className="">+0</div>
        </Link></li>
    </>
    // console.log();

    return (
        <>
            <div class="navbar fixed z-10 opacity-40 bg-black font-bold text-white py-3 px-16 ">
                <div class="navbar-start">
                    <div class="dropdown">
                        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabindex="0"
                            class="menu menu-sm text-blue-900 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {/* <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'menu'}>Our Menu</Link></li>
                            <li><Link to={'order/Salad'}>Order Food</Link></li> */
                                menubar
                            }
                        </ul>
                    </div>
                    <Link to={'/'} class="btn btn-ghost text-xl">daisyUI</Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal px-1 ">
                        {menubar}
                    </ul>
                </div>
                <div class="navbar-end">
                    {/* <div className="displayUser bg-gray-950">
                        <img src={user ? user.photoURL : ""}
                            title='Not clickable, only for view'
                            alt="" width='48px' height={'48px'}
                            className='rounded-full opacity-100' />
                    </div> */}

                    {/* {user ?
                        // <button><button className='ml-2'>{user.displayName}</button>
                        <button className='ml-4' onClick={handleLogOut}>Logout</button>
                        //  </button>
                        :
                        <button><Link to={'/login'}>Login</Link></button>} */}
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className=" rounded-full">
                                        <img
                                            alt="restaurant user profile"
                                            width='48px' height='48px'
                                            src={user.photoURL} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <Link to={'/'} className='ml-4' onClick={handleLogOut}>
                                        <li>
                                            <a>Logout</a>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                            :
                            <button><Link to={'/login'}>Login</Link></button>}
                </div>
            </div >
        </>
    );
};

export default Navbar;