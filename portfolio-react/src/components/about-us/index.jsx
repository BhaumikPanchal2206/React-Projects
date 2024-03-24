import React from 'react'

function AboutUs() {
    return (
        <div className="w-full py-12 lg:py-24 bg-black text-white wow fadeIn">
            <div className="container grid md:gap-6 xl:grid-cols-3 xl:gap-10">
                <div className="flex items-center space-x-4 xl:col-span-2">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Jane Smith</h1>
                            <p className="text-gray-500 dark:text-gray-400">Frontend Engineer</p>
                        </div>
                        <div className="space-y-2 text-xl md:text-base xl:text-xl">
                            <p>
                                Passionate about creating beautiful and accessible web experiences. I enjoy working with React and
                                Tailwind CSS to bring designs to life.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid gap-4 md:gap-2 md:grid-cols-2 xl:col-start-2 xl:col-span-2">
                    <div className="space-y-2">
                        <h2 className="text-lg font-semibold">Skills</h2>
                        <ul className="grid gap-2 md:gap-1 lg:grid-cols-2">
                            <li>HTML/CSS</li>
                            <li>JavaScript (ES6+)</li>
                            <li>React.js</li>
                            <li>Responsive Design</li>
                            <li>Accessibility</li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-lg font-semibold">Education</h2>
                        <ul className="list-disc list-inside">
                            <li>B.S. in Computer Science, University of Example, 2010 - 2014</li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-lg font-semibold">Experience</h2>
                        <ul className="list-disc list-inside">
                            <li>Frontend Engineer, Example Inc, 2018 - Present</li>
                            <li>Junior Developer, Test Corp, 2015 - 2018</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;