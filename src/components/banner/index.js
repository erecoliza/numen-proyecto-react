import bannerimg from '../../assets/banner-img.png';
import { BrowseBottom, Div, TextSubTitulo, TextTitulo, Titulo } from "./banner.styled";

const Banner = () => {
  return (
    <>
      <Div style={{ backgroundImage: `url("${bannerimg}")` }}>
        <Titulo />
          <TextTitulo>Support Your Local Artisans</TextTitulo>
          <TextSubTitulo>Discover brands and theit stories</TextSubTitulo>
        <Titulo />
        <BrowseBottom>Browse bands</BrowseBottom> 
      </Div>
    </>
  )
}
export default Banner;