import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
const Header = ({title}) => {
    return (
        <header className={s.Header}>
            <div className={s.header__container}>
                <div className={s.start_element}>
                    <img src={process.env.PUBLIC_URL + "/Menu.svg"} alt="Menu"/>
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