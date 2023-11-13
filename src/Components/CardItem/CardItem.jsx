const CardItem = ({cartItem}) => {
    const {title,thumbnail,price,brand} =cartItem || {}
    return (
        <div className="card bg-base-100 h-[50vh] shadow-xl">
            <figure className="px-10 pt-10 ">
                <img src={thumbnail} alt={`${title} image`} className="rounded-xl w-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{`Brand : ${brand} || Price : ${price}`}</p>
                <div className="card-actions">
                    <button className="btn btn-warning">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CardItem;