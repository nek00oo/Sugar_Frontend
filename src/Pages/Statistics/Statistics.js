import s from '../../Components/UI/Wrapper.module.css'
import s1 from '../../Components/UI/Form.module.css'
import Chart from "./Data/Chart";
import Header from "../../Components/Header/Header";
import BurgerButton from "../../Components/UI/Button/BurgerButton/BurgerButton";
import BurgerMenu from "../../Components/UI/Burger/Burger";
import {useContext} from "react";
import {BurgerContext} from "../../Context/BurgerContext";
import UserButton from "../../Components/UI/Button/UserButton/UserButton";
import {useNavigate} from "react-router-dom";

const Statistics = () => {
    const {setBurger} = useContext(BurgerContext)

    const burgerLinks = [{route: "/product", name: "Продукты"}]
    const navigate = useNavigate()

    return (
        <div className={s.Wrapper}>
            <Header left={<BurgerButton onClick={() => setBurger(true)}/>} center={"Статистика"} right={<UserButton onClick={() => navigate('/account')}/>}/>
            <BurgerMenu links={burgerLinks}/>
            <div className={s1.Body}>
                <div className={s1.Form}>
                    <Chart/>
                </div>
            </div>
        </div>
    );
}

export default Statistics;