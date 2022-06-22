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
            <Image src={imgFacebook} alt="Facebook" />
            <Image src={imgGorjeo} alt="Gorjeo" />
            <Image src={imgInstagram} alt="Instagram" />
            <Image src={imgMensajero} alt="Mensajero" />
            <Image src={imgTelegram} alt="Telegram" />
            <Image src={imgWhatsapp} alt="Whatsapp" />
        </Div>
    )
}
export default RedesSociales;
