import imgCerrar from '../../assets/x_cerrar.png';
import { Div, H3, Image } from './warning.styled';
import { useState } from 'react';

const Warning = () => {
  const [hidden, setHidden] = useState(false);  
  return (
    <>
      {!hidden ? 
       <Div className='warning'>
       <H3>Delivery Sin Cargo - Con su compra superior a $1.500,00 obtiene un regalo</H3>             
       <Image src={imgCerrar} alt="Cerrar" onClick={() => setHidden(s => !s)} />
      </Div>
      : null}     
    </>
  )
}
export default Warning;

