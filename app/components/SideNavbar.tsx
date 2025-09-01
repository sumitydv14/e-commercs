import Link from "next/link";
import { Category } from "../page";

interface categories {
    categories: Category[];
}

export default function SideNavbar({categories}:categories) {
  return (
    <>
      <aside
        className={`w-64 flex-shrink-0 sticky top-0  border-r bg-black  shadow-lg border-r transform transition-transform duration-300 z-40
         md:translate-x-0`}
      >
        <div className="p-4 border-b-2  border-white ">
          <h2 className="text-lg font-bold text-white">Categories</h2>
        </div>

        <nav className="p-4 space-y-2 h-screen overflow-y-auto">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              className="block text-white px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition"
            >
              {cat.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
