import Logo from '../../assets/logo.png';
import { BottomLearn, Div, H1, Image } from "./ourpartner.styled";

const Ourpartner = () => {
    return (
      <>
        <Div>  
            <H1>Our Charity Partner, City Bakery</H1>   
            <Image src={Logo} alt="Logo" draggable="false" />
            <BottomLearn>Learn more about City Bakery</BottomLearn>   
        </Div>
      </>
    )
  }
  export default Ourpartner;
  