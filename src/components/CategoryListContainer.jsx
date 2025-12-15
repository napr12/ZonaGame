import { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
const CategoryListContainer = () => {
    const [category, setCatergory] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
            .then(res => res.json())
            .then(data => setCatergory(data));
    }, [])
    return (


        <div className='navbar-item has-dropdown is-hoverable navbar-end'>
            <a className="navbar-link">
                Categorias
            </a>
            <div className="navbar-dropdown" >
                {category.map((category) => <CategoryItem key={category} Item={category.toUpperCase()} />)}
            </div>

        </div>

    )
}
export default CategoryListContainer;