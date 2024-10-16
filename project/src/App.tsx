import './Style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Product from './pages/Product';
import { createTheme, ThemeProvider } from '@mui/material';
import { DateContextProvider } from './contexts/DataContext';
import Success from './pages/Success';

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
        <DateContextProvider>
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/success' element={<Success />} />
          </Routes>
        </DateContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
