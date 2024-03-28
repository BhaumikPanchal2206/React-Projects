import { Link } from "react-router-dom";

const project_data = [
    {
        project_name: "Restaurantly",
        project_img: "/images/restaurant.png",
        project_desc: "Restaurantly redefines dining online with intuitive navigation, real-time reservations, and dynamic menus. Seamlessly integrated social media amplifies the experience, setting a new standard in restaurant platforms.",
        project_link: "https://react-projects-restaurant.vercel.app/"
    },
    {
        project_name: "Restaurantly",
        project_img: "/images/restaurant.png",
        project_desc: "The Project is on Restaurantly.",
        project_link: "https://react-projects-restaurant.vercel.app/"
    },
]

function Projects() {
    return (
        <div className=" bg-gray-900 pt-28">
            <section className="w-[90vw] mx-auto">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-white text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                My Projects
                            </h1>
                            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl dark:text-gray-400">
                                A collection of my latest work. Each project showcases my attention to detail and passion for great user
                                experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-[90vw] mx-auto py-10 md:py-20 lg:py-28">
                <div className="container px-4 md:px-6">
                    {project_data.map((ele, index) => (
                        <div key={index} className="grid gap-6 md:grid-cols-2 lg:gap-12 pb-5">
                            <div className="flex flex-col justify-center space-y-2">
                                <h2 className="text-3xl text-white font-bold tracking-tight">
                                    {ele.project_name}
                                </h2>
                                <p className="max-w-prose text-gray-300 md:text-lg/relaxed dark:text-gray-400">
                                    {ele.project_desc}
                                </p>
                                <a href={ele.project_link} target="_blank" className="text-blue-500 inline-flex items-center underline underline-offset-2 hover:underline-true" >
                                    View Details
                                    <span className="w-4 h-4 ml-1.5 peer">
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                            <div>
                                <a className="flex items-center justify-center" target="_blank" href={ele.project_img}>
                                    <img
                                        alt="Project Image"
                                        className="w-10/12 rounded-lg object-contain object-center border-2 border-gray-200 overflow-hidden"
                                        // height="200"
                                        src={ele.project_img}
                                    // width="550px"
                                    />
                                </a>
                            </div>
                        </div>
                    ))}
                    {/* <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
                        <div className="flex flex-col justify-center space-y-2">
                            <h2 className="text-2xl text-white font-bold tracking-tight">Project Title</h2>
                            <p className="max-w-prose text-gray-300 md:text-xl/relaxed dark:text-gray-400">
                                Description of the project. This project was built using the latest technologies and is optimized for
                                performance and accessibility.
                            </p>
                            <a className="text-blue-500 inline-flex items-center underline underline-offset-2 hover:underline-true" href="#">
                                View Details
                                <span className="w-4 h-4 ml-1.5 peer">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <div className="flex items-center justify-center">
                            <img
                                alt="Project Image"
                                className="rounded-lg object-cover object-center border aspect-[3/2] overflow-hidden"
                                height="400"
                                src="/placeholder.svg"
                                width="600"
                            />
                        </div>
                    </div> */}
                </div>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32 border-t">
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                    <div className="space-y-3">
                        <h2 className="text-white text-3xl font-bold tracking-tighter md:text-4xl/tight">
                            Want to work together?
                        </h2>
                        <p className="max-w-[600px] text-gray-300 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                            Let's build something amazing. Contact me to discuss your project.
                        </p>
                    </div>
                    <Link
                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-900/90 dark:focus-visible:ring-gray-900"
                        to="/contact"
                    >
                        Contact Me
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Projects;