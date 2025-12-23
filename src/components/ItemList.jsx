import { Link } from "react-router-dom";
const ItemList = ({ title, description, price, img, id }) => {
    return (
        <div className="card cell fixed-grid has-1-cols">
            <div className="grid ">
                <div className="card-image cell">
                    <figure className="image is-4by3">
                        <img
                            src={img}
                        />
                    </figure>
                </div>
                <div className="card-content cell">

                    <div className="content  has-text-light">
                        <p className="title is-4 has-text-light">{title}</p>
                        <p className="has-text-light">{description.trim()} </p>
                        <p className="has-text-light">${price}</p>
                    </div>
                    <footer className="card-footer is-justify-content-center is-align-items-self-end">
                        <Link className="button card-foorter-item" to={`/item/${id}`}>Detail</Link>
                    </footer>
                </div>
            </div>
        </div>

    )
}

export default ItemList