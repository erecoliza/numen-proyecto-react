import imgFacebook from '../../assets/facebook.png';
import imgGorjeo from '../../assets/gorjeo.png';
import imgInstagram from '../../assets/instagram.png';
import imgMensajero from '../../assets/mensajero.png';
import imgTelegram from '../../assets/telegram.png';
import imgWhatsapp from '../../assets/whatsapp.png';
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
