import {useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { IProducts } from "../types/ProductType";
import Title from "../components/Header";
import OrderCart from "../components/OrderCart";
import { formatPrice } from "../utils/formatPrice";
import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useData } from "../contexts/DataContext";

const imgStyle: React.CSSProperties = {
  width: '90%',
  height: 230,
  objectFit: "cover",
  borderRadius: "var(--gap-s)",
  margin: '0 auto',
};

const Product = () => {
  const { handleAddProduct, handleRemoveProduct, getProductQuantity } = useData();
  const navigate = useNavigate()
  const { id } = useParams();
  const { data, loading } = useFetch<IProducts>(`http://localhost:3001/products/${id}`, {
    method: "GET",
  });

  if (loading) return (
    <Container>
      {Array.from({ length: 3 }).map((item, index) => (
        <Skeleton key={index} height={150} width="100%" />
      ))}
    </Container>
  );

  if (!data) return null;

  return (
    <>
      <Title title="Produto" backButton />
      <Avatar src={data.image} alt={data.name} sx={{ ...imgStyle }} />
      <Box pl={2} pr={2} pb={1}>
        <Box mt={2} mb={2}>
        <Typography variant="h6" fontWeight={500}>
            {data.name}
          </Typography>
          <Typography variant="body1" fontWeight={400}>
            {data.description}
          </Typography>
          <Typography variant="h6" mt={1}>
            {formatPrice(data.price)}
          </Typography>
        </Box>
        <TextField
          name="observacoes"
          label="Observações"
          multiline
          rows={3}
          fullWidth
        />
        <Box pt={2} display="flex">
          <Box display="flex" alignItems="center" mr={1}>
            <IconButton onClick={() => handleAddProduct(data)}>
              <AddIcon />
            </IconButton>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="25px"
              height="25px"
              border="1px solid #ccc"
              m={1}
            >
              {getProductQuantity(data.id)}
            </Box>
            <IconButton onClick={() => handleRemoveProduct(data.id)}>
              <RemoveIcon />
            </IconButton>
          </Box>
          <Button fullWidth variant="contained" onClick={() => navigate("/orders")}>
            Adicionar
          </Button>
        </Box>
      </Box>
      <OrderCart />
    </>
  );
};

export default Product;
 