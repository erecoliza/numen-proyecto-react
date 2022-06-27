import logo from "../../assets/Bakery-Logo.png";
import { useContext } from 'react';
import { MenuContext } from '../../App';
import { DivMenu, ItemMenu, Logo, MenuContainer, Menulista, Pie, TituloMenu } from './foot.styled';

const Foot = () => {
    const menues = useContext(MenuContext);
    return (
        <Pie>
            <a href="#"><Logo src={logo} alt="Bakery-Logo" /></a>
            <MenuContainer>
                {menues.map(menu => (
                    <DivMenu>
                        <TituloMenu >{menu.titulo}</TituloMenu>
                        <Menulista >
                            {menu.itemMenu.map(item => (
                                <ItemMenu >
                                    <a href={item.href}>{item.itemMenu}</a>
                                </ItemMenu>
                            ))}
                        </Menulista>
                    </DivMenu>
                ))}
            </MenuContainer>
        </Pie>
    )
}
export default Foot;