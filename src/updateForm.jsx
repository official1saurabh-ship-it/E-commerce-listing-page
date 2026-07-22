import React, { useState } from 'react'

const updateForm = () => {
    const [editData, setEditData] = useState({
        image: "",
        name: "",
        brand: "",
        price: "",
        quantity: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setEditData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    return (
        <div>
            <input
                type="text"
                placeholder="Image URL"
                name="image"
                value={editData.image}
                onChange={handleChange}
            />

            <input
                type="text"
                placeholder="Name"
                name="name"
                value={editData.name}
                onChange={handleChange}
            />

            <input
                type="text"
                placeholder="Brand"
                name="brand"
                value={editData.brand}
                onChange={handleChange}
            />

            <input
                type="number"
                placeholder="Price"
                name="price"
                value={editData.price}
                onChange={handleChange}
            />

            <input
                type="number"
                placeholder="Quantity"
                name="quantity"
                value={editData.quantity}
                onChange={handleChange}
            />

        </div>
    )
}

export default updateForm