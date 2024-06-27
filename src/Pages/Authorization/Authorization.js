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
import {formatDateYYMMDD} from "../../utils/FormatDate";

const Authorization = () => {
    const {setBurger} = useContext(BurgerContext)
    const {setUser} = useContext(UserContext)
    const {setAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    const burgerLinks = [{route: "/register", name: "Регистрация"}]

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(null)

    const fetchUserInformation = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/user`, {
                params: {
                    login,
                    password
                }
            });
            console.log("Console:", response)

            if (response.data.status === "Error"){
                setError("User not found")
            }

            const user = response.data.Data;
            if (user) {
                setUser({
                    id: user.id,
                    login: user.login,
                    password: user.password,
                    name: user.UserInfo.name,
                    gender: user.UserInfo.gender,
                    birthday: formatDateYYMMDD(user.UserInfo.birthday),
                    height: user.UserInfo.height,
                    weight: user.UserInfo.weight,
                    bread_unit: user.UserInfo['bread-unit'],
                    carbohydrate_ratio: user.UserInfo['carbohydrate-ratio'],
                    current_bread_unit_day: user.UserInfo['bread-unit'],
                });

                setAuth(true);
                navigate("/product");
            }
            console.log("response.data:", response.data);

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
                    {error && <p style={{ marginLeft: '5vw', fontSize: '4vw', color: 'red' }}>{error}</p>}
                    <BorderButton type={"submit"}>далее</BorderButton>
                </form>
                <CreateAccount/>
            </div>
        </div>
    );
}

export default Authorization;