import logo from "../../assets/Bakery-Logo.png";
import dropimg from "../../assets/dropdown.png";
import { Anchor, Div, Dropbtn, Dropdown, Dropdowncontent, Image, Menu, Navbar, Anchores,Imagedrop } from "./head.styled";

const Head = () => {
    return (
      <>
        <Div>  
          <Image src={logo} alt="Bakery-Logo" />   
          <Menu>          
            <Navbar>
              <Dropdown>
                <Dropbtn>Occasions   
                   <Imagedrop src={dropimg} alt="dropmenu" />
                </Dropbtn>
                <Dropdowncontent>
                  <Anchores href="#">Occasions</Anchores>
                  <Anchores href="#">Working From Home</Anchores>
                  <Anchores href="#">Snack Time</Anchores>
                </Dropdowncontent>
              </Dropdown> 
              <Dropdown>
                <Dropbtn>All Categories   
                   <Imagedrop src={dropimg} alt="dropmenu" />
                </Dropbtn>
                <Dropdowncontent>
                  <Anchores href="#">Baking</Anchores>
                  <Anchores href="#">Breakfast</Anchores>
                  <Anchores href="#">Condiments</Anchores>
                </Dropdowncontent>
              </Dropdown> 
              <Anchor href="#Brands">Our Brands</Anchor>
              <Anchor href="#About">About Us</Anchor>
            </Navbar>          
          </Menu>              
       </Div>
      </>
    )
  }
  export default Head;
  