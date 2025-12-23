const ItemDetail = ({ title, description, stock, thumbnail, reviews, price }) => {
    return (
        <>
            <h1 className="has-text-centered">{title}</h1>
            <div className="fixed-grid has-2-cols ml-5">
                <div className="grid">

                    <p className="cell has-text-centered mt-5 is-size-5">{description}</p>

                    <img className="cell is-row-span-3 " src={thumbnail} />
                    <p className="cell has-text-centered is-size-4">Stock {stock} </p>
                    <p className="cell has-text-centered has-text-weight-bold is-size-4">${price}</p>
                    <div className="cell fixed-grid has-2-cols">
                        <div className="grid">
                            {reviews.map(({ id, comment, reviewerName }) => {
                                return (
                                    <div className="cell mt-5 notification" key={id}>
                                        <p className="has-text-weight-bold has-text-centered is-size-6"> Comment: {comment}</p>
                                        <p className="has-text-weight-bold has-text-centered is-size-6"> Review by: {reviewerName}</p>
                                    </div>
                                )
                            }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ItemDetail