import { useLoaderData } from "react-router-dom";
import Product from "../../Components/Product/Product";

const Shop = () => {
    const products = useLoaderData()
    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 px-5 md:container md:mx-auto md:p-0 lg:grid-cols-4">
            {
                products.products?.map(product=> <Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Shop;