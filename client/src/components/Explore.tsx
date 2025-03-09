import { destinations } from "../constants"

// interface Destination {
//     name: string;
//     image: string;
//     link: string;
// }

// const destinations: Destination[] = [
//     {
//         name: "Rajasthan",
//         image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         link: "/rajasthan"
//     },
//     {
//         name: "Kerala",
//         image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         link: "/kerala"
//     },
//     {
//         name: "Goa",
//         image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         link: "/goa"
//     },
//     {
//         name: "Tamil Nadu",
//         image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         link: "/tamil-nadu"
//     },
//     {
//         name: "Himachal Pradesh",
//         image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         link: "/himachal-pradesh"
//     },
//     {
//         name: "Gujarat",
//         image: "https://images.unsplash.com/photo-1627301517152-11505d049286?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         link: "/gujarat"
//     },
//     {
//         name: "Maharashtra",
//         image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         link: "/maharashtra"
//     },
//     {
//         name: "Karnataka",
//         image: "https://images.unsplash.com/photo-1600100397608-f010f420a025?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         link: "/karnataka"
//     },
//     {
//         name: "Uttarakhand",
//         image: "https://images.unsplash.com/photo-1626714356947-8d695a27c1c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         link: "/uttarakhand"
//     },
//     {
//         name: "Ladakh",
//         image: "https://images.unsplash.com/photo-1589881133825-bbb3b9471b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         link: "/ladakh"
//     },
//     {
//         name: "West Bengal",
//         image: "https://images.unsplash.com/photo-1558431382-27e303142255?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         link: "/west-bengal"
//     },
//     {
//         name: "Andaman & Nicobar",
//         image: "https://images.unsplash.com/photo-1589381855733-01bb36156da9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         link: "/andaman-nicobar"
//     }
// ];

const Explore = () => {
    return (
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore India</h2>
                    <p className="text-xl text-gray-600">Discover the diverse beauty of India's states and union territories</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {destinations.map((destination) => (
                        <a
                            key={destination.name}
                            href={`/destination${destination.link}`}
                            className="group relative block h-72 overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                        >
                            <img
                                src={destination.image}
                                alt={destination.name}
                                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-xl font-semibold w-full text-center">{destination.name}</h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Explore;