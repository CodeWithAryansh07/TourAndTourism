import { Compass, MapPin, Calendar } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative min-h-screen">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1514222134-b57cbb8ce073?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 px-4 py-24 sm:px-6 lg:px-8 min-h-screen flex items-center">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                            Discover the Magic of
                            <span className="block text-yellow-400 mt-2">Incredible India</span>
                        </h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                            From the majestic Himalayas to the serene backwaters of Kerala,
                            experience the diversity of India's landscapes, culture, and traditions.
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
                            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white">
                                <Compass className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Guided Tours</h3>
                                <p className="text-gray-200">Expert local guides to show you the hidden gems</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white">
                                <MapPin className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Popular Destinations</h3>
                                <p className="text-gray-200">Visit India's most iconic locations</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white">
                                <Calendar className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Custom Packages</h3>
                                <p className="text-gray-200">Tailored travel plans for your needs</p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-500 transition duration-300 cursor-pointer">
                                Explore Packages
                            </button>
                            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white/10 transition duration-300 cursor-pointer">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;