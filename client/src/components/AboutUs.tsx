// import React from 'react';
import { Users, Globe, Award, Heart } from 'lucide-react';

const AboutUs = () => {
    const stats = [
        { icon: Users, label: 'Happy Travelers', value: '50,000+' },
        { icon: Globe, label: 'Destinations', value: '100+' },
        { icon: Award, label: 'Years Experience', value: '15+' },
        { icon: Heart, label: 'Positive Reviews', value: '25,000+' }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[60vh]">
                <img
                    src="/assets/IndianTourism.jpg"
                    alt="India Tourism"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-4">About TravelIndia</h1>
                        <p className="text-xl max-w-2xl mx-auto">Discover the magic of India with us - your trusted partner in creating unforgettable travel experiences.</p>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {stats.map(({ icon: Icon, label, value }) => (
                        <div key={label} className="bg-white rounded-lg p-6 text-center shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                            <Icon className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                            <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
                            <div className="text-gray-600">{label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Story Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                            <p className="text-gray-600 mb-4">
                                Founded in 2010, TravelIndia has been at the forefront of showcasing India's rich cultural heritage, stunning landscapes, and incredible experiences to travelers from around the world.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Our mission is to provide authentic, immersive travel experiences that connect visitors with the heart and soul of India, while promoting sustainable and responsible tourism.
                            </p>
                            <p className="text-gray-600">
                                With a team of experienced travel experts and local guides, we ensure that every journey with us is not just a trip, but a life-changing adventure.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Traditional Culture"
                                className="rounded-lg shadow-lg"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Modern India"
                                className="rounded-lg shadow-lg mt-8"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;