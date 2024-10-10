import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { useData } from "../contexts/DataContext";
import { formatPrice } from "../utils/formatPrice";

const OrderCart = () => {
  const { getTotalProductQuantity, getTotalPrice } = useData();

  return (
    <NavLink to="/orders">
      <Box p={3} bgcolor="#F7F8F5" display="flex" justifyContent="space-between" position="sticky" bottom={0}>
        <Box display="flex" alignItems="center">
          <FastfoodIcon />
          <Typography variant="body2" fontWeight={500} ml="var(--gap-s)">{getTotalProductQuantity()}</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <ShoppingCartIcon />
          <Typography variant="body2" fontWeight={500} ml="var(--gap-s)">{formatPrice(getTotalPrice())}</Typography>
        </Box>
      </Box>
    </NavLink>
  );
};

export default OrderCart;
