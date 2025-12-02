import { Link } from 'react-router';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="text-2xl font-bold font-mono tracking-tighter mb-4 block">
                            DARSH<span className="text-primary-500">.DEV</span>
                        </Link>
                        <p className="text-gray-400 max-w-md">
                            Robotics Engineer specializing in autonomous systems, ROS 2, and AI.
                            Building the future of intelligent machines.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-gray-400 hover:text-primary-500 transition-colors">About</Link></li>
                            <li><Link to="/projects" className="text-gray-400 hover:text-primary-500 transition-colors">Projects</Link></li>
                            <li><Link to="/blog" className="text-gray-400 hover:text-primary-500 transition-colors">Blog</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-primary-500 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Connect</h3>
                        <ul className="space-y-2">
                            <li><a href="https://github.com/darshmenon" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">GitHub</a></li>
                            <li><a href="https://linkedin.com/in/darsh-menon" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">LinkedIn</a></li>
                            <li><a href="https://medium.com/@darshmenon02" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">Medium</a></li>
                            <li><a href="mailto:darshmenon@example.com" className="text-gray-400 hover:text-primary-500 transition-colors">Email</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Darsh Menon. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-sm font-mono">
                        Built with Remix & Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
}
