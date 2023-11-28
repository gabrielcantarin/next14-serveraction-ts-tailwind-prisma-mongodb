import ButtonFormSubmit from "@/components/buttons/form-submit";
import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import React from "react"


export const metadata = {
    title: 'Add Product - Cantarin Ecommerce',
}

async function addProduct(formData: FormData) {
    "use server";
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const imageUrl = formData.get("imageUrl")?.toString();
    const price = Number(formData.get("price") || 0);

    if(!name || !description || !imageUrl || !price) {
        throw new Error("Missing required fields");
    }

    const product = await prisma.product.create({
        data: {
            name: name,
            description: description,
            imageUrl: imageUrl,
            price: price,
        }
    })

    redirect("/");
}

export default function AddProductPage() {
    return (
        <>
            <h1 className="text-lg mb-3 font-bold">Add Product</h1>
            <form action={addProduct}>
            <input 
            required
            name="name"
            type="text" 
            placeholder="Name" 
            className="input input-bordered w-full mb-3" />

            <textarea className="textarea textarea-bordered mb-3 w-full" name="description" placeholder="Bio"></textarea>

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

            <ButtonFormSubmit className="btn btn-primary btn-block">Add Product</ButtonFormSubmit>
            </form>
        </>
    )
}