import imgcomida1 from '../../assets/carrousel/comida1.png';
import imgcomida2 from '../../assets/carrousel/comida2.png';
import imgcomida3 from '../../assets/carrousel/comida3.png';
import imgcomida4 from '../../assets/carrousel/comida4.png';
import imgcomida5 from '../../assets/carrousel/comida5.png';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarrouselImg, Div, Link, TituloCarrusel, Image } from './instagram.styled';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Instagram = () => {
    return (
        <Div>
            <TituloCarrusel><Link href="@PremiumBakeryQuality">@PremiumBakeryQuality</Link> on Instagram</TituloCarrusel>
            <Carousel responsive={responsive} infinite={true} showDots={true} enterMode={true}>
                <CarrouselImg><Image src={imgcomida1} alt="Comida1" /></CarrouselImg>                
                <CarrouselImg><Image src={imgcomida2} alt="Comida2" /></CarrouselImg>
                <CarrouselImg><Image src={imgcomida3} alt="Comida3" /></CarrouselImg>
                <CarrouselImg><Image src={imgcomida4} alt="Comida4" /></CarrouselImg>
                <CarrouselImg><Image src={imgcomida5} alt="Comida5" /></CarrouselImg>
                <CarrouselImg><Image src={imgcomida1} alt="Comida1" /></CarrouselImg>
                <CarrouselImg><Image src={imgcomida2} alt="Comida2" /></CarrouselImg>
                <CarrouselImg><Image src={imgcomida3} alt="Comida3" /></CarrouselImg>
                <CarrouselImg><Image src={imgcomida4} alt="Comida4" /></CarrouselImg>
                <CarrouselImg><Image src={imgcomida5} alt="Comida5" /></CarrouselImg>
                <CarrouselImg><Image src={imgcomida1} alt="Comida1" /></CarrouselImg>
                <CarrouselImg><Image src={imgcomida2} alt="Comida2" /></CarrouselImg>
            </Carousel>
        </Div>
    )
}
export default Instagram;