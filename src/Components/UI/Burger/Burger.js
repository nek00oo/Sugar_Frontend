import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import s from "./Burger.module.css"
import {BurgerContext} from "../../../Context/BurgerContext";

const BurgerMenu = () => {
    const {Burger, setBurger} = useContext(BurgerContext)
    const [startX, setStartX] = useState(null);

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (startX && e.touches[0].clientX - startX > 50) {
            setBurger(false);
            setStartX(null);
        }
    };

    const toggleMenu = () => {
        setBurger(!Burger);
    };

    return (
        <div
            className={Burger ? s.burger_menu_open : s.burger_menu}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <div className={s.menu}>
                <Link to="/" onClick={toggleMenu}>Главная</Link>
                <Link to="/about" onClick={toggleMenu}>О нас</Link>
                <Link to="/contact" onClick={toggleMenu}>Контакты</Link>
            </div>
        </div>
    );
};

export default BurgerMenu;