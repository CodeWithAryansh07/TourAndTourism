const Navbar = () => {
    return (
        <div className="w-full bg-white h-auto py-5">
            <div className="flex justify-between items-center mx-auto max-w-7xl h-16">
                <div className="text-2xl font-bold text-gray-800">Navbar</div>
                <div className="flex space-x-6 items-center">
                    <div className="text-gray-800 text-xl cursor-pointer">Home</div>
                    <div className="text-gray-800 text-xl cursor-pointer">About</div>
                    <div className="text-gray-800 text-xl cursor-pointer">Contact</div>
                    <div className="text-white bg-gray-800 p-2 px-5 rounded-xl text-xl cursor-pointer">Login</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
