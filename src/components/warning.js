import imgCerrar from '../assets/x_cerrar.png';

function eventHandler(e) {
  console.log(e);
}

const Warning = () => {

  return (
    <>
      <h3> </h3>
      <h3>Free Delivery over $100. Gift with Purchase over $150</h3>
      <img src={imgCerrar} alt="Cerrar" onClick={eventHandler} />
    </>
  )
}
export default Warning;

