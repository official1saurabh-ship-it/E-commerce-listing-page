const ShoeCard = ({ shoes, del, update }) => {
    return (
        <div className="relative max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

            {/* Update Button */}
            <button
                onClick={() => update(shoes.id)}

                className="absolute top-3 right-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition z-10"
            >
                Update
            </button>

            {/* Shoe Image */}
            <img
                src={shoes.image}
                alt={shoes.name}
                className="w-full h-60 object-cover"
            />

            {/* Card Content */}
            <div className="p-5">
                <h2 className="text-2xl font-bold text-gray-800">
                    {shoes.name}
                </h2>

                <p className="text-gray-500 mt-1">
                    Brand:{" "}
                    <span className="font-medium text-black">
                        {shoes.brand}
                    </span>
                </p>

                <p className="text-emerald-600 text-2xl font-bold mt-3">
                    ₹{shoes.price}
                </p>

                <div className="flex justify-between items-center mt-5">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {shoes.quantity} in stock
                    </span>

                    <button
                        onClick={() => del(shoes.id)}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShoeCard;