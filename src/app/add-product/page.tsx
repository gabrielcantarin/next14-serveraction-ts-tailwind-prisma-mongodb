import React from "react"


export const metadata = {
    title: 'Add Product - Cantarin Ecommerce',
}

export default function AddProductPage() {
    return (
        <>
            <h1 className="text-lg mb-3 font-bold">Add Product</h1>
            <form>
            <input 
            required
            name="name"
            type="text" 
            placeholder="Name" 
            className="input input-bordered w-full mb-3" />
            <textarea className="textarea textarea-bordered mb-3 w-full" placeholder="Bio"></textarea>

            <input 
                required
                name="imageUrl"
                type="url" 
                placeholder="Image URL" 
                className="input input-bordered w-full mb-3" />

            <input 
                required
                name="price"
                type="number" 
                placeholder="Price" 
                className="input input-bordered w-full mb-3" />

            <button className="btn btn-primary btn-block">Add Product</button>
            </form>
        </>
    )
}