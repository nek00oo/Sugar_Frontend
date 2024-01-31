import s from "./Body.module.css"
import BorderInput from "../../UI/Input/BorderInput";
import BorderButton from "../../UI/Button/BorderButton";
const Body = () => {
    return (
        <div className={s.Body}>
            <div className={s.Form}>
                <div><h1 className={s.Header}>Регистрация</h1></div>
                <BorderInput type={"text"} placeholder={"Имя"}/>
                <BorderInput type={"text"} placeholder={"Логин"}/>
                <BorderInput type={"text"} placeholder={"Пароль"}/>
                <BorderButton>войти</BorderButton>
            </div>
        </div>
    );
}

export default Body;