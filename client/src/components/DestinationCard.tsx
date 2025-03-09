import React from "react";
import { Star, Clock, Calendar } from "lucide-react";

export interface DestinationPoint {
    name: string;
    image: string;
    category: string;
    description: string;
    rating: number;
    duration: string;
    bestTimeToVisit: string;
}

interface DestinationCardProps {
    point: DestinationPoint;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ point }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
                src={point.image}
                alt={point.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{point.name}</h3>
                    <span className="inline-flex items-center bg-blue-100 text-blue-800 text-sm px-2.5 py-0.5 rounded-full">
                        {point.category}
                    </span>
                </div>
                <p className="text-gray-600 mb-4">{point.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{point.rating.toFixed(1)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{point.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{point.bestTimeToVisit}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationCard;
