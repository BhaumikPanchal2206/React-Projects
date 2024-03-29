import React, { useState } from 'react'

const category = [
    {
        name: "Mobile",
        items: ["Samsung", "iPhone",]
    },
    {
        name: "Headphone",
        items: ["Boat", "U & I"]
    },
]

const DropDownMenu = () => {
    const [data, setData] = useState({ data: [], isOpen: false, index: -1 })

    const [isOpen, setIsOpen] = useState(false);
    const [subMenu, setSubMenu] = useState([]);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    console.log(data)

    return (
        <>
            <div
                onMouseLeave={() => {
                    setData({ data: [], isOpen: false, index: -1 })
                }}
                className='relative z-10'>
                <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3'>
                    {category.map((ele, index) => (
                        <button
                            key={index}
                            className="relative bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
                            onMouseMove={() => {
                                setData({ data: ele.items, isOpen: true, index: index });
                            }}
                        >
                            <span>{ele.name}</span>
                            {data.isOpen && data.index === index && (
                                <div
                                    onMouseLeave={() => {
                                        setData({ data: [], isOpen: false, index: -1 })
                                    }}
                                    className="absolute left-0 top-full w-36 sm:w-48 bg-white rounded-md shadow-lg z-10">
                                    <div className='py-1'>
                                        {data.data.map((e, i) => (
                                            <a key={i}

                                                href={`#${e}`}
                                                className="px-4 py-2 flex w-full justify-between text-gray-800 hover:bg-gray-200"
                                            >
                                                <p>{e}</p>
                                                <i class="fa-solid fa-chevron-up fa-rotate-90"></i>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* <div
                onMouseLeave={() => {
                    setIsOpen(false);
                }}
                className="relative z-10">
                <button
                    className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
                    onMouseEnter={() => {
                        setIsOpen(true);
                        setSubMenu([])
                    }}
                >
                    <span>Category</span>
                    <svg
                        className="fill-current h-4 w-4 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                            fillRule="evenodd"
                            d="M4 6a2 2 0 012-2h8a2 2 0 110 4H6a2 2 0 01-2-2zm2 8a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>


                <div className='flex absolute top-full'>
                    {isOpen && (
                        <div
                            onMouseEnter={() => setIsOpen(true)}
                            className="mt-2 w-36 sm:w-48 bg-white rounded-md shadow-lg z-10 h-full">
                            <div className='py-1'>
                                {category.map((e, i) => (
                                    <a key={i}
                                        onMouseEnter={() => {
                                            console.log(e.items)
                                            setSubMenu(e.items)
                                            setIsSubMenuOpen(true)
                                        }}
                                        href={`#${e.name}`}
                                        className="px-4 py-2 flex w-full justify-between text-gray-800 hover:bg-gray-200"
                                    >
                                        <p>{e.name}</p>
                                        <i class="fa-solid fa-chevron-up fa-rotate-90"></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div> */}
        </>
    )
}

export default DropDownMenu