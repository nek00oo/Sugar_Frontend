import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {BurgerContext} from "../../../Context/BurgerContext";
const Header = ({title}) => {
    const {Burger, setBurger} = useContext(BurgerContext)
    return (
        <header className={s.Header}>
            <div className={s.header__container}>
                <div className={s.start_element}>
                    <button className={s.btn} onClick={() => setBurger(true)}><img src={process.env.PUBLIC_URL + "/Menu.svg"} alt="Menu"/></button>
                </div>
                <div className={s.center_element}>{title}</div>
                <div className={s.end_element}>
                    <NavLink to="/account">
                        <img src={process.env.PUBLIC_URL + "/Icon.svg"} alt="Icon"/>
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header;