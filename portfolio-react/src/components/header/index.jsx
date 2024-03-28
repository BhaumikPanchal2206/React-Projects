import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const link = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
]

const Navbar = () => {
    // const [isOpen, setIsOpen] = useState(false);
    const [text, setText] = useState("BHAUMIK PANCHAL")
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolling = window.scrollY > 25;
            setScrolling(isScrolling);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    // const toggleMenu = () => {
    //     setIsOpen(!isOpen);
    // };

    let interval;
    let randomCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const handleMouseOver = () => {
        clearInterval(interval);
        let characterIndex = 0;
        interval = setInterval(() => {
            let a = "BHAUMIK PANCHAL".split("").map((ele, index) => {
                if (characterIndex > index) {
                    return "BHAUMIK PANCHAL"[index];
                }
                return randomCharacter[Math.floor(Math.random() * randomCharacter.length)];
            });
            setText(a.join(""))
            if (characterIndex >= "BHAUMIK PANCHAL".length) {
                clearInterval(interval);
            }
            characterIndex = characterIndex + 1 / 10;
        }, 10);
    }

    return (
        <div className='w-full fixed top-0 z-10'>
            <nav className={`left-[5vw] right-[5vw]  top-0  ${scrolling ? "bg-gray-900/75" : "bg-transparent"} shadow-lg`}>
                <div className="w-[90vw] mx-auto px-4">
                    <div className="flex justify-between items-center py-1">
                        <div className=''>
                            <h2 onMouseOver={handleMouseOver} className="text-white text-2xl font-bold">{text}</h2>
                        </div>
                        <div className=" space-x-4 items-center py-4">
                            {link.map((ele, index) => (
                                <Link key={index} to={ele.href} className="text-gray-300 hover:text-white">
                                    {ele.name}
                                </Link>
                            ))}
                            <Link to="/contact"
                                className="bg-white text-gray-800 hover:bg-gray-100 rounded-full py-2 px-4 transition-colors duration-300">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                {/* <div
                    className={`md:hidden bg-gray-800 transition duration-300 ease-in-out transform-gpu origin-top-right absolute top-0 inset-x-0 p-2 z-10 ${isOpen ? '' : 'hidden'}`}>
                    <div className="max-w-7xl mx-auto px-2">
                        <a href="#" className="block text-gray-300 hover:text-white py-2">Home</a>
                        <a href="#" className="block text-gray-300 hover:text-white py-2">About</a>
                        <a href="#" className="block text-gray-300 hover:text-white py-2">Services</a>
                        <a href="#" className="block text-gray-300 hover:text-white py-2">Contact</a>
                        <div className="flex justify-end space-x-4 pt-4">
                            <a href="#" className="text-gray-300 hover:text-white">Login</a>
                            <a href="#"
                                className="bg-white text-gray-800 hover:bg-gray-100 rounded-full py-2 px-4 transition-colors duration-300">Sign
                                Up</a>
                        </div>
                    </div>
                </div> */}
            </nav>
        </div>
    );
};

export default Navbar;
