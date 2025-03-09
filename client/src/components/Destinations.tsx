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
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
        title: "Hawa Mahal",
        description: "Palace of Winds in the Pink City of Jaipur"
    },
    {
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
        title: "Red Fort",
        description: "Historic fortress in the heart of Delhi"
    },
    {
        image: "https://images.unsplash.com/photo-1514539079130-25950c84af65?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
        title: "Golden Temple",
        description: "Sacred Sikh shrine in Amritsar"
    },
    {
        image: "https://images.unsplash.com/photo-1621996659490-3275b4d0d951?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
        title: "Mysore Palace",
        description: "Royal residence and seat of the Wodeyars"
    },
    {
        image: "https://images.unsplash.com/photo-1624809536054-f8c6a0027734?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
        title: "Konark Sun Temple",
        description: "Ancient temple dedicated to the Sun God"
    },
    {
        image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
        title: "Victoria Memorial",
        description: "Magnificent marble building in Kolkata"
    },
    {
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
        title: "Ajanta Caves",
        description: "Ancient Buddhist cave monuments"
    },
    {
        image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
        title: "Qutub Minar",
        description: "UNESCO World Heritage site in Delhi"
    },
    {
        image: "https://images.unsplash.com/photo-1592635196078-a4bc8e9f4c01?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
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
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
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