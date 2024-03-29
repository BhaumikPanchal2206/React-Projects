import React from 'react'


const blogData = [
    {
        category: "Mobile",
        subcategories: [
            { name: "samsung", posts: [1, 2] },
            { name: "iphone", posts: [1, 2, 3, 4] }
        ]
    },
    {
        category: "Headphone",
        subcategories: [
            { name: "Boat", posts: [1] },
            { name: "U & I", posts: [1, 2, 3, 4, 5] }
        ]
    },
    // Add more categories and subcategories as needed
];

const Blogs = () => {
    return (
        <>
            <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-white">
                <div className="container mx-auto px-4">
                    {blogData.map((gadget, index1) => (
                        <div key={index1} className="mb-12">
                            <h2 id={gadget.category} className="text-3xl lg:text-4xl border-b-4 border-black font-bold pb-2">
                                {gadget.category}
                            </h2>
                            {gadget.subcategories.map((subcategory, index2) => (
                                <div id={subcategory.name} key={index2} className="mt-6">
                                    <h2 className="text-xl lg:text-2xl font-semibold py-3">
                                        {subcategory.name}
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                        {subcategory.posts.map((post, index3) => (
                                            <div key={index3} className="bg-white rounded-lg overflow-hidden hover:shadow-lg">
                                                <img
                                                    src="assets/images/placeholder.jpeg"
                                                    alt="image"
                                                    className="w-full h-60 object-cover"
                                                />
                                                <div className="p-6 lg:p-8 text-center">
                                                    <h3 className="text-lg lg:text-xl font-semibold mb-4">
                                                        <a
                                                            href="javascript:void(0)"
                                                            className="text-dark hover:text-primary transition duration-300"
                                                        >
                                                            Creative Card Component designs graphic elements
                                                        </a>
                                                    </h3>
                                                    <p className="text-sm lg:text-base text-body-color leading-relaxed mb-5">
                                                        {index3 % 2 === 0 ?
                                                            "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit Lorem consectetur adipiscing elit" :
                                                            "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit Lorem consectetur adipiscing elit Lorem ipsum dolor sit amet pretium consectetur adipiscing elit Lorem consectetur adipiscing elit"}
                                                    </p>
                                                    <a
                                                        href="javascript:void(0)"
                                                        className=" inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-blue-600 hover:bg-blue-600 hover:text-white duration-500 transition "
                                                    >
                                                        View Details
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Blogs