import React from "react";
import { useState } from "react";

const Navbar : React.FC = () => {
    const [Open, setOpen] = useState(false);
    return(
        <nav className="bg-white fixed top-0 left-0 z-50 w-full shadow-md">
            <div className="items-center flex justify-between px-4 py-3">
                <div className="text-blue-950 font-bold text-2xl">MyBoard.com</div>
                <div className="hidden md:flex space-x-6 ">
                <a href="#" className="text-blue-950 hover:text-indigo-400 px-3 text-black text-md py-2 font-medium">Home</a>
                <a href="#" className="text-blue-950 hover:text-indigo-400 px-3 text-black text-md py-2 font-medium">About</a>
                <a href="#" className="text-blue-950 hover:text-indigo-400 px-3 text-black text-md py-2 font-medium">Services</a>
                <a href="#" className="text-blue-950 hover:text-indigo-400 px-3 text-black text-md py-2 font-medium">Contact</a>
                </div>

                <div className="md:hidden">
                <button
                    onClick={() => setOpen(!Open)}
                    className="focus:outline-none text-blue-950 hover:text-indigo-400 px-3 text-black text-md py-2 font-medium">
                    ☰
                </button>
                </div>

                {Open && (
                <div className="md:hidden bg-white px-4 py-2 space-y-2 right-4 top-16 absolute shadow-md">
                    <a href="#" className="block text-blue-950 hover:text-indigo-400 px-3 text-black text-md py-2 font-medium">Home</a>
                    <a href="#" className="block text-blue-950 hover:text-indigo-400 px-3 text-black text-md py-2 font-medium">About</a>
                    <a href="#" className="block text-blue-950 hover:text-indigo-400 px-3 text-black text-md py-2 font-medium">Services</a>
                    <a href="#" className="block text-blue-950 hover:text-indigo-400 px-3 text-black text-md py-2 font-medium">Contact</a>
                </div>)}
            </div>
        </nav>
    )};
export default Navbar;