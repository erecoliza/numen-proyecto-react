import imgcomida1 from '../../assets/carousel/comida1.png';
import imgcomida2 from '../../assets/carousel/comida2.png';
import imgcomida3 from '../../assets/carousel/comida3.png';
import imgcomida4 from '../../assets/carousel/comida4.png';
import imgcomida5 from '../../assets/carousel/comida5.png';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { CarrouselImg, Div, Link, TituloCarrusel, Image, } from './instagram.styled';

const Instagram = () => {
    return (
        <Div >
            <TituloCarrusel><Link href="@PremiumBakeryQuality">@PremiumBakeryQuality</Link> on Instagram</TituloCarrusel>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 5                        
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 3
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                <CarrouselImg><Image src={imgcomida1} alt="Comida1" draggable="false"/></CarrouselImg>
                <CarrouselImg><Image src={imgcomida2} alt="Comida2" draggable="false"/></CarrouselImg>
                <CarrouselImg><Image src={imgcomida3} alt="Comida3" draggable="false"/></CarrouselImg>
                <CarrouselImg><Image src={imgcomida4} alt="Comida4" draggable="false"/></CarrouselImg>
                <CarrouselImg><Image src={imgcomida5} alt="Comida5" draggable="false"/></CarrouselImg>
                <CarrouselImg><Image src={imgcomida1} alt="Comida1" draggable="false"/></CarrouselImg>
                <CarrouselImg><Image src={imgcomida2} alt="Comida2" draggable="false"/></CarrouselImg>
                <CarrouselImg><Image src={imgcomida3} alt="Comida3" draggable="false"/></CarrouselImg>
                <CarrouselImg><Image src={imgcomida4} alt="Comida4" draggable="false"/></CarrouselImg>
                <CarrouselImg><Image src={imgcomida5} alt="Comida5" draggable="false"/></CarrouselImg>
                <CarrouselImg><Image src={imgcomida1} alt="Comida1" draggable="false"/></CarrouselImg>
                <CarrouselImg><Image src={imgcomida2} alt="Comida2" draggable="false"/></CarrouselImg>
            </Carousel>
        </Div>
    )
}
export default Instagram;