import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import s from "./Burger.module.css"
import {BurgerContext} from "../../../Context/BurgerContext";

const BurgerMenu = () => {
    const {Burger, setBurger} = useContext(BurgerContext)
    const [startX, setStartX] = useState(null)

    const toggleMenu = () => {
        setBurger(!Burger);
    };

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (startX && e.touches[0].clientX - startX < -50) {
            setBurger(false);
            setStartX(null);
        }
    };

    return (
        <div
            className={Burger ? s.burger_menu_open : s.burger_menu}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <div className={s.menu}>
                <Link to="/register" onClick={toggleMenu}>Главная</Link>
                <Link to="/about">О нас</Link>
                <Link to="/contact">Контакты</Link>
            </div>
        </div>
    );
};

export default BurgerMenu;