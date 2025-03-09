interface TouristPoint {
    name: string;
    description: string;
    image: string;
    category: 'Historical' | 'Religious' | 'Nature' | 'Adventure' | 'Cultural';
    bestTimeToVisit: string;
    duration: string;
    rating: number;
}

export interface Destination {
    name: string;
    image: string;
    link: string;
    description?: string;
    touristPoints?: TouristPoint[];
}

export const destinations: Destination[] = [
    {
        name: "Andaman & Nicobar Islands",
        image: "/assets/Andaman&Nicobar.jpg",
        link: "/andaman-nicobar-islands",
        description: "A tropical paradise known for its pristine beaches, coral reefs, and rich marine life.",
        touristPoints: [
            {
                name: "Radhanagar Beach",
                description: "Often rated as Asia's best beach, known for its pristine white sands and turquoise waters.",
                image: "https://images.unsplash.com/photo-1589381855733-01bb36156da9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                category: "Nature",
                bestTimeToVisit: "October to May",
                duration: "2-3 hours",
                rating: 4.5
            },
            {
                name: "Cellular Jail",
                description: "Historic colonial prison that once housed Indian freedom fighters.",
                image: "https://images.unsplash.com/photo-1589381855733-01bb36156da9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                category: "Historical",
                bestTimeToVisit: "Year-round",
                duration: "2-3 hours",
                rating: 4.6
            }
        ]
    },
    {
        name: "Andra Pradesh",
        image: "/assets/AndhraPradesh.jpg",
        link: "/andra-pradesh"
    },
    {
        name: "Arunachal Pradesh",
        image: "/assets/Arunachal.jpg",
        link: "/arunachal-pradesh"
    },
    {
        name: "Assam",
        image: "/assets/Assam.jpg",
        link: "/assam"
    },
    {
        name: "Bihar",
        image: "/assets/Bihar.jpeg",
        link: "/bihar"
    },
    {
        name: "Chandigarh",
        image: "/assets/Chandigarh.jpg",
        link: "/chandigarh"
    },
    {
        name: "Chhattisgarh",
        image: "/assets/Chhattisgarh.jpg",
        link: "/chhattisgarh"
    },
    {
        name: "Dadra & Nagar Haveli",
        image: "/assets/Dadra&NagarHaveli.jpg",
        link: "/dadra-nagar-haveli"
    },
    {
        name: "Daman & Diu",
        image: "/assets/Daman&Diu.jpg",
        link: "/daman-diu"
    },
    {
        name: "Goa",
        image: "/assets/Goa.jpg",
        link: "/goa",
    },
    {
        name: "Gujarat",
        image: "/assets/Gujarat.jpg",
        link: "/gujarat"
    },
    {
        name: "Haryana",
        image: "/assets/Haryana.jpg",
        link: "/haryana"
    },
    {
        name: "Himachal Pradesh",
        image: "/assets/HimachalPradesh.jpg",
        link: "/himachal-pradesh"
    },
    {
        name: "Jharakhand",
        image: "/assets/Jharkhand.jpg",
        link: "/jharkhand"
    },
    {
        name: "Karnataka",
        image: "/assets/Karnataka.jpg",
        link: "/karnataka"
    },
    {
        name: "Kerala",
        image: "/assets/Kerala.jpg",
        link: "/kerala"
    },
    {
        name: "Lakshadweep",
        image: "/assets/Lakshadweep.jpg",
        link: "/lakshadweep"
    },
    {
        name: "Madhya Pradesh",
        image: "/assets/MadhyaPradesh.jpg",
        link: "/madhya-pradesh"
    },
    {
        name: "Maharashtra",
        image: "/assets/Maharashtra.jpg",
        link: "/maharashtra"
    },
    {
        name: "Manipur",
        image: "/assets/Manipur.jpg",
        link: "/manipur"
    },
    {
        name: "Meghalaya",
        image: "/assets/Meghalaya.jpg",
        link: "/meghalaya"
    },
    {
        name: "Mizoram",
        image: "/assets/Mizoram.jpg",
        link: "/mizoram"
    },
    {
        name: "Nagaland",
        image: "/assets/Nagaland.jpg",
        link: "/nagaland"
    },
    {
        name: "Odisha",
        image: "/assets/Odisha.jpg",
        link: "/odisha"
    },
    {
        name: "Puducherry",
        image: "/assets/Puducherry.jpg",
        link: "/puducherry"
    },
    {
        name: "Punjab",
        image: "/assets/Punjab.jpg",
        link: "/punjab"
    },
    {
        name: "Rajasthan",
        image: "/assets/Rajasthan.jpg",
        link: "/rajasthan"
    },
    {
        name: "Sikkim",
        image: "/assets/Sikkim.jpg",
        link: "/sikkim"
    },
    {
        name: "Tamil Nadu",
        image: "/assets/TamilNadu.jpg",
        link: "/tamil-nadu"
    },
    {
        name: "Telangana",
        image: "/assets/Telangana.jpg",
        link: "/telangana"
    },
    {
        name: "Tripura",
        image: "/assets/Tripura.jpg",
        link: "/tripura"
    },
    {
        name: "Uttar Pradesh",
        image: "/assets/UttarPradesh.jpg",
        link: "/uttar-pradesh"
    },
    {
        name: "Uttarakhand",
        image: "/assets/Uttarakhand.jpg",
        link: "/uttarakhand"
    },
    {
        name: "West Bengal",
        image: "/assets/WestBengal.jpg",
        link: "/WestBengal"
    },

]