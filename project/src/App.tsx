import './Style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './Views/Products';
import OrderCart from './Components/OrderCart';
import Orders from './Views/Orders';
import Product from './Views/Product';

const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/orders' element={<Orders />} />
          </Routes>
          <OrderCart />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
