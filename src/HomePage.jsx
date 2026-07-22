import React, { useState } from 'react'
import ShoeCard from './ShoeCard'

const HomePage = () => {
    const [shoe, setShoe] = useState({
        products: [
            {
                id: 1,
                name: "Air Max 270",
                brand: "Nike",
                price: 149.99,
                quantity: 20,
                image: "https://picsum.photos/seed/shoe1/400/300",
                description: "Comfortable running shoe with Air Max cushioning."
            },
            {
                id: 2,
                name: "Ultraboost Light",
                brand: "Adidas",
                price: 179.99,
                quantity: 15,
                image: "https://picsum.photos/seed/shoe2/400/300",
                description: "Responsive running shoe with Boost midsole."
            },
            {
                id: 3,
                name: "RS-X",
                brand: "Puma",
                price: 119.99,
                quantity: 18,
                image: "https://picsum.photos/seed/shoe3/400/300",
                description: "Chunky lifestyle sneaker with bold styling."
            },
            {
                id: 4,
                name: "Classic Leather",
                brand: "Reebok",
                price: 89.99,
                quantity: 30,
                image: "https://picsum.photos/seed/shoe4/400/300",
                description: "Timeless leather sneaker for everyday wear."
            },
            {
                id: 5,
                name: "574 Core",
                brand: "New Balance",
                price: 99.99,
                quantity: 22,
                image: "https://picsum.photos/seed/shoe5/400/300",
                description: "Classic sneaker with premium cushioning."
            },
            {
                id: 6,
                name: "Chuck Taylor All Star",
                brand: "Converse",
                price: 69.99,
                quantity: 40,
                image: "https://picsum.photos/seed/shoe6/400/300",
                description: "Iconic canvas sneaker loved worldwide."
            },
            {
                id: 7,
                name: "Old Skool",
                brand: "Vans",
                price: 74.99,
                quantity: 35,
                image: "https://picsum.photos/seed/shoe7/400/300",
                description: "Classic skate shoe with signature side stripe."
            },
            {
                id: 8,
                name: "Gel-Kayano 30",
                brand: "ASICS",
                price: 159.99,
                quantity: 14,
                image: "https://picsum.photos/seed/shoe8/400/300",
                description: "High-performance stability running shoe."
            },
            {
                id: 9,
                name: "Wave Rider 27",
                brand: "Mizuno",
                price: 139.99,
                quantity: 16,
                image: "https://picsum.photos/seed/shoe9/400/300",
                description: "Smooth ride with responsive cushioning."
            },
            {
                id: 10,
                name: "Clifton 9",
                brand: "HOKA",
                price: 144.99,
                quantity: 20,
                image: "https://picsum.photos/seed/shoe10/400/300",
                description: "Lightweight running shoe with plush comfort."
            },
            {
                id: 11,
                name: "Pegasus 41",
                brand: "Nike",
                price: 139.99,
                quantity: 24,
                image: "https://picsum.photos/seed/shoe11/400/300",
                description: "Versatile daily trainer with responsive feel."
            },
            {
                id: 12,
                name: "Superstar",
                brand: "Adidas",
                price: 99.99,
                quantity: 28,
                image: "https://picsum.photos/seed/shoe12/400/300",
                description: "Legendary shell-toe sneaker."
            },
            {
                id: 13,
                name: "Suede Classic",
                brand: "Puma",
                price: 79.99,
                quantity: 26,
                image: "https://picsum.photos/seed/shoe13/400/300",
                description: "Classic suede sneaker with timeless appeal."
            },
            {
                id: 14,
                name: "Nano X4",
                brand: "Reebok",
                price: 129.99,
                quantity: 19,
                image: "https://picsum.photos/seed/shoe14/400/300",
                description: "Cross-training shoe for gym workouts."
            },
            {
                id: 15,
                name: "Fresh Foam X",
                brand: "New Balance",
                price: 149.99,
                quantity: 17,
                image: "https://picsum.photos/seed/shoe15/400/300",
                description: "Premium cushioning for long-distance runs."
            },
            {
                id: 16,
                name: "Run Star Motion",
                brand: "Converse",
                price: 109.99,
                quantity: 21,
                image: "https://picsum.photos/seed/shoe16/400/300",
                description: "Modern platform sneaker with bold sole."
            },
            {
                id: 17,
                name: "Slip-On",
                brand: "Vans",
                price: 64.99,
                quantity: 31,
                image: "https://picsum.photos/seed/shoe17/400/300",
                description: "Easy slip-on sneaker for casual wear."
            },
            {
                id: 18,
                name: "Gel-Nimbus 26",
                brand: "ASICS",
                price: 169.99,
                quantity: 13,
                image: "https://picsum.photos/seed/shoe18/400/300",
                description: "Soft cushioning designed for comfort."
            },
            {
                id: 19,
                name: "Wave Inspire",
                brand: "Mizuno",
                price: 134.99,
                quantity: 18,
                image: "https://picsum.photos/seed/shoe19/400/300",
                description: "Supportive running shoe with smooth transition."
            },
            {
                id: 20,
                name: "Bondi 8",
                brand: "HOKA",
                price: 164.99,
                quantity: 12,
                image: "https://picsum.photos/seed/shoe20/400/300",
                description: "Maximum cushioning for long-distance comfort."
            },
            {
                id: 21,
                name: "Air Force 1",
                brand: "Nike",
                price: 119.99,
                quantity: 32,
                image: "https://picsum.photos/seed/shoe21/400/300",
                description: "Classic basketball-inspired lifestyle sneaker."
            },
            {
                id: 22,
                name: "Stan Smith",
                brand: "Adidas",
                price: 94.99,
                quantity: 27,
                image: "https://picsum.photos/seed/shoe22/400/300",
                description: "Minimal leather sneaker with iconic style."
            },
            {
                id: 23,
                name: "Future Rider",
                brand: "Puma",
                price: 89.99,
                quantity: 23,
                image: "https://picsum.photos/seed/shoe23/400/300",
                description: "Retro-inspired sneaker with lightweight comfort."
            },
            {
                id: 24,
                name: "Club C 85",
                brand: "Reebok",
                price: 84.99,
                quantity: 25,
                image: "https://picsum.photos/seed/shoe24/400/300",
                description: "Vintage tennis-inspired sneaker."
            },
            {
                id: 25,
                name: "9060",
                brand: "New Balance",
                price: 159.99,
                quantity: 16,
                image: "https://picsum.photos/seed/shoe25/400/300",
                description: "Modern sneaker with futuristic styling."
            },
            {
                id: 26,
                name: "Weapon",
                brand: "Converse",
                price: 119.99,
                quantity: 20,
                image: "https://picsum.photos/seed/shoe26/400/300",
                description: "Basketball heritage sneaker."
            },
            {
                id: 27,
                name: "Knu Skool",
                brand: "Vans",
                price: 94.99,
                quantity: 18,
                image: "https://picsum.photos/seed/shoe27/400/300",
                description: "Oversized skate-inspired sneaker."
            },
            {
                id: 28,
                name: "GT-2000",
                brand: "ASICS",
                price: 149.99,
                quantity: 14,
                image: "https://picsum.photos/seed/shoe28/400/300",
                description: "Reliable stability shoe for runners."
            },
            {
                id: 29,
                name: "Wave Sky",
                brand: "Mizuno",
                price: 159.99,
                quantity: 15,
                image: "https://picsum.photos/seed/shoe29/400/300",
                description: "Premium comfort for long runs."
            },
            {
                id: 30,
                name: "Mach 6",
                brand: "HOKA",
                price: 149.99,
                quantity: 17,
                image: "https://picsum.photos/seed/shoe30/400/300",
                description: "Fast and lightweight training shoe."
            },
            {
                id: 31,
                name: "Dunk Low",
                brand: "Nike",
                price: 129.99,
                quantity: 22,
                image: "https://picsum.photos/seed/shoe31/400/300",
                description: "Streetwear favorite with timeless design."
            },
            {
                id: 32,
                name: "Gazelle",
                brand: "Adidas",
                price: 99.99,
                quantity: 21,
                image: "https://picsum.photos/seed/shoe32/400/300",
                description: "Classic suede sneaker with retro vibes."
            },
            {
                id: 33,
                name: "Cali Court",
                brand: "Puma",
                price: 84.99,
                quantity: 19,
                image: "https://picsum.photos/seed/shoe33/400/300",
                description: "Clean court-inspired sneaker."
            },
            {
                id: 34,
                name: "Floatride Energy",
                brand: "Reebok",
                price: 109.99,
                quantity: 18,
                image: "https://picsum.photos/seed/shoe34/400/300",
                description: "Lightweight running shoe with energy return."
            },
            {
                id: 35,
                name: "327",
                brand: "New Balance",
                price: 109.99,
                quantity: 24,
                image: "https://picsum.photos/seed/shoe35/400/300",
                description: "Retro-inspired sneaker with bold silhouette."
            },
            {
                id: 36,
                name: "Chuck 70",
                brand: "Converse",
                price: 94.99,
                quantity: 29,
                image: "https://picsum.photos/seed/shoe36/400/300",
                description: "Premium version of the classic Chuck Taylor."
            },
            {
                id: 37,
                name: "Sk8-Hi",
                brand: "Vans",
                price: 84.99,
                quantity: 20,
                image: "https://picsum.photos/seed/shoe37/400/300",
                description: "High-top skate shoe with padded collar."
            },
            {
                id: 38,
                name: "Gel-Quantum",
                brand: "ASICS",
                price: 159.99,
                quantity: 15,
                image: "https://picsum.photos/seed/shoe38/400/300",
                description: "Lifestyle sneaker with GEL cushioning."
            },
            {
                id: 39,
                name: "Wave Rebellion",
                brand: "Mizuno",
                price: 189.99,
                quantity: 10,
                image: "https://picsum.photos/seed/shoe39/400/300",
                description: "Performance racing shoe for marathon runners."
            },
            {
                id: 40,
                name: "Speedgoat 6",
                brand: "HOKA",
                price: 154.99,
                quantity: 13,
                image: "https://picsum.photos/seed/shoe40/400/300",
                description: "Trail running shoe with exceptional grip."
            }
        ]
    });

    const deleteShoe = (id) => {
        setShoe((prev) => ({
            ...prev,
            products: prev.products.filter((shoe) => shoe.id !== id),
        }));
    };
    const updateShoe = (id) => {
        setShoe((prev) => ({
            ...prev,
            products: prev.products.map((shoe) =>
                shoe.id === id
                    ? {
                        ...shoe,
                        ...editData,
                    }
                    : shoe
            ),
        }));
    };
    return (
        <div className="grid grid-cols-4 gap-6">
            {shoe.products.map((shoes) => (

                <ShoeCard shoes={shoes} del={deleteShoe} update={updateShoe} />
            ))}

        </div>
    )
}


export default HomePage