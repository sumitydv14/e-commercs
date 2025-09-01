import Image from "next/image";
import Link from "next/link";


export interface ProductCardProps  {
  index?: number;
  id: number;
  title: string;
  price: number;
  rating?: number;
  thumbnail: string;
  category: string;
}

export default function ProductCard({
  id=0,
  thumbnail = "/default-product.jpg",
  title = "Sample Product",
  category = "Blue",
  price = 999,
  index
}:ProductCardProps ) {
  return (
    <div className="flex flex-col justify-between bg-white shadow-md rounded-2xl p-4 w-full  w-full">
        <Link href={`/products/${id}`}>
      <div className="flex-shrink-0">
        <Image
          priority={index == 0  }
          src={thumbnail}
          alt={title}
          width={80}
          height={80}
          className="rounded-xl object-cover"
        />
      </div>

      <div className="flex flex-col  flex-grow px-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">Category: {category}</p>
      </div>

      <div className="text-right">
        <span className="text-xl font-bold text-green-600">₹{price}</span>
      </div>
      </Link>
    </div>
  );
}
