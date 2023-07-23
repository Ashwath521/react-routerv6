import { useParams } from "react-router-dom";
import productsData from "../data/Product";
import { Link } from "react-router-dom";

export default function ViewProduct() {
  const { productId } = useParams();
  const { name, product_image } = productsData.find((product) => {
    return product?.id === productId;
  });

  return (
    <div>
      <div>
        <h1>{name}</h1>
        <img
          src={product_image}
          alt="product img"
          width="300px"
          height="200px"
        />
      </div>
      <Link to="/product" className="nav-link">
        back to Product
      </Link>
    </div>
  );
}
