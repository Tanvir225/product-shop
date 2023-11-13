import swal from "sweetalert";
const CardItem = ({ cartItem }) => {
  const getCartItem = JSON.parse(localStorage.getItem("cart"));
  const { title, thumbnail, price, brand, id } = cartItem || {};

  const handleDelete = (id) => {
    let remainCartItem = getCartItem.filter((p) => p.id !== id);
    localStorage.setItem("cart", JSON.stringify(remainCartItem));
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your Product has been deleted!", {
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="card bg-base-100 h-[50vh] shadow-xl">
      <figure className="px-10 pt-10 ">
        <img
          src={thumbnail}
          alt={`${title} image`}
          className="rounded-xl w-full"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{`Brand : ${brand} || Price : ${price}`}</p>
        <div className="card-actions">
          <button className="btn btn-warning" onClick={() => handleDelete(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
