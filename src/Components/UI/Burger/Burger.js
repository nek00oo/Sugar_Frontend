import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import s from "./Burger.module.css"
import {BurgerContext} from "../../../Context/BurgerContext";
import {AuthContext} from "../../../Context/AuthContext";

const BurgerMenu = ({links}) => {
    const {Auth, setAuth} = useContext(AuthContext)
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
            className={`${s.burger_menu}${Burger ? ` ${s.open}` : ''}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <div className={s.first_element}>
                <div className={s.title}>КОЛИСЬ</div>
                <img className={s.logo} src={process.env.PUBLIC_URL + "/syringe.svg"} alt={"Logo"}/>
            </div>
            <div className={s.menu}>
                {links.map(link =>
                    <Link key={Date.now()} className={s.menu__item} to={link.route} onClick={toggleMenu}>{link.name}</Link>
                )}
                {Auth ? <Link className={s.menu__item} to={"/"} onClick={() =>{
                    toggleMenu()
                    setAuth(false)
                }}><h2>Выход</h2></Link> : <></>}
            </div>
        </div>
    );
};

export default BurgerMenu;