import { Link, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import { cn } from '~/utils/cn';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'RoboCloud', href: '/robocloud-hub' },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={cn(
            'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
            scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
        )}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold font-mono tracking-tighter hover:text-primary-500 transition-colors">
                    DARSH<span className="text-primary-500">.DEV</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className={cn(
                                'text-sm font-medium transition-colors hover:text-primary-500',
                                location.pathname === link.href ? 'text-primary-500' : 'text-gray-300'
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-full text-sm font-medium transition-all transform hover:scale-105"
                    >
                        Hire Me
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <XMarkIcon className="w-8 h-8" />
                    ) : (
                        <Bars3Icon className="w-8 h-8" />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 py-8 px-6 flex flex-col gap-6 animate-fade-in">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={cn(
                                'text-lg font-medium transition-colors hover:text-primary-500',
                                location.pathname === link.href ? 'text-primary-500' : 'text-gray-300'
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-5 py-3 bg-primary-600 text-center text-white rounded-lg text-lg font-medium"
                    >
                        Hire Me
                    </Link>
                </div>
            )}
        </nav>
    );
}
