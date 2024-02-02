import s from "../UI/Wrapper.module.css";
import Header from "../Header/NavBarHeader/Header";
import Body from "../Register/Body/Body";
import CreateAccount from "./CreateAccount/CreateAccount";

const Authorization = () => {
    const InputComponents = [
        { type: 'text', placeholder: 'Логин' },
        { type: 'text', placeholder: 'Пароль' },
    ];
    return (
        <div className={s.Wrapper}>
            <Header title="Авторизация"/>
            <Body title="Авторизация" InputComponents={InputComponents} button="войти"/>
            <CreateAccount/>
        </div>
    );
}

export default Authorization;