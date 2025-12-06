import type { MetaFunction } from "react-router";
import { UIPanel } from "~/components/ui/UIPanel";
import { BriefcaseIcon, AcademicCapIcon, MapPinIcon, CalendarIcon, CheckCircleIcon, CpuChipIcon, EyeIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
    return [
        { title: "About Darsh Menon | Robotics Software Engineer at Asimov Robotics | BITS Pilani Graduate" },
        {
            name: "description",
            content: "Learn about Darsh Menon, a Robotics Software Engineer at Asimov Robotics in Kochi, India. BITS Pilani Mechanical Engineering graduate with expertise in ROS 2, Computer Vision, SLAM, MoveIt 2, Autonomous Navigation, and Reinforcement Learning. Previously at Growth Jockey. Building intelligent autonomous systems for humanoid robots."
        },
        { name: "keywords", content: "Darsh Menon About, Robotics Engineer Resume, ROS 2 Developer India, Asimov Robotics Engineer, BITS Pilani Alumni, Computer Vision Expert, Autonomous Navigation, SLAM Developer, MoveIt 2, Python C++ Developer, Growth Jockey, Kochi Kerala, Robotics Professional, Humanoid Robot Developer, Machine Learning Engineer" },
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
        { name: "googlebot", content: "index, follow" },
        // Open Graph
        { property: "og:title", content: "About Darsh Menon | Robotics Software Engineer at Asimov Robotics" },
        { property: "og:description", content: "Robotics Software Engineer at Asimov Robotics. BITS Pilani graduate specializing in ROS 2, Computer Vision, SLAM, and Autonomous Navigation. Building intelligent autonomous systems." },
        { property: "og:type", content: "profile" },
        { property: "og:url", content: "https://darshmenon.github.io/about" },
        { property: "og:site_name", content: "Darsh Menon Portfolio" },
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: "About Darsh Menon | Robotics Software Engineer" },
        { name: "twitter:description", content: "Robotics Software Engineer at Asimov Robotics. BITS Pilani graduate specializing in ROS 2, Computer Vision, and Autonomous Navigation." },
        // Canonical
        { tagName: "link", rel: "canonical", href: "https://darshmenon.github.io/about" },
    ];
};

const experiences = [
    {
        period: "Feb 2025 - Present",
        title: "Robotics Software Engineer",
        company: "Asimov Robotics",
        location: "Kochi, India",
        description: [
            "Developing multi-robot navigation and perception systems for autonomous mobile robots",
            "Implementing RANSAC-based obstacle detection and path planning algorithms",
            "Building real-time communication infrastructure using ROS 2 and WebSocket protocols",
            "Technologies: ROS 2, OpenCV, Python, C++, RANSAC, WebSocket"
        ]
    },
    {
        period: "Jun 2024 - Oct 2024",
        title: "Software Development Engineer 1",
        company: "Growth Jockey",
        location: "Remote",
        description: [
            "Developed full-stack FinTech applications and internal tools",
            "Built responsive web applications using Remix and TypeScript",
            "Designed and implemented PostgreSQL database schemas for financial data",
            "Technologies: Remix, TypeScript, PostgreSQL, React, Node.js"
        ]
    },
    {
        period: "Jul 2023 - Dec 2023",
        title: "Software Development Engineer Intern",
        company: "Growth Jockey",
        location: "Remote",
        description: [
            "Led complete web rebranding initiative across 130+ pages",
            "Optimized frontend performance and improved page load times",
            "Collaborated with design team to implement modern UI/UX patterns",
            "Technologies: React, TypeScript, CSS, Figma"
        ]
    },
    {
        period: "Jun 2022 - Aug 2022",
        title: "Business Development Intern",
        company: "Shriram Automall",
        location: "India",
        description: [
            "Conducted market analysis for e-commerce expansion strategy",
            "Developed customer acquisition strategies and sales pipelines",
            "Created business intelligence reports for stakeholder presentations"
        ]
    }
];

const education = [
    {
        degree: "Bachelor of Engineering (Honors)",
        field: "Mechanical Engineering",
        institution: "Birla Institute of Technology & Science, Pilani",
        campus: "Goa Campus",
        year: "2020 - 2024",
        cgpa: "7.16/10",
        highlights: [
            "Relevant Coursework: Robotics, Control Systems, Machine Design, CAD/CAM",
            "Projects: Autonomous navigation systems, Robotic arm manipulation",
            "Active member of Robotics Club and technical festivals"
        ]
    },
    {
        degree: "Higher Secondary Education",
        field: "Science (PCM)",
        institution: "FIITJEE",
        campus: "Kochi, Kerala",
        year: "2018 - 2020",
        cgpa: "",
        highlights: [
            "JEE Advanced preparation with focus on Physics and Mathematics",
            "Strong foundation in problem-solving and analytical thinking",
            "Participated in various science olympiads and competitions"
        ]
    }
];

export default function About() {
    return (
        <div className="container mx-auto px-6 py-12 space-y-20">
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Darsh Menon",
                        "jobTitle": "Robotics Software Engineer",
                        "worksFor": {
                            "@type": "Organization",
                            "name": "Asimov Robotics"
                        },
                        "alumniOf": {
                            "@type": "CollegeOrUniversity",
                            "name": "Birla Institute of Technology and Science, Pilani"
                        },
                        "url": "https://darshmenon.github.io/",
                        "sameAs": [
                            "https://github.com/darshmenon",
                            "https://linkedin.com/in/darsh-menon",
                            "https://medium.com/@darshmenon02"
                        ],
                        "knowsAbout": ["ROS 2", "Computer Vision", "Autonomous Navigation", "Python", "C++", "Machine Learning"]
                    })
                }}
            />

            {/* Header Section */}
            <section className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
                    ABOUT ME
                </h1>
                <div className="max-w-4xl space-y-4">
                    <p className="text-xl text-gray-300 leading-relaxed">
                        <strong className="text-white">Robotics Software Engineer</strong> at Asimov Robotics, architecting intelligent autonomous systems at the intersection of <span className="text-primary-400">AI, Perception, and Human-Robot Interaction</span>.
                    </p>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        Specializing in <strong className="text-gray-300">ROS 2</strong>, <strong className="text-gray-300">Computer Vision</strong>, and <strong className="text-gray-300">Reinforcement Learning</strong> to bridge the gap between human intent and machine execution. My mission is to democratize humanoid robotics as intelligent companions, leveraging adaptive algorithms to build robots that seamlessly integrate into daily life.
                    </p>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        With a background in Mechanical Engineering from <strong className="text-gray-300">BITS Pilani</strong>, I bring a unique perspective combining hardware understanding with software expertise to create robust robotic solutions.
                    </p>
                </div>
            </section>

            {/* Experience Section */}
            <section>
                <div className="flex items-center gap-4 mb-12">
                    <div className="p-3 bg-primary-500/10 rounded-xl text-primary-400">
                        <BriefcaseIcon className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary-400">Professional Experience</h2>
                </div>

                <div className="relative border-l-2 border-primary-500/30 ml-4 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-primary-400 font-mono font-bold text-sm">
                                    <CalendarIcon className="w-4 h-4" />
                                    {exp.period}
                                </div>
                                <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                                <div className="flex flex-wrap items-center gap-2">
                                    <BriefcaseIcon className="w-4 h-4 text-gray-500" />
                                    <span className="text-xl text-primary-300 font-semibold">{exp.company}</span>
                                    <span className="text-gray-500">•</span>
                                    <div className="flex items-center gap-1 text-gray-400">
                                        <MapPinIcon className="w-4 h-4" />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                                <ul className="text-gray-300 leading-relaxed space-y-2">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-primary-500 mt-1.5">▸</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education Section */}
            <section>
                <div className="flex items-center gap-4 mb-12">
                    <div className="p-3 bg-primary-500/10 rounded-xl text-primary-400">
                        <AcademicCapIcon className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary-400">Education</h2>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {education.map((edu, index) => (
                        <UIPanel key={index} className="h-full">
                            <div className="space-y-4">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                    <div>
                                        <h3 className="text-2xl font-bold text-primary-400">{edu.degree}</h3>
                                        <div className="text-xl font-semibold text-white">{edu.field}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="inline-flex items-center gap-2 text-primary-300 font-mono font-bold">
                                            <CalendarIcon className="w-4 h-4" />
                                            {edu.year}
                                        </div>
                                        {edu.cgpa && <div className="text-gray-400">CGPA: {edu.cgpa}</div>}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-lg text-gray-300">
                                    <MapPinIcon className="w-5 h-5 text-gray-500" />
                                    {edu.institution}, {edu.campus}
                                </div>
                                <ul className="text-gray-400 space-y-1">
                                    {edu.highlights.map((highlight, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircleIcon className="w-5 h-5 text-primary-500 mt-0.5" />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </UIPanel>
                    ))}
                </div>
            </section>

            {/* Skills Summary */}
            <section>
                <h2 className="text-3xl font-bold text-primary-400 mb-8">Core Competencies</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <UIPanel>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-primary-500/10 rounded-lg text-primary-400">
                                <CpuChipIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white">Robotics & Automation</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Expert in ROS 2 ecosystem, including navigation stack, MoveIt 2 for manipulation, Gazebo simulation, and real-time control systems. Experience with industrial robots (UR3/UR5) and mobile platforms.
                        </p>
                    </UIPanel>
                    <UIPanel>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-primary-500/10 rounded-lg text-primary-400">
                                <EyeIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white">Computer Vision & AI</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Proficient in OpenCV, deep learning frameworks (PyTorch, TensorFlow), object detection, RANSAC algorithms, and point cloud processing. Implementing perception pipelines for autonomous systems.
                        </p>
                    </UIPanel>
                    <UIPanel>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-primary-500/10 rounded-lg text-primary-400">
                                <CodeBracketIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white">Software Development</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Full-stack development with Python, C++, TypeScript, React, and Node.js. Strong foundation in system design, API development, database management, and DevOps practices.
                        </p>
                    </UIPanel>
                </div>
            </section>
        </div>
    );
}
