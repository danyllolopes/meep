import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch';
import { IProducts } from '../Types/ProductType';
import Title from '../Components/Title';
import Img from '../Components/Img';
import { formatPrice } from '../Util/formatPrice';

const imgStyle: React.CSSProperties = { 
  width: '100%',
  height: '50%',
  objectFit: 'cover',
  borderRadius: 'var(--gap-s)',
  marginRight: 'var(--gap)',
};

const Product = () => {
  const { id } = useParams();
  const { data } = useFetch<IProducts>(`http://localhost:3001/products/${id}`,
    { method: "GET" });

  if (!data) return null;
  return (
    <div>
      <Title text='Produto' />
      <Img src={ data.image } alt={ data.name } style={{ ...imgStyle }}/>
      <div>
        <p>{ data.description }</p>
        <p>{ formatPrice(data.price) }</p>
      </div>
    </div>
  )
}

export default Product