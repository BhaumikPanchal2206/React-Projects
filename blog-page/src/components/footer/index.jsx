import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-200 text-gray-900">
                <div className="w-[90vw] mx-auto border-t py-5">
                    <div className="mx-auto sm:px-4 ">
                        <div className="flex flex-wrap  items-center">
                            <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4 mb-4">
                                <h1 className="mb-3 font-bold text-2xl">Teck Tonic</h1>
                                <p>A108 Adam Street NY 535022, USA</p>
                                <p className="m-0">Phone: +1 5589 55488 55</p>
                                <p>Email: info@example.com</p>
                                <Link to="/">
                                    <i
                                        style={{ cursor: "pointer" }}
                                        className="text-2xl bg-body-secondary text-black p-2 rounded-full fa-brands fa-twitter"
                                    />
                                </Link>
                                <Link to="/">
                                    <i
                                        style={{ cursor: "pointer" }}
                                        className="text-2xl bg-body-secondary text-black p-2 rounded-full fa-brands fa-facebook"
                                    />
                                </Link>
                                <Link to="/">
                                    <i
                                        style={{ cursor: "pointer" }}
                                        className="text-2xl bg-body-secondary text-black p-2 rounded-full fa-brands fa-instagram"
                                    />
                                </Link>
                                <Link to="/">
                                    <i
                                        style={{ cursor: "pointer" }}
                                        className="text-2xl bg-body-secondary text-black p-2 rounded-full fa-brands fa-linkedin"
                                    />
                                </Link>
                                <Link to="/">
                                    <i
                                        style={{ cursor: "pointer" }}
                                        className="text-2xl bg-body-secondary text-black p-2 rounded-full fa-brands fa-facebook"
                                    />
                                </Link>
                            </div>
                            <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4 mb-4">
                                <h3 className="mb-3">Useful Links</h3>
                                <ul className="list-inline">
                                    <li className="mb-2">
                                        <i
                                            style={{ fontSize: 10 }}
                                            className="fa-solid fa-chevron-right me-3 khakhi"
                                        />
                                        <Link
                                            style={{ textDecoration: "none" }}
                                            className="text-gray-900"
                                            to="/"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <i
                                            style={{ fontSize: 10 }}
                                            className="fa-solid fa-chevron-right me-3 khakhi"
                                        />
                                        <Link
                                            style={{ textDecoration: "none" }}
                                            className="text-gray-900"
                                            to="/"
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <i
                                            style={{ fontSize: 10 }}
                                            className="fa-solid fa-chevron-right me-3 khakhi"
                                        />
                                        <Link
                                            style={{ textDecoration: "none" }}
                                            className="text-gray-900"
                                            to="/"
                                        >
                                            Services
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <i
                                            style={{ fontSize: 10 }}
                                            className="fa-solid fa-chevron-right me-3 khakhi"
                                        />
                                        <Link
                                            style={{ textDecoration: "none" }}
                                            className="text-gray-900"
                                            to="/"
                                        >
                                            Termsof services
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <i
                                            style={{ fontSize: 10 }}
                                            className="fa-solid fa-chevron-right me-3 khakhi"
                                        />
                                        <Link
                                            style={{ textDecoration: "none" }}
                                            className="text-gray-900"
                                            to="/"
                                        >
                                            Privacy policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4 mb-4">
                                <h3 className="mb-3">Our Servicrs</h3>
                                <ul className="list-inline">
                                    <li className="mb-2">
                                        <i
                                            style={{ fontSize: 10 }}
                                            className="fa-solid fa-chevron-right me-3 khakhi"
                                        />
                                        <Link
                                            style={{ textDecoration: "none" }}
                                            className="text-gray-900"
                                            to="/"
                                        >
                                            Web Design
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <i
                                            style={{ fontSize: 10 }}
                                            className="fa-solid fa-chevron-right me-3 khakhi"
                                        />
                                        <Link
                                            style={{ textDecoration: "none" }}
                                            className="text-gray-900"
                                            to="/"
                                        >
                                            Web Development
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <i
                                            style={{ fontSize: 10 }}
                                            className="fa-solid fa-chevron-right me-3 khakhi"
                                        />
                                        <Link
                                            style={{ textDecoration: "none" }}
                                            className="text-gray-900"
                                            to="/"
                                        >
                                            Product Management
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <i
                                            style={{ fontSize: 10 }}
                                            className="fa-solid fa-chevron-right me-3 khakhi"
                                        />
                                        <Link
                                            style={{ textDecoration: "none" }}
                                            className="text-gray-900"
                                            to="/"
                                        >
                                            Marketing
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <i
                                            style={{ fontSize: 10 }}
                                            className="fa-solid fa-chevron-right me-3 khakhi"
                                        />
                                        <Link
                                            style={{ textDecoration: "none" }}
                                            className="text-gray-900"
                                            to="/"
                                        >
                                            Graphic Design
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4 mb-4">
                                <h3 className="mb-3">Our Newsletter</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nisi.
                                </p>
                                <div className="subscribe p-1 flex items-center bg-body-secondary justify-center rounded-full py-2 px-4 mt-4">
                                    <input
                                        type="text"
                                        className="bg-transparent block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded sub border-0 rounded-full py-2 px-4"
                                    />
                                    <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline text-gray-900 bg-khakhi rounded-full py-2 px-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer