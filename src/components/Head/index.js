import logo from "../../assets/Bakery-Logo.png";
import search from "../../assets/search.png";
import profile from "../../assets/profile.png";
import ellipse from "../../assets/ellipse.png";
import shopping from "../../assets/shopping.png";
import { Div, Logo, Search, Profile, Ellipse, Shopping } from "./head.styled";
import Menu from "../menu";

const Head = () => {    
    return (
        <>
            <Div>
                <a href="#"><Logo src={logo} alt="Bakery-Logo" /></a>
                <Menu />
                <a href="#"><Search src={search} alt="Search-Logo" /></a>
                <a href="#"><Profile src={profile} alt="Profile-Logo" /></a>
                <a href="#"><Ellipse src={ellipse} alt="Shopping-Logo" /><Shopping src={shopping} alt="Shopping-Logo" /></a>
            </Div>
        </>
    )
}
export default Head;


