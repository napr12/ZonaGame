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

        <div className=" navbar-item has-dropdown is-hoverable">
                <a className="navbar-link cell">
                    Categorias
                </a>
                <div className="navbar-dropdown" >
                    {category.map((category) => <CategoryItem key={category} Item={category} />)}
                </div>
        </div>

    )
}
export default CategoryListContainer;