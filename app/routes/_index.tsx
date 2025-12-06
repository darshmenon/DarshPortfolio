import type { MetaFunction } from "react-router";
import { Hero } from "~/components/sections/Hero";
import { UIPanel } from "~/components/ui/UIPanel";
import { projects } from "~/data/projects";
import { skillCategories } from "~/data/skills";
import { Link } from "react-router";

export const meta: MetaFunction = () => {
    return [
        { title: "Darsh Menon | Robotics Software Engineer | ROS 2 Developer | BITS Pilani" },
        {
            name: "description",
            content: "Darsh Menon - Robotics Software Engineer at Asimov Robotics, Kochi, India. Expert in ROS 2, Computer Vision, Autonomous Navigation, SLAM, MoveIt 2, PyTorch, OpenCV, and Reinforcement Learning. BITS Pilani Mechanical Engineering graduate. Building intelligent autonomous systems for humanoid robots and industrial automation."
        },
        { name: "keywords", content: "Darsh Menon, Robotics Engineer, ROS 2 Developer, Asimov Robotics, BITS Pilani, Computer Vision Engineer, Autonomous Navigation, SLAM, MoveIt 2, Python Developer, C++ Developer, Gazebo Simulation, PyTorch, OpenCV, Machine Learning Engineer, Reinforcement Learning, India, Kochi, Kerala, Robotics Jobs India, Humanoid Robots, Industrial Automation, Pick and Place Robot, Mobile Robot Navigation" },
        { name: "author", content: "Darsh Menon" },
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
        { name: "googlebot", content: "index, follow" },
        // Open Graph
        { property: "og:title", content: "Darsh Menon | Robotics Software Engineer | ROS 2 Expert" },
        { property: "og:description", content: "Robotics Software Engineer at Asimov Robotics. Expert in ROS 2, Computer Vision, SLAM, and Autonomous Navigation. BITS Pilani graduate building intelligent autonomous systems." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://darshmenon.github.io/" },
        { property: "og:site_name", content: "Darsh Menon Portfolio" },
        { property: "og:locale", content: "en_US" },
        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@darsh_menon" },
        { name: "twitter:creator", content: "@darsh_menon" },
        { name: "twitter:title", content: "Darsh Menon | Robotics Software Engineer" },
        { name: "twitter:description", content: "Robotics Software Engineer at Asimov Robotics. Expert in ROS 2, Computer Vision, and Autonomous Navigation." },
        // Canonical
        { tagName: "link", rel: "canonical", href: "https://darshmenon.github.io/" },
    ];
};

import { UserIcon, BriefcaseIcon, EnvelopeIcon, CpuChipIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

// Helper function to pick an icon based on tags
const getProjectIcon = (tags: string[]) => {
    if (tags.some(t => t.includes('ROS') || t.includes('Robotics'))) return <CpuChipIcon className="w-8 h-8" />;
    if (tags.some(t => t.includes('React') || t.includes('Web'))) return <CodeBracketIcon className="w-8 h-8" />;
    return <BriefcaseIcon className="w-8 h-8" />;
};

export default function Index() {
    return (
        <div className="min-h-screen">
            {/* JSON-LD Structured Data - Person */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Darsh Menon",
                        "url": "https://darshmenon.github.io/",
                        "jobTitle": "Robotics Software Engineer",
                        "worksFor": {
                            "@type": "Organization",
                            "name": "Asimov Robotics",
                            "url": "https://asimovrobotics.com"
                        },
                        "alumniOf": {
                            "@type": "CollegeOrUniversity",
                            "name": "Birla Institute of Technology and Science, Pilani",
                            "sameAs": "https://www.bits-pilani.ac.in/"
                        },
                        "knowsAbout": [
                            "ROS 2",
                            "Robotics",
                            "Computer Vision",
                            "Autonomous Navigation",
                            "Python",
                            "C++",
                            "Machine Learning",
                            "Reinforcement Learning",
                            "SLAM",
                            "MoveIt 2",
                            "Gazebo",
                            "OpenCV",
                            "PyTorch"
                        ],
                        "sameAs": [
                            "https://github.com/darshmenon",
                            "https://linkedin.com/in/darsh-menon",
                            "https://medium.com/@darshmenon02",
                            "https://x.com/darsh_menon"
                        ],
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Kochi",
                            "addressRegion": "Kerala",
                            "addressCountry": "India"
                        }
                    })
                }}
            />

            {/* BreadcrumbList Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://darshmenon.github.io/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "About",
                                "item": "https://darshmenon.github.io/about"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Projects",
                                "item": "https://darshmenon.github.io/projects"
                            },
                            {
                                "@type": "ListItem",
                                "position": 4,
                                "name": "Contact",
                                "item": "https://darshmenon.github.io/contact"
                            },
                            {
                                "@type": "ListItem",
                                "position": 5,
                                "name": "RoboCloud Hub",
                                "item": "https://darshmenon.github.io/robocloud-hub"
                            }
                        ]
                    })
                }}
            />

            {/* FAQPage Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What is Darsh Menon's expertise in robotics?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Darsh Menon specializes in ROS 2, Computer Vision, Autonomous Navigation, SLAM, MoveIt 2, and Reinforcement Learning. He works as a Robotics Software Engineer at Asimov Robotics, developing multi-robot navigation and perception systems."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Where did Darsh Menon study?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Darsh Menon graduated from Birla Institute of Technology and Science (BITS) Pilani with a Bachelor of Engineering (Honors) in Mechanical Engineering in 2024."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What programming languages does Darsh Menon use?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Darsh Menon is proficient in Python and C++ for robotics development, along with TypeScript, React, and Node.js for web development. He also works with frameworks like PyTorch, OpenCV, and ROS 2."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What projects has Darsh Menon worked on?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Darsh has worked on various robotics projects including autonomous pick-and-place systems, RL-based bipedal walking robots, mobile robot navigation with SLAM, and RoboCloud Hub - a comprehensive robotics learning platform."
                                }
                            }
                        ]
                    })
                }}
            />

            {/* WebSite Schema with SearchAction */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Darsh Menon Portfolio",
                        "alternateName": "Darsh Menon - Robotics Software Engineer",
                        "url": "https://darshmenon.github.io/",
                        "description": "Portfolio of Darsh Menon, a Robotics Software Engineer specializing in ROS 2, Computer Vision, and Autonomous Navigation.",
                        "inLanguage": "en-US",
                        "author": {
                            "@type": "Person",
                            "name": "Darsh Menon"
                        },
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": {
                                "@type": "EntryPoint",
                                "urlTemplate": "https://darshmenon.github.io/?q={search_term_string}"
                            },
                            "query-input": "required name=search_term_string"
                        }
                    })
                }}
            />

            <Hero />

            <div className="container mx-auto px-6 py-20 space-y-32">
                {/* Technical Expertise Section */}
                <section>
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent flex-1" />
                        <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            Technical Expertise
                        </h2>
                        <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent flex-1" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skillCategories.map((category) => (
                            <UIPanel key={category.title} title={category.title} className="h-full hover:border-primary-500/50 transition-colors">
                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 bg-primary-500/10 border border-primary-500/20 rounded-lg text-primary-300 text-sm font-medium hover:bg-primary-500/20 transition-colors cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </UIPanel>
                        ))}
                    </div>
                </section>

                {/* Featured Projects Section */}
                <section>
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent flex-1" />
                        <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            Featured Projects
                        </h2>
                        <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent flex-1" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {projects.slice(0, 4).map((project) => (
                            <UIPanel key={project.id} noPadding className="group h-full flex flex-col">
                                <div className="p-8 flex-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-primary-500/10 text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                                                {getProjectIcon(project.tags)}
                                            </div>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>

                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="text-xs font-mono text-primary-300 bg-primary-500/10 px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="px-8 py-4 bg-white/5 border-t border-white/5 flex justify-end">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium text-white hover:text-primary-400 transition-colors flex items-center gap-2"
                                    >
                                        View Project <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </UIPanel>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            to="/projects"
                            className="inline-flex items-center justify-center px-8 py-3 border border-white/10 rounded-full text-sm font-medium text-white hover:bg-white/5 transition-colors"
                        >
                            View All Projects
                        </Link>
                    </div>
                </section>

                {/* Quick Links Section for SEO */}
                <section>
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent flex-1" />
                        <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            Quick Links
                        </h2>
                        <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent flex-1" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Link
                            to="/about"
                            className="p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-center transition-all hover:border-primary-500/50 group flex flex-col items-center"
                        >
                            <div className="p-3 bg-primary-500/10 rounded-full text-primary-400 mb-4 group-hover:scale-110 transition-transform">
                                <UserIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white group-hover:text-primary-400 mb-2">About Me</h3>
                            <p className="text-sm text-gray-400">Experience & Education</p>
                        </Link>
                        <Link
                            to="/projects"
                            className="p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-center transition-all hover:border-primary-500/50 group flex flex-col items-center"
                        >
                            <div className="p-3 bg-primary-500/10 rounded-full text-primary-400 mb-4 group-hover:scale-110 transition-transform">
                                <BriefcaseIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white group-hover:text-primary-400 mb-2">Projects</h3>
                            <p className="text-sm text-gray-400">ROS 2 & Robotics Work</p>
                        </Link>
                        <Link
                            to="/contact"
                            className="p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-center transition-all hover:border-primary-500/50 group flex flex-col items-center"
                        >
                            <div className="p-3 bg-primary-500/10 rounded-full text-primary-400 mb-4 group-hover:scale-110 transition-transform">
                                <EnvelopeIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white group-hover:text-primary-400 mb-2">Contact</h3>
                            <p className="text-sm text-gray-400">Get in Touch</p>
                        </Link>
                        <Link
                            to="/robocloud-hub"
                            className="p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-center transition-all hover:border-primary-500/50 group flex flex-col items-center"
                        >
                            <div className="p-3 bg-primary-500/10 rounded-full text-primary-400 mb-4 group-hover:scale-110 transition-transform">
                                <CpuChipIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white group-hover:text-primary-400 mb-2">RoboCloud</h3>
                            <p className="text-sm text-gray-400">Robotics Learning Platform</p>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
