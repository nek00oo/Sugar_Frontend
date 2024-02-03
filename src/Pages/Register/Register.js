import s from "../../Components/UI/Wrapper.module.css"
import s1 from "./Register.module.css"
import Header from "../../Components/Header/NavBarHeader/Header";
import BorderInput from "../../Components/UI/Input/BorderInput";
import BorderButton from "../../Components/UI/Button/BorderButton";
import {useContext, useState} from "react";
import {UserContext} from "../../Context/UserContext";
import {AuthContext} from "../../Context/AuthContext";
import BurgerMenu from "../../Components/UI/Burger/Burger";
const Register = () => {
    const {setUser} = useContext(UserContext)
    const {setAuth} = useContext(AuthContext)

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


    return (
        <div className={s.Wrapper}>
            <Header title="Регистрация"/>
            <BurgerMenu/>
            <div className={s1.Body}>
                <form className={s1.Form} onSubmit={reg}>
                    <div><h2 className={s1.Header}>Регистрация</h2></div>
                    <BorderInput placeholder={'Имя'} onChange={(e) => setName(e.target.value)}/>
                    <BorderInput placeholder={'Логин'} onChange={(e) => setLogin(e.target.value)}/>
                    <BorderInput placeholder={'Пароль'} type={"password"} onChange={(e) => setPassword(e.target.value)}/>
                    <BorderButton type={"submit"}>далее</BorderButton>
                </form>
            </div>
        </div>
    );
}

export default Register;