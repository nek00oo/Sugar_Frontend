import s from "../../Components/UI/Wrapper.module.css";
import CreateAccount from "./CreateAccount/CreateAccount";
import s1 from "../../Components/UI/Form.module.css"
import BorderInput from "../../Components/UI/Input/BorderInput";
import BorderButton from "../../Components/UI/Button/BorderButton/BorderButton";
import Header from "../../Components/Header/Header";
import BurgerButton from "../../Components/UI/Button/BurgerButton/BurgerButton";
import BurgerMenu from "../../Components/UI/Burger/Burger";
import {useContext, useState} from "react";
import {BurgerContext} from "../../Context/BurgerContext";
import axios from "axios";
import {UserContext} from "../../Context/UserContext";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../Context/AuthContext";

const Authorization = () => {
    const {setBurger} = useContext(BurgerContext)
    const {User, setUser} = useContext(UserContext)
    const {setAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    const burgerLinks = [{route: "/register", name: "Регистрация"}]

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const fetchUserInformation = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/user`, {
                params: {
                    login,
                    password
                }
            });
            const user = response.data.Data;
            if (user) {
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
                    m_res: 100,
                    c_res: 100
                });
                setAuth(true);
                console.log("response.data:", response.data);
                console.log("user: ", user);
                console.log("User: ", User);
                navigate("/product");
            }

        } catch (error) {
            console.error("Error fetching user information:", error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchUserInformation();
    };

    return (
        <div className={s.Wrapper}>
            <Header left={<BurgerButton onClick={() => setBurger(true)}/>} center={"Колись"}/>
            <BurgerMenu links={burgerLinks}/>
            <div className={s1.Body}>
                <form className={s1.Form} onSubmit={handleSubmit}>
                    <div><h2 className={s1.Header}>Авторизация</h2></div>
                    <BorderInput
                        placeholder={'Логин'}
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <BorderInput
                        placeholder={'Пароль'}
                        type={"password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <BorderButton type={"submit"}>далее</BorderButton>
                </form>
                <CreateAccount/>
            </div>
        </div>
    );
}

export default Authorization;