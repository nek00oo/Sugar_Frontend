import s from "./Header.module.css"
const Header = () => {
    return (
        <header className={s.Header}>
            <div className={s.header__container}>
                <div className={s.start_element}>
                    <img src={process.env.PUBLIC_URL + "/arrow.svg"} alt="Menu"/>
                </div>
                <div className={s.center_element}>Аккаунт</div>
                <div className={s.end_element}>
                    <img src={process.env.PUBLIC_URL + "/Group 16.svg"} alt="Icon"/>
                </div>
            </div>
        </header>
    );
}

export default Header;