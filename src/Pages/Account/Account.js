import s from "../../Components/UI/Wrapper.module.css"
import s1 from "./Account.module.css"
import s2 from "../../Components/UI/Form.module.css"
import PlaceHolder from "../../Components/UI/PlaceHolder/PlaceHolder";
import {useContext, useState} from "react";
import {UserContext} from "../../Context/UserContext";
import Header from "../../Components/Header/Header";
import ArrowButton from "../../Components/UI/Button/ArrowButton/ArrowButton";
import UserButton from "../../Components/UI/Button/UserButton/UserButton";
import Chart from "./Data/Statictics";
import PlaceHolderInput from "../../Components/UI/PlaceHolderInput/PlaceHolderInput";
const Account = () => {
    const {User} = useContext(UserContext)
    const [edit, setEdit] = useState(false)

    const [name, setName] = useState("")
    const [login, setLogin] = useState("")
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")


    const apply = () => {}
    const reset = () => {}


    return (
        <div className={s.Wrapper}>
            <Header left={<ArrowButton/>} center={"Aккаунт"} right={<UserButton onClick={() => setEdit(true)}/>}/>
            <div className={s2.Body}>
                <div className={`${s2.Form} ${s1.Form}`}>
                    <img src={process.env.PUBLIC_URL + "/Group 14.svg"} alt={"12"}/>
                    <PlaceHolderInput type={"text"} disabled>Имя:</PlaceHolderInput>
                    <PlaceHolderInput>Логин:</PlaceHolderInput>
                    <PlaceHolder>Ваши показатели</PlaceHolder>
                    <PlaceHolderInput>Рост:</PlaceHolderInput>
                    <PlaceHolderInput>Вес:</PlaceHolderInput>
                    {
                        edit
                        ?
                            <div className={s1.edit}>
                                <button className={s1.apply_btn} onClick={() => setEdit(false)}>apply</button>
                                <button className={s1.reset_btn} onClick={() => setEdit(false)}>reset</button>
                            </div>
                        :
                            <></>
                    }
                </div>
                <div className={s2.Form}>
                    <div className={s1.Graph}>
                        <Chart/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;