"use client";

import { MoveLeft, Ghost } from "lucide-react";

export default function Error() {
    return (
        <div className="min-h-screen bg-[#f0e9e9] flex items-center justify-center p-4 text-gray-800">
            <div className="max-w-md w-full space-y-8 text-center">
                <div className="relative">
                    <Ghost className="h-32 w-32 mx-auto animate-bounce text-black/80" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-8xl font-bold text-primary text-black/90">404</h1>
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-[#181616]">Page Not Found</h2>
                    <p className="text-[#181616]">
                        Oops! It seems you&apos;ve ventured into uncharted territory. The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    </p>
                </div>

                <a
                    href="/"
                    className="inline-flex items-center px-6 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                >
                    <MoveLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </a>
            </div>
        </div>
    );
}