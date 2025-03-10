import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import DestinationCard, { DestinationPoint } from './DestinationCard';

const monuments = [
    {
        image: "/assets/TajMahal.jpg",
        title: "Taj Mahal",
        description: "Symbol of eternal love, built by Shah Jahan"
    },
    {
        image: "https://images.unsplash.com/photo-1650530777057-3a7dbc24bf6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGF3YSUyME1haGFsfGVufDB8fDB8fHww",
        title: "Hawa Mahal",
        description: "Palace of Winds in the Pink City of Jaipur"
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmVkJTIwRm9ydHxlbnwwfHwwfHx8MA%3D%3D",
        title: "Red Fort",
        description: "Historic fortress in the heart of Delhi"
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1697730331435-92e07494db43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R29sZGVuJTIwVGVtcGxlfGVufDB8fDB8fHww",
        title: "Golden Temple",
        description: "Sacred Sikh shrine in Amritsar"
    },
    {
        image: "https://images.unsplash.com/photo-1600112356915-089abb8fc71a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TXlzb3JlJTIwUGFsYWNlfGVufDB8fDB8fHww",
        title: "Mysore Palace",
        description: "Royal residence and seat of the Wodeyars"
    },
    {
        image: "https://images.unsplash.com/photo-1677211352662-30e7775c7ce8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8S29uYXJrJTIwU3VuJTIwVGVtcGxlfGVufDB8fDB8fHww",
        title: "Konark Sun Temple",
        description: "Ancient temple dedicated to the Sun God"
    },
    {
        image: "https://images.unsplash.com/photo-1600080077823-a44592513861?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VmljdG9yaWElMjBNZW1vcmlhbHxlbnwwfHwwfHx8MA%3D%3D",
        title: "Victoria Memorial",
        description: "Magnificent marble building in Kolkata"
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1697729588019-20a1f5a325d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QWphbnRhJTIwQ2F2ZXN8ZW58MHx8MHx8fDA%3D",
        title: "Ajanta Caves",
        description: "Ancient Buddhist cave monuments"
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1697730320983-f99aab252a44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UXV0dWIlMjBNaW5hcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Qutub Minar",
        description: "UNESCO World Heritage site in Delhi"
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1661915849493-aba3cb23db5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SGFtcGklMjBSdWluc3xlbnwwfHwwfHx8MA%3D%3D",
        title: "Hampi Ruins",
        description: "Ancient archaeological site in Karnataka"
    }
];

const sampleDestinations: DestinationPoint[] = [
    {
        name: "Taj Mahal",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
        category: "Historical",
        description: "One of the seven wonders of the world, a symbol of eternal love.",
        rating: 4.9,
        duration: "2-3 hours",
        bestTimeToVisit: "October to March"
    },
    {
        name: "Varanasi Ghats",
        image: "https://images.unsplash.com/photo-1706186839147-0d708602587b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VmFyYW5hc2klMjBHaGF0c3xlbnwwfHwwfHx8MA%3D%3D",
        category: "Religious",
        description: "Sacred ghats along the Ganges River with ancient rituals and ceremonies.",
        rating: 4.7,
        duration: "4-5 hours",
        bestTimeToVisit: "November to March"
    }
];

const categories = ['All', 'Historical', 'Religious', 'Nature', 'Adventure', 'Cultural'];

const Destinations = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % monuments.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % monuments.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + monuments.length) % monuments.length);
    };

    const filteredDestinations = selectedCategory === 'All'
        ? sampleDestinations
        : sampleDestinations.filter(dest => dest.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Carousel Section */}
            <div className="relative h-screen">
                {monuments.map((monument, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <img
                            src={monument.image}
                            alt={monument.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40">
                            <div className="absolute bottom-32 left-0 right-0 text-center text-white">
                                <h2 className="text-4xl font-bold mb-4">{monument.title}</h2>
                                <p className="text-xl">{monument.description}</p>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-colors"
                >
                    <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-colors"
                >
                    <ChevronRight className="w-8 h-8" />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-2">
                    {monuments.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                                index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Destinations Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="flex gap-8">
                    {/* Sidebar Filters */}
                    <div className="w-64 flex-shrink-0">
                        <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                            <div className="flex items-center gap-2 mb-6">
                                <Filter className="w-5 h-5" />
                                <h2 className="text-lg font-semibold">Categories</h2>
                            </div>
                            <div className="space-y-2">
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                                            selectedCategory === category
                                                ? 'bg-blue-500 text-white'
                                                : 'hover:bg-gray-100'
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Destinations Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredDestinations.map((destination) => (
                                <DestinationCard key={destination.name} point={destination} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destinations;