const Card = ({title, description, price, img}) => {
    return (
        <div className="card cell">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img
                        src={img}
                    />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                    </div>
                </div>

                <div className="content">
                    {description}
                    <br />
                    <p>${price}</p>
                </div>
            </div>
        </div>
        
    )
}

export default Card