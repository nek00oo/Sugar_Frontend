import s from "./Body.module.css"
import BorderInput from "../../UI/Input/BorderInput";
import BorderButton from "../../UI/Button/BorderButton";
import PlaceHolder from "../../UI/PlaceHolder/PlaceHolder";
import {useState} from "react";
const Body = () => {
    const [name, setName] = useState("ad")
    const [login, setLogin] = useState("ad")
    const [height, setHeight] = useState("ad")
    const [weight, setWeight] = useState("150кг")
    return (
        <div className={s.Body}>
            <div className={s.Form}>
                <img src={process.env.PUBLIC_URL + "/Group 14.svg"} alt={"12"}/>
                <PlaceHolder>Имя: {name}</PlaceHolder>
                <PlaceHolder>Логин: {login}</PlaceHolder>
                <PlaceHolder>Ваши показатели</PlaceHolder>
                <PlaceHolder>Рост: {height}</PlaceHolder>
                <PlaceHolder>Вес: {weight}</PlaceHolder>
            </div>
        </div>
    );
}

export default Body;