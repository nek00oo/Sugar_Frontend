import s from "../../Components/UI/Wrapper.module.css"
import s1 from "./Register.module.css"
import BorderInput from "../../Components/UI/Input/BorderInput";
import BorderButton from "../../Components/UI/Button/BorderButton/BorderButton";
import {useContext, useState} from "react";
import {UserContext} from "../../Context/UserContext";
import {AuthContext} from "../../Context/AuthContext";
import Header from "../../Components/Header/Header";
import BurgerButton from "../../Components/UI/Button/BurgerButton/BurgerButton";
import {BurgerContext} from "../../Context/BurgerContext";
import BurgerMenu from "../../Components/UI/Burger/Burger";
const Register = () => {
    const {setUser} = useContext(UserContext)
    const {setAuth} = useContext(AuthContext)
    const {setBurger} = useContext(BurgerContext)

    const [name, setName] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const reg = (event) => {
        event.preventDefault()
        setUser({
            name: name,
            login: login,
            password: password,
        })
        setAuth(true)
    }

    const burgerLinks = [{route: "/authorization", name: "Авторизация"}]


    return (
        <div className={s.Wrapper}>
            <Header left={<BurgerButton onClick={() => setBurger(true)}/>} center={"Колись"}/>
            <BurgerMenu links={burgerLinks}/>
            <div className={s1.Body}>
                <form className={s1.Form} onSubmit={reg}>
                    <div><h2 className={s1.Header}>Регистрация</h2></div>
                    <BorderInput placeholder={'Имя'} onChange={(e) => setName(e.target.value)}/>
                    <BorderInput placeholder={'Логин'} onChange={(e) => setLogin(e.target.value)}/>
                    <BorderInput placeholder={'Пароль'} type={"password"}
                                 onChange={(e) => setPassword(e.target.value)}/>
                    <BorderButton type={"submit"}>далее</BorderButton>
                </form>
            </div>
        </div>
    );
}

export default Register;