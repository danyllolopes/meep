import { Box, Button, Container, Typography } from "@mui/material";
import Header from "../components/Header";
import { useData } from "../contexts/DataContext";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { formatPrice } from "../utils/formatPrice";
import { IProducts } from "../types/ProductType";
import React from "react";

const Orders = () => {
  const { products, getTotalPrice } = useData();
  const navigate = useNavigate()

  const handleSubmit = React.useCallback(async () => {
    try {
      window.location.assign('/success')
    } catch (error) {
      console.log(error)
    }
  }, [])


  if (!products.length) {
    return (
      <>
        <Header title="Carrinho" backButton />
        <Container sx={{ mt: 10 }}>
          <Box display="flex" flexDirection="column">
            <Typography variant="h6" textAlign="center" mb={2}>Sem pedidos no carrinho</Typography>
            <Button variant="contained" onClick={() => navigate("/")}>Voltar para home</Button>
          </Box>
        </Container>
      </>
    )
  }

  return (
    <>
      <Header title="Carrinho" backButton />
      <Container >
        {products?.map(({ id, name, price, image, qtd }: IProducts) => (
          <Card id={id} name={name} price={price} image={image} key={id} qtd={qtd} checkout />
        ))}
        <Box position="fixed" bottom={0} pb={2} pt={1} width="91%" bgcolor="#fff">
          <Box display="flex" justifyContent="space-between" pb={1}>
            <Typography>Total: </Typography>
            <Typography>{formatPrice(getTotalPrice)}</Typography>
          </Box>
          <Box>
            <Button variant="contained" fullWidth onClick={handleSubmit}>Enviar pedido</Button>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default Orders;