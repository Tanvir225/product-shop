import { useLoaderData, useNavigate } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const ProductCard = () => {
  const product = useLoaderData();
  const {title,rating,thumbnail,stock,brand,category,price} = product || {}
  const navigate = useNavigate()
  const handleBack = ()=>{
    navigate(-1)
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={thumbnail}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="space-y-2">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="">
           {`Brand : ${brand} || Category : ${category}`}
          </p>
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
          <p>{stock ? `In Stock` : 'Out of stock'}</p>
          <p>{`Price : ${price}`}</p>
          <button className="btn btn-primary mr-5">Buy Now</button>
          <button className="btn btn-secondary" onClick={handleBack}>Go back</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
