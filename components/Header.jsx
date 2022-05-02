import React, { useContext, useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, [])

    return (
    <div className='container mx-auto px-0 mb-8'>
        <div className="border-b w-full inline-block border-teal-900 py-8">
            <div className="md:float-left block">
                <Link href="/">
                    <span className="header-title cursor-pointer font-bold text-4xl text-teal-900 hover:opacity-70">
                        GraphCMS
                    </span>
                </Link>
            </div>
            <div className="hidden md:float-left md:contents">
                {categories.map(category => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer text-teal-900 hover:opacity-70">
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Header