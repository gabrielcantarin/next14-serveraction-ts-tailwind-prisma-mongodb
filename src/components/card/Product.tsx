import Image from 'next/image'
import Link from 'next/link'

import { Product } from '@prisma/client'
import PriceTag from './PriceTag'

interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <>
            <Link href={"/products/" + product.id} className="card w-full bg-base-100 hover:shadow-x1 transition-shadow">
                <figure>
                    <Image src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D" width={500} height={500} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p>{product.description}</p>

                    <div className="card-actions justify-end">
                        <PriceTag price={product.price} className="badge-primary" />
                    </div>
                </div>
            </Link>
        </>
    )
}