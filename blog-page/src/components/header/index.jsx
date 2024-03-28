import { useState } from "react";
import { Link } from "react-router-dom";

const links = ["Home", "About Us", "Blogs", "Contact Us"];

export default function Header() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    return (
        <>
            <div className="bg-gray-900 sticky top-0 px-[5vw]">
                <header className=" w-[90vw] top-0 mx-auto flex items-center justify-between shrink-0">
                    <div className="flex items-center">
                        <div className="w-20 block">
                            <Link className="w-20 h-20" href="#">
                                <img
                                    alt="Teck Tonic"
                                    className="w-full h-full hover:scale-110 duration-200"
                                    src="assets/images/logo.png"
                                />
                            </Link>
                        </div>
                        <nav className="">
                            <Link className="text-white text-2xl font-semibold" href="#">
                                TechTonic
                            </Link>
                        </nav>
                    </div>
                    <ul className="hidden space-x-2 md:flex md:space-x-8">
                        {links.map((ele, index) => (
                            <li key={index} className="text-gray-100" href="#">
                                {ele}
                            </li>
                        ))}
                    </ul>

                    <div className="block md:hidden">
                        <div onClick={() => setIsNavbarOpen(pre => !pre)} className="cursor-pointer ">
                            <i class={`${!isNavbarOpen ? "fa-solid fa-bars" : "fa-solid fa-xmark"}  text-white text-xl`}></i>
                        </div>
                    </div>
                </header>
                {isNavbarOpen && (
                    <div className={`md:hidden bg-gray-900 duration-300 `}>
                        <div className="flex flex-col items-center">
                            {links.map((ele, index) => (
                                <a onClick={() => setIsNavbarOpen(pre => !pre)} key={index} className="text-gray-100 my-2" href="#">
                                    {ele}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div >
        </>
    )
}

