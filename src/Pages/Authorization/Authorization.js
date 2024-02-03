import s from "../../Components/UI/Wrapper.module.css";
import CreateAccount from "./CreateAccount/CreateAccount";
import s1 from "./Authorization.module.css"
import BorderInput from "../../Components/UI/Input/BorderInput";
import BorderButton from "../../Components/UI/Button/BorderButton/BorderButton";
import Header from "../../Components/Header/Header";
import BurgerButton from "../../Components/UI/Button/BurgerButton/BurgerButton";

const Authorization = () => {
    return (
        <div className={s.Wrapper}>
            <Header left={<BurgerButton/>} center={"Авторизация"}/>
            <div className={s1.Body}>
            <form className={s1.Form}>
                <BorderInput placeholder={'Логин'}/>
                <BorderInput placeholder={'Пароль'} type={"password"}/>
                <BorderButton type={"submit"}>далее</BorderButton>
            </form>
            <CreateAccount/>
            </div>
        </div>
    );
}

export default Authorization;