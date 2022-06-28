import logo from "../../assets/Bakery-Logo.png";
import { useContext } from 'react';
import { MenuContext } from '../../App';
import { DivMenu, ItemMenu, MenuLink, MenuLink2, Logo, MenuContainer, Menulista, Pie, TituloMenu } from './foot.styled';

const Foot = () => {
    const menues = useContext(MenuContext);
    return (
        <Pie>
            <a href="#" draggable="false"><Logo src={logo} alt="Bakery-Logo" draggable="false" /></a>
            <MenuContainer>
                {menues.map(menu => (
                    menu.itemMenu.length > 0 ? (
                        <DivMenu>
                            <TituloMenu >{menu.titulo}</TituloMenu>
                            <Menulista >
                                {menu.itemMenu.map(item => (
                                    <ItemMenu >
                                        <MenuLink href={item.href}>{item.itemMenu}</MenuLink>
                                    </ItemMenu>
                                ))}
                            </Menulista>
                        </DivMenu>
                    ) : (
                        <DivMenu>
                            <MenuLink2 href={menu.href}>{menu.titulo}</MenuLink2>
                        </DivMenu>
                    )

                ))}
            </MenuContainer>
        </Pie>
    )
}
export default Foot;