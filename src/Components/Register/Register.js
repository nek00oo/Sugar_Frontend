import s from "../UI/Wrapper.module.css"
import Header from "../Header/NavBarHeader/Header";
import Body from "./Body/Body";
const Register = () => {
    const InputComponents = [
        { type: 'text', placeholder: 'Имя' },
        { type: 'text', placeholder: 'Логин' },
        { type: 'text', placeholder: 'Пароль' },
    ];
    return (
        <div className={s.Wrapper}>
            <Header title="Регистрация"/>
            <Body title="Регистрация" InputComponents={InputComponents} button="далее"/>
        </div>
    );
}

export default Register;