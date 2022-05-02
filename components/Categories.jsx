import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, [])
  return (
    <div className='sidebar-categories bg-white shadow-lg rounded-lg p-2 lg:px-4 mb-8'>
        <h3 className="text-xl mb-3 font-semibold border-b pb-4">
            Categories
        </h3>
        {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="cursor-pointer block pb-3">
                    {category.name}
                </span>
            </Link>
        ))}
    </div>
  )
}

export default Categories