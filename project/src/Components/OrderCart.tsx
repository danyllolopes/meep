import { NavLink } from "react-router-dom";

const OrderCart = () => {
  return (
    <NavLink to="/orders">
      <footer className="footer">
        <span>5 Itens</span>
        <span>R$ 100,00</span>
      </footer>
    </NavLink>
  );
};

export default OrderCart;
