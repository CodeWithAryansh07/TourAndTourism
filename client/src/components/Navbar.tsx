import { useState, useEffect } from 'react';
import {  Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();

    const navbarUpdate = location.pathname === '/about' ? true : location.pathname === '/contact' ? true : false;

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50  transition-all duration-300 ${
            isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/5 py-4 backdrop-blur-sm'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        {/* <MapPin className={`w-8 h-8 ${isScrolled ? 'text-yellow-500' : 'text-yellow-400'}`} />
                        <span className={`ml-2 text-2xl font-bold ${
                            isScrolled ? 'text-gray-800' : 'text-white'
                        }`}>
                            TravelIndia
                        </span> */}
                        <img
                            src="/assets/logo.png"
                            alt="TravelIndia"
                            className="h-10"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="/" className={`text-lg font-medium transition-colors ${
                            isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                        }`}>
                            Home
                        </a>
                        <a href="/destinations" className={`text-lg font-medium transition-colors ${
                            isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                        }`}>
                            Destinations
                        </a>
                        <a href="/about" className={`text-lg font-medium transition-colors ${
                            isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                        }`}>
                            About
                        </a>
                        <a href="/contact" className={`text-lg font-medium transition-colors ${
                            isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                        }`}>
                            Contact
                        </a>
                        <button className={`px-6 py-2 rounded-full font-medium transition-colors cursor-pointer ${
                            isScrolled
                                ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                                : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                        }`}>
                            Login
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`p-2 rounded-md ${
                                isScrolled ? 'text-gray-600' : 'text-white'
                            }`}
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className={`px-2 pt-2 pb-3 space-y-1 ${
                            isScrolled ? 'bg-white' : 'bg-black/50 backdrop-blur-md'
                        }`}>
                            <a
                                href="/"
                                className={`block px-3 py-2 rounded-md text-base font-medium ${
                                    isScrolled
                                        ? 'text-gray-700 hover:bg-gray-100'
                                        : 'text-white hover:bg-white/10'
                                }`}
                            >
                                Home
                            </a>
                            <a
                                href="/destinations"
                                className={`block px-3 py-2 rounded-md text-base font-medium ${
                                    isScrolled
                                        ? 'text-gray-700 hover:bg-gray-100'
                                        : 'text-white hover:bg-white/10'
                                }`}
                            >
                                Destinations
                            </a>
                            <a
                                href="/about"
                                className={`block px-3 py-2 rounded-md text-base font-medium ${
                                    isScrolled
                                        ? 'text-gray-700 hover:bg-gray-100'
                                        : 'text-white hover:bg-white/10'
                                }`}
                            >
                                About
                            </a>
                            <a
                                href="/contact"
                                className={`block px-3 py-2 rounded-md text-base font-medium ${
                                    isScrolled
                                        ? 'text-gray-700 hover:bg-gray-100'
                                        : 'text-white hover:bg-white/10'
                                }`}
                            >
                                Contact
                            </a>
                            <button
                                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                                    isScrolled
                                        ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                                        : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;