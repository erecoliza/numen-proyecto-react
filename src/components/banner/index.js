import bannerimg from '../../assets/banner-img.png';
import { Div } from "./banner.styled";

const Banner = () => {
    return (
      <>
        <Div style={{backgroundImage: `url("${bannerimg}")` }}>        
        </Div>
      </>
    )
  }
  export default Banner;