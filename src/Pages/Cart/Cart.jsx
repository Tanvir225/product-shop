import { useState } from "react";
import CardItem from "../../Components/CardItem/CardItem";

const Cart = () => {
  const getCartItem = JSON.parse(localStorage.getItem("cart"));
  const [isShowAll, setIsShowAll] = useState(true);
  return (
    <div className="container mx-auto py-5 px-5 h-screen">
      {getCartItem.length === 0 ? (
        <p className="flex flex-col justify-center items-center h-screen">No data Found</p>
      ) : (
        <div>
            <div className="mb-10 text-center">
                <h2 className="font-bold text-xl">Total Price: {getCartItem.reduce((prevValue,currentvalue)=> prevValue + currentvalue.price,0)} TK </h2>
                <hr className="w-1/2 mx-auto" />
            </div>
          <div className=" grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {isShowAll
              ? getCartItem
                  .slice(0, 4)
                  ?.map((cartItem) => (
                    <CardItem key={cartItem.id} cartItem={cartItem}></CardItem>
                  ))
              : getCartItem?.map((cartItem) => (
                  <CardItem key={cartItem.id} cartItem={cartItem}></CardItem>
                ))}
          </div>
          <div className="mt-10 text-center">
            <button
              className="btn btn-success"
              onClick={() => setIsShowAll(!isShowAll)}
            >
              {isShowAll ? "Show All" : "Show Less"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
