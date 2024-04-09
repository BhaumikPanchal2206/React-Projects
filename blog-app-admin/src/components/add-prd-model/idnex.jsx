import React, { useEffect, useState } from 'react'

import { Formik } from 'formik'
import FormCommonInput from '../shared/form/form-input'
import SelectBox from '../shared/form/select-button'


const initialValue = {
    // category: "Mobile",
    // sub_category: "OnePlus",
    name: "",
    img: "",
    desc: "",
    features: []
}

const AddProductModel = ({ setShow, isDark, show }) => {
    const [category, setCategory] = useState({ cat: [], sub_cat: [] })
    const [loading, setLoading] = useState(false)
    const [selectData, setSelectData] = useState({})
    const [checkData, setCheckData] = useState({ cat: "", sub_cat: "" })


    console.log(checkData)

    useEffect(() => {
        setLoading(true)
        let a = fetch("https://tech-tonics.onrender.com/product")
            .then(e => e.json())
            .then(data => {
                let select_data_category = {}
                for (const key in data.data) {
                    select_data_category[key] = Object.keys(data.data[key]);
                }
                setSelectData(select_data_category)
                setCategory(pre => ({ cat: Object.keys(select_data_category), sub_cat: select_data_category[Object.keys(select_data_category)[0]] }));
            })
            .finally(() => setLoading(false))
    }, [show = true])

    const handleSubmit = (values) => {
        let data = {
            category: checkData.cat,
            sub_category: checkData.sub_cat,
            ...values,
        }
        // console.log(values)
        console.log(data)
    }

    return (
        <>
            <div className={`fixed back inset-0 flex items-center justify-center z-[99] overflow-hidden`}>
                <div onClick={() => setShow(false)} className={`w-screen h-screen absolute inset-0 animate-[modalOverlayAnimation_0.2s_ease-in-out] bg-[rgba(0,9,26,0.80)] blur-[1px] [animation-fill-mode:forwards]`}></div>
                <div className={`animate-[modalDialogAnimation_0.2s_ease-in-out] [animation-fill-mode:forwards] pointer-events-none relative translate-y-[-50px] transition-all duration-500 ease-in-out:mt-7transform-none opacity-100overflow-auto`}>
                    <div className={`w-screen h-screen px-10 overflow-x-hidden z-40 over-y-auto max-w-full py-8 shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] rounded-lg pointer-events-auto relative flex flex-col border-none ${isDark ? "bg-gray-800" : "bg-white"} bg-clip-padding text-current shadow-lg outline-none`}>
                        <div onClick={() => setShow(false)} className={`absolute z-50 right-5 top-3 cursor-pointer w-7 h-7 rounded-full  flex justify-center items-center`}>
                            <i className={`fa-solid fa-xmark ${isDark ? "text-white" : "text-black"} text-3xl`}></i>
                        </div>
                        {loading ? (
                            <div>Loading...</div>
                        ) : (
                            <div>
                                <Formik
                                    initialValues={initialValue}
                                    onSubmit={handleSubmit}
                                >
                                    {formik => (
                                        <form onSubmit={formik.handleSubmit}>
                                            <SelectBox
                                                setCheckData={setCheckData}
                                                sel_data={selectData}
                                                setCategory={setCategory}
                                                parent={true}
                                                selectData={category.cat}
                                                title={"Select Category"} />
                                            <SelectBox
                                                setCheckData={setCheckData}
                                                sel_data={selectData}
                                                setCategory={setCategory}
                                                selectData={category.sub_cat}
                                                title={"Select Sub Category"} />
                                            <div className="flex flex-col items-end gap-6">
                                                <FormCommonInput label="Product Image URL" name="name" formik={formik} />
                                                <FormCommonInput label="Product Title" name="img" formik={formik} />
                                                <FormCommonInput label="Product Description" name="desc" formik={formik} />

                                                <button type="submit" className="before:ease relative h-12 w-40 overflow-hidden border border-blue-500 bg-blue-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-500 hover:before:-translate-x-40">
                                                    <span relative="relative z-10">Add Product</span>
                                                </button>
                                            </div>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        )}
                    </div>
                </div >
            </div >
        </>
    )
}

export default AddProductModel