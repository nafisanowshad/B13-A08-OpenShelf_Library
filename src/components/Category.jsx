import { Button } from "@heroui/react";
import Link from "next/link";

const Category = async() => {


    const res = await fetch('https://b13-a08-open-shelf-library-two7.vercel.app/category.json')
    const  categories = await res.json()

    return (
        <div className="mb-5 space-x-3">
            {categories.map(category=> <Link key={category.id} href={`?cateory=${category.name.toLowerCase()}`}><Button size="sm" variant="outline">{category.name}</Button></Link>)}
        </div>
    );
};

export default Category;