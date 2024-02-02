import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {BurgerContext} from "../../../Context/BurgerContext";
import BurgerMenu from "../../UI/Burger/Burger";
const Header = ({title}) => {
    const {Burger, setBurger} = useContext(BurgerContext)
    return (
        <div>
        <header className={s.Header}>
            <div className={s.header__container}>
                <div className={s.start_element}>
                    <button className={s.btn}><img src={process.env.PUBLIC_URL + "/Menu.svg"} onClick={setBurger(!Burger)} alt="Menu"/></button>
                </div>
                <div className={s.center_element}>{title}</div>
                <div className={s.end_element}>
                    <NavLink to="/account">
                        <img src={process.env.PUBLIC_URL + "/Icon.svg"} alt="Icon"/>
                    </NavLink>
                </div>
            </div>
        </header>
            <BurgerMenu/>
        </div>
    );
}

export default Header;