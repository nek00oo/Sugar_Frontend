import s from "../../Components/UI/Wrapper.module.css";
import Header from "../../Components/Header/NavBarHeader/Header";
import CreateAccount from "./CreateAccount/CreateAccount";
import s1 from "./Authorization.module.css"
import BorderInput from "../../Components/UI/Input/BorderInput";
import BorderButton from "../../Components/UI/Button/BorderButton";

const Authorization = () => {
    return (
        <div className={s.Wrapper}>
            <Header title="Авторизация"/>
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