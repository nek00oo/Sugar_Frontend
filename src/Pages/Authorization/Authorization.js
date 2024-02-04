import s from "../../Components/UI/Wrapper.module.css";
import CreateAccount from "./CreateAccount/CreateAccount";
import s1 from "./Authorization.module.css"
import BorderInput from "../../Components/UI/Input/BorderInput";
import BorderButton from "../../Components/UI/Button/BorderButton/BorderButton";
import Header from "../../Components/Header/Header";
import BurgerButton from "../../Components/UI/Button/BurgerButton/BurgerButton";
import BurgerMenu from "../../Components/UI/Burger/Burger";
import {useContext} from "react";
import {BurgerContext} from "../../Context/BurgerContext";

const Authorization = () => {
    const {setBurger} = useContext(BurgerContext)
    const burgerLinks = [{route: "/register", name: "Регистрация"}]
    return (
        <div className={s.Wrapper}>
            <Header left={<BurgerButton onClick={() => setBurger(true)}/>} center={"Колись"}/>
            <BurgerMenu links={burgerLinks}/>
            <div className={s1.Body}>
                <form className={s1.Form}>
                    <div><h2 className={s1.Header}>Авторизация</h2></div>
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