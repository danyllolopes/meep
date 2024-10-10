import { Card, Container } from "@mui/material";
import Header from "../components/Header";
import { useData } from "../contexts/DataContext";

const Orders = () => {
  const { products, handleAddProduct, handleRemoveProduct, getProductQuantity } = useData();
  return (
    <>
      <Header title="Carrinho" backButton />
      <Container>

      </Container>
    </>
  )
}

export default Orders;