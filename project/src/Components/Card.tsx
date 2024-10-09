import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";


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
  price: number
}

const Card = ({ id, image, name, price}: CardProps) => {
  return (
    <NavLink to={`/product/${id}`} key={id}>
      <Box key={id} component="li" style={{...defaultStyle}}>
        <Avatar src={image} alt={name} sx={{width: 60, height: 60, borderRadius: "var(--gap-s)"}} />
        <Box ml="var(--gap-s)" display="flex" flexDirection="column" justifyContent="center">
          <Typography variant="body1" fontWeight={500}>{name}</Typography>
          <Typography variant="body2">{formatPrice(price)}</Typography>
        </Box>
      </Box>
    </NavLink>
  );
};

export default Card;
