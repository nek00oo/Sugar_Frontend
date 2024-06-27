import s from "../../Components/UI/Wrapper.module.css";
import s1 from "../../Components/UI/Form.module.css";
import BorderInput from "../../Components/UI/Input/BorderInput";
import BorderButton from "../../Components/UI/Button/BorderButton/BorderButton";
import {useContext, useState} from "react";
import {UserContext} from "../../Context/UserContext";
import {AuthContext} from "../../Context/AuthContext";
import Header from "../../Components/Header/Header";
import BurgerButton from "../../Components/UI/Button/BurgerButton/BurgerButton";
import {BurgerContext} from "../../Context/BurgerContext";
import BurgerMenu from "../../Components/UI/Burger/Burger";
import axios from 'axios';

const Register = () => {
    const {setUser} = useContext(UserContext);
    const {setAuth} = useContext(AuthContext);
    const {setBurger} = useContext(BurgerContext);

    const [name, setName] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const reg = async (event) => {
        event.preventDefault();

        try {
            const response_post = await axios.post("http://localhost:8080/user", {
                login: login,
                password: password,
                name: name,
                birthday: "2000-01-01",
                gender: "male",
                weight: 1,
                'carbohydrate-ratio': 1,
                'bread-unit': 22,
                height : 1
            });

            const response_get = await axios.get(`http://localhost:8080/user`, {
                params: {
                    login,
                    password
                }
            });
            const user = response_get.data.Data;
            if (response_post.status === 200 && user) { //201
                setUser({
                    id: user.id,
                    login: user.login,
                    password: user.password,
                    name: user.UserInfo.name,
                    gender: user.UserInfo.gender,
                    birthday: user.UserInfo.birthday,
                    height: user.UserInfo.height,
                    weight: user.UserInfo.weight,
                    bread_unit: user.UserInfo['bread-unit'],
                    carbohydrate_ratio: user.UserInfo['carbohydrate-ratio'],
                    current_bread_unit_day: user.UserInfo['bread-unit'],
                });

                setAuth(true);
            } else {
                setError("Registration failed. Please try again.");
            }
        } catch (err) {
            console.error("Error during registration:", err);
            setError("An error occurred during registration. Please try again.");
        }
    };

    const burgerLinks = [{route: "/authorization", name: "Авторизация"}];

    return (
        <div className={s.Wrapper}>
            <Header left={<BurgerButton onClick={() => setBurger(true)}/>} center={"Колись"}/>
            <BurgerMenu links={burgerLinks}/>
            <div className={s1.Body}>
                <form className={s1.Form} onSubmit={reg}>
                    <div><h2 className={s1.Header}>Регистрация</h2></div>
                    {error && <p style={{ marginLeft: '5vw', fontSize: '4vw', color: 'red' }}>{error}</p>}
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
