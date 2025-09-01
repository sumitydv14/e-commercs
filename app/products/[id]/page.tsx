import Image from "next/image";
import Link from "next/link";
import { fetchProduct } from '../../lib/api'
import {Product} from '../model/product.model'

type ProductPageParams = {
  params: Promise<{
    id: string;
  }>;
};



export async function generateMetadata({params}:ProductPageParams) {
    const { id } = await params;
    const data = await fetchProduct(Number(id));
    return {
      title: `Dev Product | ${data.title}`
    }
}

export default async function ProductDetails({params}:ProductPageParams) {
    const { id } = await params;
    const data = await fetchProduct(Number(id));
    const prodcutsDetails:Product = data || {};
    
  return (
    <div className="py-12 max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 items-start">
      <div className="flex justify-center">
        <Image
          priority={true}
          src={prodcutsDetails.thumbnail}
          alt={prodcutsDetails.title}
          width={500}
          height={500}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      <div className="flex flex-col space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">
          {prodcutsDetails.title}
        </h1>
        <p className="text-gray-600">
          {prodcutsDetails.description}
        </p>

        <span className="text-2xl font-semibold text-green-600">
          {prodcutsDetails.price}
        </span>

        <span className="text-sm font-medium text-gray-500">
          ✅ {prodcutsDetails.stock}
        </span>

        <Link href="/carditems" className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 w-max">
          Add to Cart
        </Link>
      </div>
    </div>
  );
}
