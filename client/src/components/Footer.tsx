import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

const Footer = () => {
    return (
        <div className="flex flex-col w-full bg-gray-800 text-white py-20 px-25">
            <div className="flex items-center justify-between">
                <div className="text-3xl text-white w-1/2 pb-8">
                    SignUp for the latest news and insights from Passport to Adventure...
                </div>
                <div className="flex space-x-4 pr-10">
                    <div className="flex items-center space-x-2 bg-white/30 p-2 rounded-lg pr-10">
                        <Mail className="cursor-pointer" />
                        <input type="text" placeholder="Enter you email address" className="border-none rounded-lg p-2 outline-none focus:ring-0" />
                    </div>
                    <button className="bg-blue-600 text-white p-2 px-4 text-lg rounded-lg cursor-pointer">Subscribe</button>
                </div>
            </div>
            <div className="w-full bg-white/50 h-0.5 my-10">
            </div>
            <div className="w-full h-auto grid grid-cols-3 py-4 gap-x-6">
                <div className="flex flex-col space-y-5">
                    <h1 className="text-2xl font-semibold">Passport to Adventure</h1>
                    <p className="text-md py-2">Your gateway to unforgettable travel experiences worldwide. Explore destinations, book tours, and enjoy your adventures with us.</p>
                    <div className="flex space-x-4">
                        <Facebook className="cursor-pointer" />
                        <Twitter className="cursor-pointer" />
                        <Instagram className="cursor-pointer" />
                        <Linkedin className="cursor-pointer" />
                    </div>
                </div>
                <div className="flex flex-col space-y-5 pl-7">
                    <div className="text-2xl font-semibold">
                        Important Links
                    </div>
                    <div className="flex flex-col space-y-2 text-lg">
                        <a 
                        href="/about"
                        className="cursor-pointer" >
                            About us
                        </a>
                        <a href="/contact" className="cursor-pointer">
                            Contact us
                        </a>
                        <div className="cursor-pointer">
                            FAQ
                        </div>
                        {/* <div className="cursor-pointer">
                            Blog
                        </div> */}
                    </div>
                </div>
                <div className="flex flex-col space-y-5 pl-7">
                    <div className="text-2xl font-semibold">
                        Contact Info
                    </div>
                    <div className="flex space-y-6 flex-col">
                        <div className="flex items-center space-x-2">
                            <Mail />
                            <div>
                                infoxenotech@gmail.com
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Phone />
                            <div>
                                +91 1234567890
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MapPin />
                            <div>
                                123, Street Name, City, Country
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
