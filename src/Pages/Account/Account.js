import s from "../../Components/UI/Wrapper.module.css"
import s1 from "./Account.module.css"
import s2 from "../../Components/UI/Form.module.css"
import PlaceHolder from "../../Components/UI/PlaceHolder/PlaceHolder";
import {useContext, useState} from "react";
import {UserContext} from "../../Context/UserContext";
import Header from "../../Components/Header/Header";
import ArrowButton from "../../Components/UI/Button/ArrowButton/ArrowButton";
import PlaceHolderInput from "../../Components/UI/PlaceHolderInput/PlaceHolderInput";
import PenButton from "../../Components/UI/Button/PenButton/PenButton";
import {useNavigate} from "react-router-dom";
const Account = () => {
    const {User, setUser} = useContext(UserContext)
    const [edit, setEdit] = useState(false)

    const [name, setName] = useState(User.name)
    const [login, setLogin] = useState(User.login)
    const [height, setHeight] = useState(User.height)
    const [weight, setWeight] = useState(User.weight)
    const [he, setHe] = useState(User.he)
    const [cc, setCc] = useState(User.cc)
    const [maxRes] = useState(User.m_res)
    const [res] = useState(User.c_res)


    const apply = () => {
        setUser({name: name, login: login, height: height, weight: weight, he: he, cc: cc, m_res: maxRes, c_res: res})
    }
    const reset = () => {
        setName(User.name)
        setLogin(User.login)
        setHeight(User.height)
        setWeight(User.weight)
        setHe(User.he)
        setCc(User.cc)
    }
    const navigate = useNavigate()

    return (
        <div className={s.Wrapper}>
            <Header left={<ArrowButton onClick={() => navigate('/product')}/>} center={"Aккаунт"} right={<PenButton onClick={() => setEdit(true)}/>}/>
            <div className={s2.Body}>
                <div className={`${s2.Form} ${s1.Form}`}>
                    <img src={process.env.PUBLIC_URL + "/Group 14.svg"} alt={"12"}/>
                    <PlaceHolderInput type={"text"} disabled={!edit} value={name} onChange={(e) => setName(e.target.value)} >Имя:</PlaceHolderInput>
                    <PlaceHolderInput type={"text"} disabled={!edit} value={login} onChange={(e) => setLogin(e.target.value)}>Логин:</PlaceHolderInput>
                    <PlaceHolder>Ваши показатели</PlaceHolder>
                    <PlaceHolderInput type={"text"} disabled={!edit} value={height} onChange={(e) => setHeight(e.target.value)}>Рост:</PlaceHolderInput>
                    <PlaceHolderInput type={"text"} disabled={!edit} value={weight} onChange={(e) => setWeight(e.target.value)}>Вес:</PlaceHolderInput>
                    <PlaceHolderInput type={"text"} disabled={!edit} value={he} onChange={(e) => setHe(e.target.value)}>ХЕ:</PlaceHolderInput>
                    <PlaceHolderInput type={"text"} disabled={!edit} value={cc} onChange={(e) => setCc(e.target.value)}>УК:</PlaceHolderInput>
                    {
                        edit
                        ?
                            <div className={s1.edit}>
                                <button className={s1.apply_btn} onClick={() => {setEdit(false); apply()}}>apply</button>
                                <button className={s1.reset_btn} onClick={() => {setEdit(false); reset()}}>reset</button>
                            </div>
                        :
                            <></>
                    }
                </div>
            </div>
        </div>
    );
}

export default Account;