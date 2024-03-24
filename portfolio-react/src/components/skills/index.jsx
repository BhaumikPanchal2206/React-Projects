import React from 'react'

const data = {
    "Programming Languages": [
        { logo: <CodepenIcon className="h-6 w-6" />, name: "HTML / CSS", desc: "I'm proficient in JavaScript and have experience with both front-end and back-end frameworks." },
        { logo: <CodepenIcon className="h-6 w-6" />, name: "TAILWIND / BOOTSTRAP", desc: "I'm proficient in JavaScript and have experience with both front-end and back-end frameworks." },
        { logo: <CodepenIcon className="h-6 w-6" />, name: "JavaScript", desc: "I'm proficient in JavaScript and have experience with both front-end and back-end frameworks." },
        { logo: <PiIcon className="h-6 w-6" />, name: "React JS", desc: "Python is my go-to language for data analysis and machine learning projects." },
        { logo: <PiIcon className="h-6 w-6" />, name: "Next JS", desc: "Python is my go-to language for data analysis and machine learning projects." },
        { logo: <PiIcon className="h-6 w-6" />, name: "Python", desc: "Python is my go-to language for data analysis and machine learning projects." },
    ],
    "Soft Skills": [
        { logo: <PiIcon className="h-6 w-6" />, name: "Leadership", desc: "Python is my go-to language for data analysis and machine learning projects." },
        { logo: <PiIcon className="h-6 w-6" />, name: "Problem Solving", desc: "Python is my go-to language for data analysis and machine learning projects." },
        { logo: <PiIcon className="h-6 w-6" />, name: "Team Work", desc: "Python is my go-to language for data analysis and machine learning projects." },
        { logo: <PiIcon className="h-6 w-6" />, name: "Group Discussion", desc: "Python is my go-to language for data analysis and machine learning projects." },
        { logo: <PiIcon className="h-6 w-6" />, name: "Time Management", desc: "Python is my go-to language for data analysis and machine learning projects." },

    ]
}

function Skills() {
    return (
        <section className="w-full pt-[70px] pb-5 bg-gray-900 text-gray-100">
            <div className="container px-4 grid md:px-6">
                <div className="space-y-3 text-center pb-8">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Skills</h2>
                    <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-400">
                        I'm experienced in a variety of tools and technologies. Here are some of my skills.
                    </p>
                </div>
                <div className="grid max-w-3xl gap-6 mx-auto lg:grid-cols-2 lg:max-w-none xl:gap-8">
                    {Object.keys(data).map((name, i) => (
                        <div key={i} className="space-y-2">
                            <h3 className="text-xl font-bold tracking-tight">{name}</h3>
                            <div data-wow-duration="1s" className={`grid gap-4  ${i % 2 === 0 ? "wow bounceInLeft" : "wow bounceInRight"}`}>
                            {/* <div className={`grid gap-4 `}> */}
                                {data[name].map((ele, index) => (
                                    // <div data-wow-delay={`0.${index}s`} data-wow-duration="1s" key={index} className={`bg-gray-800 p-4 rounded-lg ${i % 2 === 0 ? "wow bounceInLeft" : "wow bounceInRight"}`}>
                                        <div key={index} className={`bg-gray-800 p-4 rounded-lg `}>
                                        <div className="flex items-center gap-4">
                                            {ele.logo}
                                            <h4 className="font-semibold">{ele.name}</h4>
                                        </div>
                                        <p className="text-sm/relaxed">
                                            {ele.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    {/* <div className="space-y-2">
                        <h3 className="text-xl font-bold tracking-tight">Programming</h3>
                        <div className="grid gap-4">
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <CodepenIcon className="h-6 w-6" />
                                    <h4 className="font-semibold">JavaScript</h4>
                                </div>
                                <p className="text-sm/relaxed">
                                    I'm proficient in JavaScript and have experience with both front-end and back-end frameworks.
                                </p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <PiIcon className="h-6 w-6" />
                                    <h4 className="font-semibold">Python</h4>
                                </div>
                                <p className="text-sm/relaxed">
                                    Python is my go-to language for data analysis and machine learning projects.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold tracking-tight">Frameworks</h3>
                        <div className="grid gap-4">
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <DribbbleIcon className="h-6 w-6" />
                                    <h4 className="font-semibold">React</h4>
                                </div>
                                <p className="text-sm/relaxed">
                                    I'm a React enthusiast and enjoy building interactive user interfaces with the library.
                                </p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <WindIcon className="h-6 w-6" />
                                    <h4 className="font-semibold">Tailwind CSS</h4>
                                </div>
                                <p className="text-sm/relaxed">
                                    I've mastered Tailwind CSS and appreciate the utility-first approach to styling web applications.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold tracking-tight">Tools</h3>
                        <div className="grid gap-4">
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <CodepenIcon className="h-6 w-6" />
                                    <h4 className="font-semibold">VS Code</h4>
                                </div>
                                <p className="text-sm/relaxed">
                                    I'm most productive in VS Code and love exploring the extensions that enhance my workflow.
                                </p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <FigmaIcon className="h-6 w-6" />
                                    <h4 className="font-semibold">Figma</h4>
                                </div>
                                <p className="text-sm/relaxed">
                                    Figma is my design playground, where I create mockups and prototypes for my projects.
                                </p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

function CodepenIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
            <line x1="12" x2="12" y1="22" y2="15.5" />
            <polyline points="22 8.5 12 15.5 2 8.5" />
            <polyline points="2 15.5 12 8.5 22 15.5" />
            <line x1="12" x2="12" y1="2" y2="8.5" />
        </svg>
    )
}


function DribbbleIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
            <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
            <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
        </svg>
    )
}


function FigmaIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
            <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
            <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
            <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
            <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
        </svg>
    )
}


function PiIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="9" x2="9" y1="4" y2="20" />
            <path d="M4 7c0-1.7 1.3-3 3-3h13" />
            <path d="M18 20c-1.7 0-3-1.3-3-3V4" />
        </svg>
    )
}


function WindIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
            <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
            <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
        </svg>
    )
}

export default Skills;