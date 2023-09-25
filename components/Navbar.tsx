
'use client';
import Image from "next/image";
import Link from "next/link";
import React, {useEffect,useState} from "react";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return ( 
        <nav className="bg-slate-800 border-slate-700 fixed w-full z-20 top-0 left-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <a href="/" className="flex items-center hover:scale-105  group">
                <Image src={"./assets/DianaCLogo.svg"} width={64} height={64} alt="Logo/Home" className="h-10 mr-2"/>
                <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-white group-hover:text-green-400">Diana | Software Engineer</span>
            </a>
            <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center mr-4 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false"
                onClick={()=>setToggle(!toggle)}
            >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                <li>
                <Link href="#about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> About </Link>
                </li>
                <li>
                <Link href="#project" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</Link>
                </li>
                <li>
                <Link href="#contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                </li>
            </ul>
            </div>
            <div className={`${!toggle ? 'hidden': 'flex'} p-6 bg-gradient-to-r from-green-500 via-green-700 to-black-900 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className='list-none flex justify-end items-start flex-col gap-4'>
                <li
                    onClick={()=>{setToggle(!toggle)}}
                >
                <Link  href="#about" className="block py-2 pl-3 pr-4 text-gray-900 dark:text-gray-100 rounded hover:text-slate-900">About</Link>
                </li>
                <li
                    onClick={()=>{setToggle(!toggle)}}
                >
                <Link href="#project" className="block py-2 pl-3 pr-4 text-gray-900 dark:text-gray-100 rounded hover:text-slate-900">Projects</Link>
                </li>
                <li
                    onClick={()=>{setToggle(!toggle)}}
                >
                <Link href="#contact" className="block py-2 pl-3 pr-4 text-gray-900 dark:text-gray-100 rounded hover:text-slate-900">Contact</Link>
                </li>
            </ul>
          </div>
        </div>
        </nav>


     );
}
 
export default Navbar;