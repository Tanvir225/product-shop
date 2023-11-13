import { useLoaderData, useNavigate } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import swal from 'sweetalert'
const ProductCard = () => {
  const product = useLoaderData();
  const { title, rating, thumbnail, stock, brand, category, price } = product || {}
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }

  const handleBuy = () => {
    const getItem = JSON.parse(localStorage.getItem('cart') || "[]");
    if (!getItem) {
      localStorage.setItem('cart', JSON.stringify([product]))
    }
    else {
        const findCartItem = getItem.find(p=> p.id === product.id)
        if (!findCartItem) {
          getItem.push(product)
          localStorage.setItem('cart',JSON.stringify(getItem));
          swal("Good Job!","Your product added at cart!","success")
        }
        else{
          swal("Opps!","Already exist at cart!","error")
        }
    }

  }

  return (

    <div className="hero-content flex-col h-screen lg:flex-row">
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
        <p>{stock ? `In Stock : ${stock} pcs` : 'Out of stock'}</p>
        <p>{`Price : ${price}`}</p>
        <button className="btn btn-primary mr-5" onClick={handleBuy}>Buy Now</button>
        <button className="btn btn-secondary" onClick={handleBack}>Go back</button>
      </div>
    </div>

  );
};

export default ProductCard;
