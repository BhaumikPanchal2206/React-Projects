import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-black text-white text-md-center">
                <div className="w-[90vw] mx-auto py-4">
                    <div className="block md:flex items-center">
                        {/* <div className="w-full md:w-1/2 mb-3 text-left md:text-center wow bounceInLeft"> */}
                        <div className="w-full md:w-1/2 mb-3 text-left md:text-center">
                            <h4 className='text-xl'>
                                Mobile No:- <b>9429613731</b>
                            </h4>
                            <h4 className='text-xl'>
                                Email:- <b>bhaumikpanchal2206@gmail.com</b>
                            </h4>
                        </div>
                        {/* <div className="w-full md:w-1/2 text-left md:text-center wow bounceInRight"> */}
                        <div className="w-full md:w-1/2 text-left md:text-center">
                            <h3 className='text-xl mb-3'>Social Media</h3>
                            <div className="flex justify-start md:justify-center gap-3">
                                <div className="overflow-hidden rounded-circle relative z-3 text-center common instagram border border-white">
                                    <a
                                        className="text-white"
                                        target="_blank"
                                        href="https://www.instagram.com/_bhaumik_2206/"
                                    >
                                        <i className="fa-brands fa-instagram relative" />
                                    </a>
                                </div>
                                <div className="overflow-hidden rounded-circle relative z-3 text-center common facebook border border-white">
                                    <a
                                        className="text-white"
                                        target="_blank"
                                        href="https://www.facebook.com/bhaumik.panchal.526"
                                    >
                                        <i className="fa-brands fa-facebook-f relative" />
                                    </a>
                                </div>
                                <div className="overflow-hidden rounded-circle relative z-3 text-center common skype border border-white">
                                    <a
                                        className="text-white"
                                        target="_blank"
                                        href="https://join.skype.com/invite/KoIn8H5iJVSz"
                                    >
                                        <i className="fa-brands fa-skype relative" />
                                    </a>
                                </div>
                                <div className="overflow-hidden rounded-circle relative z-3 text-center common linked-in border border-white">
                                    <a
                                        className="text-white"
                                        target="_blank"
                                        href="https://www.linkedin.com/in/bhaumik-panchal-b184b8263/"
                                    >
                                        <i className="fa-brands fa-linkedin relative" />
                                    </a>
                                </div>
                                <div className="overflow-hidden rounded-circle relative z-3 text-center common whatsapp border border-white">
                                    <a
                                        className="text-white"
                                        target="_blank"
                                        href="https://wa.me/9429613731"
                                    >
                                        <i className="fa-brands fa-whatsapp relative" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center bg-gray-950 text-white py-3 text-2xl">
                    @copyrightbybhaumikpanchal
                </div>
            </footer>
        </>
    )
}

export default Footer