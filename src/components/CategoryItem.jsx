import { Link } from "react-router-dom";
const CategoryItem = ({ Item }) => {
    return (

        <Link className="navbar-item" to={`category/${Item}`}>
            {Item.toUpperCase()}
        </Link>

    )

}
export default CategoryItem