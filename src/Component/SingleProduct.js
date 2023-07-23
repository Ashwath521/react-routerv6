import productsData from "../data/Product";
import { Link } from "react-router-dom";

export default function SingleProduct() {
  return (
    <div>
      {productsData.map((data) => {
        return (
          <div key={data?.id}>
            <h1>{data?.name}</h1>

            <Link to={`/product/${data.id}`} className="nav-link">
              more info
            </Link>
          </div>
        );
      })}
    </div>
  );
}
