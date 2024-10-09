import useFetch from "../Hooks/useFetch"
import { NavLink } from "react-router-dom";
import { formatPrice } from "../util/formatPrice";

type IProducts = {
  id: number;
  name: string,
  description: string;
  price: number;
  image: string;
}

const Products = () => {
  const { data, loading } = useFetch<IProducts[]>('http://localhost:3001/products', { method: 'GET' });

  if (!data) return null;
  // if (loading) return

  return (
    <nav>
      <ul className="product-list">
        {data.map(({ id, name, price, image }: IProducts) => (
          <NavLink to={`/product/${id}`} key={id} className="product-link">
            <li className="product-card" key={id}>
              <img src={image} alt={name} className="product-image" />
              <div className="product-info">
                <span className="product-name">{name}</span>
                <span className="product-price">{formatPrice(price)}</span>
              </div>
            </li>
          </NavLink>
        ))}
      </ul>
    </nav>
  )
}

export default Products