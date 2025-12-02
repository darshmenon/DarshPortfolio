import type { MetaFunction } from "react-router";
import { Hero } from "~/components/sections/Hero";

export const meta: MetaFunction = () => {
    return [
        { title: "Darsh Menon - ROS 2 Robotics Engineer | Autonomous Systems Developer" },
        {
            name: "description",
            content: "Darsh Menon - ROS 2 Robotics Engineer specializing in autonomous navigation, computer vision, and intelligent systems. BITS Pilani graduate building the future of robotics."
        },
        { name: "keywords", content: "ROS 2, Robotics Engineer, Autonomous Navigation, Computer Vision, Darsh Menon, BITS Pilani" },
        // Open Graph
        { property: "og:title", content: "Darsh Menon - ROS 2 Robotics Engineer" },
        { property: "og:description", content: "Robotics Engineer specializing in autonomous systems and ROS 2 development" },
        { property: "og:type", content: "website" },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Darsh Menon - ROS 2 Robotics Engineer" },
    ];
};

export default function Index() {
    return (
        <div className="min-h-screen">
            <Hero />

            {/* Placeholder for other sections */}
            <section className="py-20 bg-black/30">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-8">More Sections Coming Soon</h2>
                    <p className="text-gray-400">
                        Technical Expertise, Featured Projects, and Blog highlights will be added here.
                    </p>
                </div>
            </section>
        </div>
    );
}
