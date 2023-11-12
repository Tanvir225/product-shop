import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { id, title, description, rating, images } = product || {};
  const navigate = useNavigate()
  const handleDetails = ()=>{
    navigate(`/shop/${id}`)
  }
  return (
    <div className="card bg-base-100 shadow-xl image-full h-[60vh]">
      <figure className="">
        <img src={images[0]} alt={`${title} image`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleDetails}>Details</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
