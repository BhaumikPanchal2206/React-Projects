import React from 'react'

const DescriptionPopUp = ({ setShow, data }) => {
    return (
        <>
            <div className={`fixed inset-[-1px] flex items-center justify-center p-5 z-[99]`}>
                <div onClick={() => setShow(false)} className={`absolute inset-[-1px] animate-[modalOverlayAnimation_0.2s_ease-in-out] bg-[rgba(0,9,26,0.80)] blur-[1px] [animation-fill-mode:forwards]`}></div>
                <div className={`animate-[modalDialogAnimation_0.2s_ease-in-out] [animation-fill-mode:forwards] pointer-events-none relative translate-y-[-50px] transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[800px] transform-none opacity-100 w-full `}>
                    <div className="px-10 w-[80%] max-w-full py-8 shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] rounded-lg pointer-events-auto relative flex w-full flex-col border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
                        <div onClick={() => setShow(false)} className='absolute -right-2 -top-2 cursor-pointer w-7 h-7 rounded-full bg-black flex justify-center items-center'>
                            <i class="fa-solid fa-xmark text-white text-lg"></i>
                        </div>
                        <div className='flex items-center'>
                            <img
                                src={data.img}
                                alt={data.title}
                                className="w-1/2 h-60 object-contain border-b-2 pb-4"
                            />
                            <div className='w-1/2'>

                                <h1 className='text-4xl'>{data.title}</h1>
                                <p>{data.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DescriptionPopUp