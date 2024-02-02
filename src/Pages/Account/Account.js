import s from "../../Components/UI/Wrapper.module.css"
import s1 from "./Account.module.css"
import Header from "../../Components/Header/AccountHeader/Header";
import PlaceHolder from "../../Components/UI/PlaceHolder/PlaceHolder";
import {useContext} from "react";
import {UserContext} from "../../Context/UserContext";
const Account = () => {
    const {User} = useContext(UserContext)
    return (
        <div className={s.Wrapper}>
            <Header/>
            <div className={s1.Body}>
                <div className={s1.Form}>
                    <img src={process.env.PUBLIC_URL + "/Group 14.svg"} alt={"12"}/>
                    <PlaceHolder>Имя: {User.name}</PlaceHolder>
                    <PlaceHolder>Логин: {User.login}</PlaceHolder>
                    <PlaceHolder>Ваши показатели</PlaceHolder>
                    <PlaceHolder>Рост: {User.height}</PlaceHolder>
                    <PlaceHolder>Вес: {User.weight}</PlaceHolder>
                </div>
            </div>
        </div>
    );
}

export default Account;