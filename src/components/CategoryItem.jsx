import { Link } from "react-router-dom";
const CategoryItem = ({ category }) => {
    return (
        <div className=" navbar-item has-dropdown is-hoverable">
            <a className="navbar-link cell">
                Categorias
            </a>
            <div className="navbar-dropdown" >
                {category.map((cat) => (
                    <Link key={cat.id} className="navbar-item" to={`category/${cat.category}`}>
                        {cat.category.toUpperCase()}
                    </Link>
                ))}
            </div>
        </div>

    )

}
export default CategoryItem