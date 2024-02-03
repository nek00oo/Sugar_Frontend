import s from "./Header.module.css"

const Header = ({left, center, right}) => {
    return (
        <header className={s.Header}>
            <div className={s.header__container}>
                <div className={s.start_element}>{left}</div>
                <div className={s.center_element}>{center}</div>
                <div className={s.end_element}>{right}</div>
            </div>
        </header>
    );
}

export default Header;