import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FastfoodIcon from '@mui/icons-material/Fastfood';

const OrderCart = () => {
  return (
    <NavLink to="/orders">
      <Box p={3} bgcolor="#F7F8F5" display="flex" justifyContent="space-between" position="sticky" bottom={0}>
        <Box display="flex" alignItems="center">
          <FastfoodIcon />
          <Typography variant="body2" fontWeight={500} ml="var(--gap-s)">5</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <ShoppingCartIcon />
          <Typography variant="body2" fontWeight={500} ml="var(--gap-s)">R$ 100,00</Typography>
        </Box>
      </Box>
    </NavLink>
  );
};

export default OrderCart;
