import { Link } from 'react-router';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 backdrop-blur-sm">
                        <span className="text-primary-400 font-mono text-sm font-medium">
                            🚀 Robotics Engineer & Autonomous Systems Developer
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">
                        Building Intelligent <br />
                        <span className="text-primary-500">Autonomous Machines</span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Specializing in ROS 2, Computer Vision, and Reinforcement Learning.
                        Turning complex algorithms into real-world robotic solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/projects"
                            className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-primary-600/25"
                        >
                            View Projects
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium transition-all backdrop-blur-sm"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>

                {/* Tech Stack Ticker */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-20 pt-10 border-t border-white/5"
                >
                    <p className="text-sm text-gray-500 font-mono mb-6 uppercase tracking-widest">Tech Stack</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {['ROS 2', 'Python', 'C++', 'OpenCV', 'PyTorch', 'Gazebo', 'Docker', 'Linux'].map((tech) => (
                            <span key={tech} className="text-xl font-bold text-gray-300 hover:text-primary-400 transition-colors">
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
