import imgCerrar from '../../assets/x_cerrar.png';
import { Div, H3, Image } from './warning.styled';
import { useState } from 'react';

const Warning = () => {
  const [hidden, setHidden] = useState(false);  
  return (
    <>
      {!hidden ? 
       <Div className='warning'>
       <H3>Free Delivery over $100. Gift with Purchase over $150</H3>             
       <Image src={imgCerrar} alt="Cerrar" onClick={() => setHidden(s => !s)} />
      </Div>
      : null}     
    </>
  )
}
export default Warning;

