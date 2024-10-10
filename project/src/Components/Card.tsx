import { Avatar, Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { formatPrice } from "../utils/formatPrice";
import { useData } from "../contexts/DataContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";


const defaultStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  padding: "var(--gap-s)",
  margin: "var(--gap-s) 0",
};

interface CardProps  {
  id: number,
  image: string,
  name: string,
  price: number,
  qtd: number
  checkout?: boolean
}

const Card = ({ id, image, name, price, qtd, checkout}: CardProps) => {
  const { handleAddProduct, handleRemoveProduct, getProductQuantity } = useData();

  return (
    <>
      <Box key={id} component="li" style={{...defaultStyle}} position="relative">
        <Avatar src={image} alt={name} sx={{width: 70, height: 70, borderRadius: "var(--gap-s)"}} />
        <Box ml="var(--gap-s)" display="flex" flexDirection="column" justifyContent="center">
          <Typography variant="body1" fontWeight={500}>{name}</Typography>
          <Typography variant="body2">{formatPrice(price)}</Typography>
        </Box>
        {checkout && (
          <Box  position="absolute" right={0} bottom={0}>
            <Box display="flex" alignItems="center" mr={1}>
              <IconButton onClick={() => handleAddProduct({
                id, image, name, price, qtd,
                description: ""
              })}>
                <AddIcon fontSize="small" />
              </IconButton>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="20px"
                height="20px"
                border="1px solid #ccc"
                m={1}
              >
               <Typography variant="body2"> {getProductQuantity(id)}</Typography>
              </Box>
              <IconButton onClick={() => handleRemoveProduct(id)}>
                <RemoveIcon  fontSize="small"/>
              </IconButton>
            </Box>
        </Box>
      )}
      </Box>
    </>
  );
};

export default Card;
