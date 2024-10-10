import useFetch from "../hooks/useFetch";
import Title from "../components/Header";
import OrderCart from "../components/OrderCart";
import { IProducts } from "../types/ProductType";
import { Container, Skeleton } from "@mui/material";
import Card from "../components/Card";
import { NavLink } from "react-router-dom";

const Products = () => {
  const { data, loading, error } = useFetch<IProducts[]>(
    "http://localhost:3001/products",
    { method: "GET" }
  );

  if (loading) return (
    <Container>
      {Array.from({ length: 20 }).map((item, index) => (
        <Skeleton key={index} height={150} width="100%" />
      ))}
    </Container>
  );

  if (error) return <p>Ocorreu um erro...</p>

  return (
    <>
      <Title title="Catalago" />
      <Container>
        {data?.map(({ id, name, price, image }: IProducts) => (
          <NavLink key={id} to={`/product/${id}`}>
            <Card id={id} name={name} price={price} image={image} key={id} />
          </NavLink>
        ))}
      </Container>
      <OrderCart />
    </>
  );
};

export default Products;
