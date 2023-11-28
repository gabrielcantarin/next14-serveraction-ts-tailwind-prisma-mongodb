import Image from 'next/image'
import { prisma } from '@/lib/db/prisma'
import ProductCard from '@/components/card/Product'
import Navbar from '@/components/navigation/navbar'

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: {
      id: 'desc',
    },
    take: 10,
  })
  return (
    <div>
      <Navbar />
      <h1>Home</h1>

      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  )
}
