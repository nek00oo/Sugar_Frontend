import s from "../../Components/UI/Wrapper.module.css"
import s1 from "./Authorization.module.css"
import Header from "../../Components/Header/NavBarHeader/Header";
import BorderInput from "../../Components/UI/Input/BorderInput";
import BorderButton from "../../Components/UI/Button/BorderButton";
const Register = () => {
    return (
        <div className={s.Wrapper}>
            <Header/>
            <div className={s1.Body}>
                <div className={s1.Form}>
                    <div><h1 className={s1.Header}>Авторизация</h1></div>
                    <BorderInput type={'text'} placeholder={'Логин'}/>
                    <BorderInput type={'text'} placeholder={'Пароль'}/>
                    <BorderButton>войти</BorderButton>
                </div>
            </div>
        </div>
    );
}

export default Register;