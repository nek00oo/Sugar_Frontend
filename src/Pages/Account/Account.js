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
import axios from "axios";

const Account = () => {
    const {User, setUser} = useContext(UserContext)
    const [edit, setEdit] = useState(false)

    const [id] = useState(User.id)
    const [name, setName] = useState(User.name)
    const [birthday, setBirthday] = useState(User.birthday)
    const [login, setLogin] = useState(User.login)
    const [height, setHeight] = useState(User.height)
    const [weight, setWeight] = useState(User.weight)
    const [bread_unit, setBreadUnit] = useState(User.bread_unit)
    const [carbohydrate_ratio, setCarbohydrateRatio] = useState(User.carbohydrate_ratio)
    const [gender] = useState(User.gender)

    const navigate = useNavigate();

    const apply = async () => {
        try {
            const updatedUser = {
                id: parseInt(id, 10),
                new_name: name,
                new_birthday: birthday,
                new_bread_unit: parseInt(bread_unit, 10),
                new_carbohydrate_ratio: parseInt(carbohydrate_ratio, 10),
                new_gender: gender,
                new_weight: parseInt(weight, 10),
                new_height: parseInt(height, 10)
            };

            const response = await axios.put('http://localhost:8080/user', updatedUser);

            setUser({
                id: id,
                login: login,
                password: User.password,
                name: name,
                gender: gender,
                birthday: birthday,
                height: height,
                weight: weight,
                bread_unit: bread_unit,
                carbohydrate_ratio: carbohydrate_ratio,
                current_bread_unit_day: User.current_bread_unit_day
            });
            setEdit(false);
        } catch (error) {
            console.error("Error updating user information:", error);
        }
    };
    const reset = () => {
        setName(User.name)
        setLogin(User.login)
        setHeight(User.height)
        setWeight(User.weight)
        setBreadUnit(User.bread_unit)
        setCarbohydrateRatio(User.carbohydrate_ratio)
        setEdit(false);
    }

    return (
        <div className={s.Wrapper}>
            <Header left={<ArrowButton onClick={() => navigate('/product')}/>} center={"Aккаунт"} right={<PenButton onClick={() => setEdit(true)}/>}/>
            <div className={s2.Body}>
                <div className={`${s2.Form} ${s1.Form}`}>
                    <img src={process.env.PUBLIC_URL + "/Group 14.svg"} alt={"12"}/>
                    <PlaceHolderInput type={"text"} disabled={!edit} value={name} onChange={(e) => setName(e.target.value)} >Имя:</PlaceHolderInput>
                    <PlaceHolderInput type={"text"} disabled={!edit} value={login} onChange={(e) => setLogin(e.target.value)}>Логин:</PlaceHolderInput>
                    <PlaceHolderInput type={"date"} disabled={!edit} value={birthday} onChange={(e) => setBirthday(e.target.value)}>Дата рождения:</PlaceHolderInput>
                    <PlaceHolder>Ваши показатели</PlaceHolder>
                    <PlaceHolderInput type={"text"} disabled={!edit} value={height} onChange={(e) => setHeight(e.target.value)}>Рост (см):</PlaceHolderInput>
                    <PlaceHolderInput type={"text"} disabled={!edit} value={weight} onChange={(e) => setWeight(e.target.value)}>Вес (кг):</PlaceHolderInput>
                    <PlaceHolderInput type={"text"} disabled={!edit} value={bread_unit} onChange={(e) => setBreadUnit(e.target.value)}>Суточная норма ХЕ:</PlaceHolderInput>
                    <PlaceHolderInput type={"text"} disabled={!edit} value={carbohydrate_ratio} onChange={(e) => setCarbohydrateRatio(e.target.value)}>УК:</PlaceHolderInput>
                    {
                        edit
                            ?
                            <div className={s1.edit}>
                                <button className={s1.apply_btn} onClick={apply}>apply</button>
                                <button className={s1.reset_btn} onClick={reset}>reset</button>
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