import type { MetaFunction } from "react-router";
import { UIPanel } from "~/components/ui/UIPanel";
import {
    BookOpenIcon,
    ChatBubbleLeftRightIcon,
    BriefcaseIcon,
    NewspaperIcon,
    ShoppingCartIcon,
    RocketLaunchIcon,
    UsersIcon,
    AcademicCapIcon,
    QuestionMarkCircleIcon,
    SignalIcon,
    CpuChipIcon
} from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
    return [
        { title: "RoboCloud Hub | Robotics Learning Platform | Darsh Menon" },
        {
            name: "description",
            content: "RoboCloud Hub - A comprehensive robotics ecosystem platform featuring learning paths, community forums, job board, and marketplace for robotics engineers and enthusiasts. Built by Darsh Menon."
        },
        { name: "keywords", content: "RoboCloud Hub, Robotics Platform, Robotics Jobs, Robotics Learning, Robotics Community, ROS 2, Autonomous Systems, Darsh Menon" },
        // Open Graph
        { property: "og:title", content: "RoboCloud Hub | Robotics Learning Platform" },
        { property: "og:description", content: "A comprehensive robotics ecosystem platform featuring learning paths, community forums, job board, and marketplace." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://darshmenon.github.io/robocloud-hub" },
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: "RoboCloud Hub | Robotics Learning Platform" },
        { name: "twitter:description", content: "A comprehensive robotics ecosystem platform featuring learning paths, community forums, and job board." },
    ];
};

const features = [
    {
        title: "Learning Paths",
        description: "Interactive lessons, structured courses, and tutorials for mastering ROS 2, DSA, computer vision, and autonomous navigation.",
        status: "Live",
        icon: BookOpenIcon
    },
    {
        title: "Community Forums",
        description: "Connect with robotics engineers worldwide. Share projects, ask questions, and collaborate on cutting-edge research.",
        status: "Live",
        icon: ChatBubbleLeftRightIcon
    },
    {
        title: "Job Board",
        description: "Find the latest opportunities in robotics, automation, and autonomous systems from top companies worldwide.",
        status: "Coming Soon",
        icon: BriefcaseIcon
    },
    {
        title: "News Feed",
        description: "Stay updated with the latest breakthroughs, research papers, and industry news in the robotics field.",
        status: "Live",
        icon: NewspaperIcon
    },
    {
        title: "Marketplace",
        description: "Buy and sell robotics parts, sensors, actuators, and development kits from trusted sellers.",
        status: "Coming Soon",
        icon: ShoppingCartIcon
    },
    {
        title: "Project Showcase",
        description: "Showcase your robotics projects to the community and get feedback from experienced engineers.",
        status: "Live",
        icon: RocketLaunchIcon
    }
];

export default function RoboCloudHub() {
    return (
        <div className="container mx-auto px-6 py-12 space-y-12">
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebApplication",
                        "name": "RoboCloud Hub",
                        "description": "A comprehensive robotics ecosystem platform featuring learning paths, community forums, job board, and marketplace",
                        "url": "https://robocloud-dashboard.vercel.app/",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Web",
                        "author": {
                            "@type": "Person",
                            "name": "Darsh Menon"
                        },
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD"
                        }
                    })
                }}
            />

            <section className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-primary-500/10 rounded-xl text-primary-400">
                                <CpuChipIcon className="w-10 h-10" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
                                ROBOCLOUD HUB
                            </h1>
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium self-start md:self-auto">
                            <SignalIcon className="w-4 h-4" />
                            Live
                        </span>
                    </div>

                    <a
                        href="https://robocloud-dashboard.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full text-base font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-primary-500/25 self-start md:self-auto"
                    >
                        Visit RoboCloud Hub <span className="ml-2">→</span>
                    </a>
                </div>
                <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                    The Future of Robotics Collaboration. A unified platform for learning, networking, and career growth
                    in the robotics industry. Built with React, Node.js, and powered by a passionate community.
                </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature) => (
                    <UIPanel key={feature.title} className="h-full">
                        <div className="flex items-start justify-between mb-4">
                            <feature.icon className="w-8 h-8 text-primary-400" />
                            <span className={`px-2 py-1 rounded text-xs font-medium ${feature.status === 'Live'
                                ? 'bg-green-500/20 text-green-400'
                                : 'bg-yellow-500/20 text-yellow-400'
                                }`}>
                                {feature.status}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {feature.description}
                        </p>
                    </UIPanel>
                ))}
            </div>

            {/* Stats Section */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { label: "Active Users", value: "1,000+", icon: UsersIcon },
                    { label: "Robotics & DSA Modules", value: "250+", icon: AcademicCapIcon },
                    { label: "Community Posts", value: "500+", icon: ChatBubbleLeftRightIcon },
                    { label: "Quiz Questions", value: "1,000+", icon: QuestionMarkCircleIcon }
                ].map((stat) => (
                    <UIPanel key={stat.label} className="text-center">
                        <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary-400" />
                        <div className="text-2xl font-bold text-primary-400">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                    </UIPanel>
                ))}
            </section>

            <section className="mt-12 text-center space-y-6">
                <p className="text-gray-400 max-w-2xl mx-auto">
                    RoboCloud Hub is my passion project to create a comprehensive ecosystem for robotics enthusiasts,
                    students, and professionals. Join our growing community today!
                </p>
            </section>
        </div>
    );
}
