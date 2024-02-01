import s from "../UI/Wrapper.module.css";
import Header from "../Header/NavBarHeader/Header";
import Body from "../Register/Body/Body";

const Authorization = () => {
    const InputComponents = [
        { type: 'text', placeholder: 'Логин' },
        { type: 'text', placeholder: 'Пароль' },
    ];
    return (
        <div className={s.Wrapper}>
            <Header/>
            <Body title="Авторизация" InputComponents={InputComponents} button="войти"/>
        </div>
    );
}

export default Authorization;