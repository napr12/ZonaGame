import { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import { getCateory } from "../firebase/db";
const CategoryListContainer = () => {
    const [category, setCatergory] = useState([])
    useEffect(() => {
            getCateory().then(data => setCatergory(data));
    }, [])
    return (

        <CategoryItem category={category} />

    )
}
export default CategoryListContainer;