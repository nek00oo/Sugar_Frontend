import s from "../../Components/UI/Wrapper.module.css"
import s1 from "./Register.module.css"
import BorderInput from "../../Components/UI/Input/BorderInput";
import BorderButton from "../../Components/UI/Button/BorderButton/BorderButton";
import {useContext, useState} from "react";
import {UserContext} from "../../Context/UserContext";
import {AuthContext} from "../../Context/AuthContext";
import Header from "../../Components/Header/Header";
import BurgerButton from "../../Components/UI/Button/BurgerButton/BurgerButton";
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
            <Header left={<BurgerButton/>} center={"Регистрация"}/>
            <div className={s1.Body}>
                <form className={s1.Form} onSubmit={reg}>
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