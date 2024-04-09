import React, { useEffect, useState } from 'react'
import Header from '../header';
import Blogs from '../blog';
import AddProductModel from '../add-prd-model/idnex';

const MainLayout = () => {
    const [isDark, setIsDark] = useState(false);
    const [isOpenModel, setIsOpenModel] = useState(false)

    useEffect(() => {
        let theme = localStorage.getItem('theme');
        setIsDark(theme === "dark" ? true : false);
    }, []);


    return (
        <>
            <Header isDark={isDark} setIsDark={setIsDark} />
            <div className={`${isDark ? "bg-gray-800" : "bg-white"} ${isDark ? "text-white" : "text-black"} pt-40`}>
                <div className='w-[90vw] mx-auto'>
                    <div className='text-end'>
                        <button onClick={() => setIsOpenModel(true)} className="before:ease relative h-12 w-40 overflow-hidden border border-blue-500 bg-blue-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-500 hover:before:-translate-x-40">
                            <span relative="relative z-10">Add New Product</span>
                        </button>
                    </div>
                </div>

                {isOpenModel && <AddProductModel setShow={setIsOpenModel} show={isOpenModel} isDark={isDark} />}

                <Blogs isDark={isDark} />
            </div>
        </>
    )
}

export default MainLayout