import s from "../../Components/UI/Wrapper.module.css"
import s1 from "./Register.module.css"
import Header from "../../Components/Header/NavBarHeader/Header";
import BorderInput from "../../Components/UI/Input/BorderInput";
import BorderButton from "../../Components/UI/Button/BorderButton";
import {useContext, useState} from "react";
import {UserContext} from "../../Context/UserContext";
import {AuthContext} from "../../Context/AuthContext";
const Register = () => {
    const {user, setUser} = useContext(UserContext)
    const {setAuth} = useContext(AuthContext)

    const [name, setName] = useState('')

    const reg = (event) => {
        event.preventDefault()
        console.log(name)
        setUser({
            name: name,
        })
    }


    return (
        <div className={s.Wrapper}>
            <Header title="Регистрация"/>
            <div className={s1.Body}>
                <form className={s1.Form} onSubmit={reg}>
                    <div><h2 className={s1.Header}>Регистрация</h2></div>
                    <BorderInput placeholder={'Имя'} type={'text'} onChange={(e) => setName(e.target.value)}/>
                    <BorderInput placeholder={'Логин'} />
                    <BorderInput placeholder={'Пароль'} type={"password"}/>
                    <BorderButton type={"submit"}>далее</BorderButton>
                </form>
            </div>
        </div>
    );
}

export default Register;