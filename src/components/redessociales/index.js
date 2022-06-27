import imgFacebook from '../../assets/redessociales/facebook.png';
import imgGorjeo from '../../assets/redessociales/gorjeo.png';
import imgInstagram from '../../assets/redessociales/instagram.png';
import imgMensajero from '../../assets/redessociales/mensajero.png';
import imgTelegram from '../../assets/redessociales/telegram.png';
import imgWhatsapp from '../../assets/redessociales/whatsapp.png';
import { Div, Image } from './redessociales.styled';

const RedesSociales = () => {
    return (
        <Div>
            <Image src={imgFacebook} alt="Facebook" draggable="false"/>
            <Image src={imgGorjeo} alt="Gorjeo" draggable="false"/>
            <Image src={imgInstagram} alt="Instagram" draggable="false"/>
            <Image src={imgMensajero} alt="Mensajero" draggable="false"/>
            <Image src={imgTelegram} alt="Telegram" draggable="false"/>
            <Image src={imgWhatsapp} alt="Whatsapp" draggable="false"/>
        </Div>
    )
}
export default RedesSociales;
