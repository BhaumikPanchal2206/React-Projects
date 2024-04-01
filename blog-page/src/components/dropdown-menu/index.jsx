import React, { useState } from 'react';

const category = [
    {
        name: "Mobile",
        items: ["Samsung", "iPhone"]
    },
    {
        name: "Headphone",
        items: ["Boat", "U & I"]
    },
];

const DropDownMenu = ({ isDark }) => {
    const [data, setData] = useState({ data: [], isOpen: false, index: -1 });

    return (
        <div
            onMouseLeave={() => {
                setData({ data: [], isOpen: false, index: -1 });
            }}
            className='relative z-10'
        >
            <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3'>
                {category.map((ele, index) => (
                    <button
                        key={index}
                        className={`relative ${isDark ? "bg-gray-700" : "bg-gray-300"} ${isDark ? "text-gray-200" : "text-gray-700"} font-semibold py-2 px-4 rounded inline-flex items-center`}
                        onMouseMove={() => {
                            setData({ data: ele.items, isOpen: true, index: index });
                        }}
                    >
                        <span>{ele.name}</span>
                        {data.isOpen && data.index === index && (
                            <div
                                onMouseLeave={() => {
                                    setData({ data: [], isOpen: false, index: -1 });
                                }}
                                className={`absolute left-0 top-full w-full ${isDark ? "bg-gray-800" : "bg-white"} rounded-md shadow-lg z-10`}
                            >
                                <div className='py-1'>
                                    {data.data.map((e, i) => (
                                        <a
                                            key={i}
                                            href={`#${e}`}
                                            className={`px-4 py-2 flex w-full justify-between ${isDark ? "text-gray-200" : "text-gray-800"} ${isDark ? "hover:bg-gray-600" : "hover:bg-gray-200"}`}
                                        >
                                            <p>{e}</p>
                                            <i className="fa-solid fa-chevron-up fa-rotate-90"></i>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DropDownMenu;
