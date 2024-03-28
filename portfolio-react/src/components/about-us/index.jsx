function AboutUs() {
    return (
        <div className="bg-gradient-to-b from-gray-800 to-gray-900">
            <div className="w-[90vw] mx-auto py-24 print:hidden  ">
                <div className="container px-4 grid auto-cols-fr min-h-[9in] gap-8">
                    <div className="space-y-2">
                        <div className="space-y-1">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                                Bhaumik Panchal
                            </h1>
                            <p className="text-base font-medium text-gray-100 dark:text-gray-400">
                                React Developer
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-medium text-gray-100 dark:text-gray-400">
                                bhaumikpanchal2206@gmail.com
                            </p>
                            <p className="text-sm font-medium text-gray-100 dark:text-gray-400">
                                9429613731
                            </p>
                            <a href="https://github.com/BhaumikPanchal2206" target="_blank" className="text-sm font-medium text-gray-100 dark:text-gray-400">
                                https://github.com/BhaumikPanchal2206
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:items-center md:gap-4">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-lg font-semibold text-white">Summary</h2>
                            <p className="text-sm leading-loose text-gray-100 md:text-base/relaxed dark:text-gray-400">
                                Creative and detail-oriented frontend engineer with a passion for crafting beautiful and user-friendly
                                interfaces. Excels in collaborative environments and is dedicated to writing clean, maintainable code.
                                Experienced in modern web technologies including React, Next.js, and Tailwind CSS.
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-lg font-semibold text-white">Skills</h2>
                            <div className="flex flex-wrap gap-2">
                                <div className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm shadow-sm dark:border-gray-800 dark:bg-gray-950 text-gray-800">
                                    HTML / CSS
                                </div>
                                <div className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm shadow-sm dark:border-gray-800 dark:bg-gray-950 text-gray-800">
                                    Tailwind CSS / Bootstrap
                                </div>
                                <div className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm shadow-sm dark:border-gray-800 dark:bg-gray-950 text-gray-800">
                                    JavaScript
                                </div>
                                <div className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm shadow-sm dark:border-gray-800 dark:bg-gray-950 text-gray-800">
                                    React
                                </div>
                                <div className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm shadow-sm dark:border-gray-800 dark:bg-gray-950 text-gray-800">
                                    Next.js
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:items-center md:gap-4">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-lg font-semibold text-white">Education</h2>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <div className="text-sm font-medium text-gray-100">BSc in Computer Science</div>
                                    <div className="text-sm text-gray-100 dark:text-gray-400">University of Example</div>
                                </div>
                                <div className="text-sm text-gray-100 dark:text-gray-400">2012 - 2016</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-lg font-semibold text-white">Professional Experience</h2>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <div className="text-sm font-medium text-gray-100">Frontend Engineer at Example Corp</div>
                                </div>
                                <div className="text-sm text-gray-100 dark:text-gray-400">2016 - Present</div>
                                <p className="text-sm leading-loose text-gray-100 md:text-base/relaxed dark:text-gray-400">
                                    Leading the frontend development of innovative web applications. Collaborating with cross-functional
                                    teams to deliver high-quality software. Implementing responsive and accessible user interfaces using
                                    modern web technologies.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:items-center md:gap-4">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-lg font-semibold text-white">Hobbies</h2>
                            <div className="space-y-2">
                                <div className="text-sm font-medium text-gray-100">Drawing</div>
                                <div className="text-sm font-medium text-gray-100">Listening Song</div>
                                <div className="text-sm font-medium text-gray-100">Cricket</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;