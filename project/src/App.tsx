import './Style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Product from './pages/Product';
import { createTheme, ThemeProvider } from '@mui/material';

const App = () => {

  const theme = createTheme({
    typography: {
      fontFamily: `"Sora", "Roboto"`,
      fontWeightRegular: 400
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/orders' element={<Orders />} />
        </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
