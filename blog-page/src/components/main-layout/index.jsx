import React, { useState } from 'react'
import Header from '../header'
import Footer from '../footer'
import DropDownMenu from '../dropdown-menu'
import AdSense from 'react-adsense';
import Blogs from '../blogs';

const data = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo fugiat facilis illum quis accusantium quaerat, repellat dolore eius nesciunt numquam dignissimos asperiores possimus. Aperiam maiores repellat dolores natus saepe nam illo, architecto assumenda ipsa laborum debitis maxime rerum voluptatibus, iusto doloremque inventore sequi distinctio. Qui, doloremque aliquid! Temporibus necessitatibus pariatur alias atque. Blanditiis minus, quasi aspernatur ea nam obcaecati facilis facere ipsa nulla eaque explicabo? Pariatur maxime architecto vitae qui accusamus impedit necessitatibus nulla, modi recusandae porro consectetur at quo enim doloribus debitis vero illum repellat, dolorum unde fugit, vel veniam! Enim quis sint ipsum ea dignissimos ullam! Atque porro, consequuntur asperiores aliquid rerum neque mollitia! Sapiente voluptatibus itaque, ea hic aspernatur excepturi quaerat officia eligendi? Maiores doloremque eos quaerat saepe enim asperiores ea, distinctio iusto ipsam impedit. Sint, placeat expedita hic illum magnam nobis unde repudiandae voluptate tenetur facilis nihil, voluptatem quibusdam ad minus consectetur earum ipsam provident quis reprehenderit quia officiis pariatur. Iure quis illum cumque odio numquam tempore adipisci harum, accusamus, laboriosam magnam ut aperiam non ducimus aut omnis fugit eaque cupiditate deserunt voluptatem asperiores nostrum expedita pariatur dignissimos. Cum dolor, placeat nobis labore deleniti eos sapiente optio? Neque nihil molestias vitae ea non nisi quam aliquid et eveniet nesciunt vero cum soluta, debitis quasi omnis laborum a eius exercitationem accusantium modi fugit libero voluptatibus, ut expedita? Eaque, accusantium praesentium alias ab reiciendis suscipit quos nulla omnis neque in, animi aut eos atque esse eius iusto optio quaerat doloribus nisi voluptas voluptates, iure facere veritatis! Officia, explicabo!"


const MainLayout = () => {
    const [showMore, setShowMore] = useState(false)

    return (
        <>
            <Header />
            <div className='pt-[80px]'></div>

            {/* <div> */}
            <div className='w-[90vw] pt-[85px] mx-auto block md:flex gap-5'>
                <div className='w-full md:w-9/12'>
                    <div className="bg-gray-50/50 py-8 md:py-12 lg:py-16 xl:py-20">
                        {/* <div className="container grid md:gap-4 lg:grid-cols-3 xl:gap-8"> */}
                        <div className="text-center space-y-4 lg:col-span-2 xl:col-span-1">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">The Gadget Enthusiast</h2>
                            <p className="text-base md:text-xl/relaxed text-gray-500 dark:text-gray-400">
                                Your source for the latest news, reviews, and updates on the coolest gadgets. Whether you're into
                                smartphones, wearables, or smart home tech, we've got you covered.
                            </p>
                            <div className="text-center">
                                <button className="bg-white text-black rounded-full border border-blue-600 px-3 py-1 me-2 hover:bg-blue-600 hover:text-white duration-300" href="#">Subscribe</button>
                                <button className="bg-blue-600 text-white rounded-full px-3 py-1 me-2 hover:bg-white hover:text-black hover:border hover:border-blue-600 duration-300" href="#">Start Reading</button>
                            </div>
                        </div>
                        {/* <div className="grid gap-4 sm:gap-6 lg:order-first lg:col-span-1">
                                <div className="mx-auto flex items-center justify-center p-4 sm:p-8">
                                    <img
                                        className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                                        height="150"
                                        width="300"
                                        src="assets/images/logo.png"
                                        alt=""
                                    />
                                </div>
                            </div> */}
                        {/* </div> */}
                    </div>

                    <DropDownMenu />

                    <div className="py-8 md:py-10 lg:py-14 xl:py-16">
                        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                            <div className="space-y-2">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">Featured Articles</h2>
                                <p className="mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Check out our latest and most popular articles on the coolest gadgets.
                                </p>
                            </div>
                        </div>

                        <Blogs />

                    </div>

                    <div className="bg-gray-200 rounded-md p-6">
                        <h2 className='text-2xl font-semibold pb-3'>Gadget Online</h2>
                        <p>
                            {!showMore ? data.slice(0, 200) : data}
                        </p>
                        <p className='cursor-pointer text-blue-700' onClick={() => setShowMore(pre => !pre)}>view more...</p>
                    </div>


                    <div className="border-t border-gray-200 dark:border-gray-800">
                        <div className="container py-8 md:py-12 lg:py-16 grid items-center justify-center gap-4 text-center md:px-6 lg:gap-10">
                            <div className="space-y-2">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">
                                    Want to stay up to date with the latest gadgets?
                                </h2>
                                <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                                    Subscribe to our newsletter for news, reviews, and exclusive insights.
                                </p>
                            </div>
                            <form className="mx-auto max-w-sm space-y-4">
                                <div className="flex flex-col gap-2">
                                    <label className="sr-only" htmlFor="email">
                                        Email
                                    </label>
                                    <input className="max-w-lg mx-auto" id="email" placeholder="Enter your email" type="email" />
                                    <button type="submit" className="btn">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>





                <div className='w-full md:w-3/12'>
                    <div className="w-full pt-24 pb-12 sticky -z-10 top-0">
                        {/* <AdSense.Google
                            client='pub-8612459690712276'
                            slot='1234567890'
                            style={{ width: 300, height: 250, float: 'left' }}
                            format=''
                        /> */}
                        <div className="bg-white rounded-lg overflow-hidden border border-gray-300 shadow-md">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/022/721/557/original/google-logo-for-search-site-free-png.png"
                                alt="image"
                                className="w-full border-b border-gray-300"
                            />
                            <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                <h3>
                                    <a
                                        href="javascript:void(0)"
                                        className=" font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary"
                                    >
                                        Create an advertisement
                                    </a>
                                </h3>
                                <p className="text-base text-body-color leading-relaxed mb-7">
                                    advertisement content Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ad.
                                </p>
                                <a
                                    href="javascript:void(0)"
                                    className=" inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white transition "
                                >
                                    View Ad
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    )
}

export default MainLayout