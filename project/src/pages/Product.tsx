import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import { IProducts } from '../types/ProductType';
import Title from '../components/Header';

import { formatPrice } from '../utils/formatPrice';
import { Avatar, Box, Button, IconButton, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const imgStyle: React.CSSProperties = { 
  width: '100%',
  height: 230,
  objectFit: 'cover',
  borderRadius: '0',
  marginRight: 'var(--gap)',
};

const Product = () => {
  const { id } = useParams();
  const { data } = useFetch<IProducts>(`http://localhost:3001/products/${id}`,
    { method: "GET" });

  if (!data) return null;
  
  return (
    <>
      <Title title='Produto' backButton />
        <Avatar src={ data.image } alt={ data.name } sx={{...imgStyle}}/>
        <Box pl={2} pr={2} pt={1} pb={1}>
          <Box  mt={2} mb={2}>
          <Typography variant='body1' fontWeight={500}>{ data.description }</Typography>
          <Typography variant='h6' mt={1}>{ formatPrice(data.price) }</Typography>
          </Box>
          <TextField name="observacoes" label="Observações" multiline rows={3} fullWidth/>
          <Box  pt={2} display="flex">
            <Box display="flex" alignItems="center">
              <IconButton>
                    <AddIcon />
                </IconButton>
                <Box display="flex" alignItems="center" justifyContent="center" width="25px" height="25px"border="1px solid #ccc" m={1} >1</Box>
                <IconButton>
                    <RemoveIcon />
                </IconButton>
            </Box>
            <Button fullWidth variant='contained'>Adicionar</Button>
          </Box>
        </Box>
    </>
  )
}

export default Product