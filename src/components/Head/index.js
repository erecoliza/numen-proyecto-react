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
                <a href="#" draggable="false"><Logo src={logo} alt="Bakery-Logo" draggable="false"/></a>
                <Menu />
                <a href="#" draggable="false"><Search src={search} alt="Search-Logo" draggable="false"/></a>
                <a href="#" draggable="false"><Profile src={profile} alt="Profile-Logo" draggable="false"/></a>
                <a href="#" draggable="false"><Ellipse src={ellipse} alt="Shopping-Logo" draggable="false"/><Shopping src={shopping} alt="Shopping-Logo" draggable="false"/></a>
            </Div>
        </>
    )
}
export default Head;


