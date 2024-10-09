import useFetch from "../Hooks/useFetch";
import { NavLink } from "react-router-dom";
import { formatPrice } from "../Util/formatPrice";
import Title from "../Components/Title";
import Card from "../Components/Card";
import Img from "../Components/Img";
import List from "../Components/List";

type IProducts = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const defaultStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const Products = () => {
  const { data } = useFetch<IProducts[]>(
    "http://localhost:3001/products",
    { method: "GET" }
  );

  if (!data) return null;
  // if (loading) return

  return (
    <>
      <Title text="Produtos" />
      <Card>
        {data.map(({ id, name, price, image }: IProducts) => (
          <NavLink to={`/product/${id}`} key={id}>
            <List key={id}>
              <Img src={image} alt={name} />
              <div style={{ ...defaultStyle }}>
                <span>{name}</span>
                <span>{formatPrice(price)}</span>
              </div>
            </List>
          </NavLink>
        ))}
      </Card>
    </>
  );
};

export default Products;
