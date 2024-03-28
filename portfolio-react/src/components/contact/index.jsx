import React from 'react'
import Footer from '../footer'

const Contact = () => {
    return (
        <>
            <section id="contact" className="same-class-for-scroll bg-gray-900 pt-[50px]">
                <div className="w-[90vw] mx-auto sm:px-4 py-5">
                    <h1 style={{ borderBottom: "10px groove white" }}
                        // className="text-3xl ms-4 pt-3 pb-2 m-0 inline-block text-white mb-5 wow bounceInDown"
                        className="text-3xl ms-4 pt-3 pb-2 m-0 inline-block text-white mb-5"
                    >
                        Contact
                    </h1>
                    <div className="flex flex-wrap ">
                        {/* <div className="lg:w-2/5 pr-4 pl-4 text-white wow bounceInLeft"> */}
                        <div className="lg:w-2/5 pr-4 pl-4 text-white">
                            <div className="share flex items-center rounded border border-blue-600 p-6 mb-3">
                                <a
                                    href="https://www.google.com/maps/place/New+Ranchodraynagar+Society/@23.1021652,72.548237,19.08z/data=!4m14!1m7!3m6!1s0x395e831824190719:0x73f901e0e996377c!2sVandemataram+Icon!8m2!3d23.0975653!4d72.5479279!16s%2Fg%2F1tgvc024!3m5!1s0x395e831ef3000001:0x49d12bbb154a1dd7!8m2!3d23.1025439!4d72.5484008!16s%2Fg%2F11f3vp737b?entry=ttu"
                                    target="_blank"
                                >
                                    <i className="p-6 bg-blue-600 text-white rounded-full fa-solid fa-location-dot 4s-2 mx-3" />
                                </a>
                                <div className="info">
                                    <h4>Location:-</h4>
                                    <p className="m-0">
                                        59/60 New Ranchodnagar Society , Jagarpur Road , Vandemataram ,
                                        Ahmedabad , 382481
                                    </p>
                                </div>
                            </div>
                            <div className="share-x flex items-center rounded  border border-blue-600 p-6 mb-3">
                                <a href="mailto:bhaumikpanchal@gmail.com">
                                    <i className="p-6 bg-blue-600 text-white rounded-full fa-solid fa-envelope fs-4 mx-3" />
                                </a>
                                <div className="info">
                                    <h4>Email:-</h4>
                                    <p className="m-0">bhaumikpanchal2206@gmail.com</p>
                                </div>
                            </div>
                            <div className="share-y flex items-center rounded  border border-blue-600 p-6 mb-3">
                                <a href="callto:9429613731">
                                    <i className="p-6 bg-blue-600 text-white rounded-full fa-solid fa-phone fs-4 mx-3" />
                                </a>
                                <div className="info">
                                    <h4>Call:-</h4>
                                    <p className="m-0">9429613731</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="w-full lg:w-3/5 pr-4 pl-4 text-white wow bounceInRight"> */}
                        <div className="w-full lg:w-3/5 pr-4 pl-4 text-white ">
                            <form action="">
                                <div className="flex flex-wrap pb-3">
                                    <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:pr-4">
                                        <input
                                            type="text"
                                            className="!bg-transparent block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white rounded lg:mb-0 border-2 border-blue-600 text-white"
                                            placeholder="Your Name"
                                            id="name"
                                            required=""
                                        />
                                    </div>
                                    <div className="w-full sm:w-1/2 sm:pl-4">
                                        <input
                                            type="text"
                                            className="!bg-transparent block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white rounded border-2 border-blue-600 text-white "
                                            placeholder="Your Email"
                                            id="ename"
                                            required=""
                                        />
                                    </div>
                                </div>
                                <div className="mb-4 py-3">
                                    <input
                                        type="text"
                                        className="!bg-transparent block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white rounded border-2 border-blue-600 text-white "
                                        placeholder="Subject"
                                        id="Subject"
                                        required=""
                                    />
                                </div>
                                <div className="mb-4 py-3">
                                    <textarea
                                        className="!bg-transparent block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white rounded border-2 border-blue-600 text-white "
                                        placeholder="Message"
                                        name="message"
                                        rows={10}
                                        required=""
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="text-center py-3 ">
                                    <button
                                        style={{ transition: ".5s ease" }}
                                        // className="wow bounceInUp inline-block align-middle text-center select-none border font-normal whitespace-no-wrap  py-1 px-3 leading-normal no-underline text-blue-600 border-blue-600 hover:text-white bg-transparent hover:bg-blue-600 rounded-full share-btn !shadow-none"
                                        className=" inline-block align-middle text-center select-none border font-normal whitespace-no-wrap  py-1 px-3 leading-normal no-underline text-blue-600 border-blue-600 hover:text-white bg-transparent hover:bg-blue-600 rounded-full share-btn !shadow-none"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact