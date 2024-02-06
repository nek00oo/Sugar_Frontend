import s from '../../Components/UI/Wrapper.module.css'
import s1 from '../../Components/UI/Form.module.css'
import s2 from './Statistics.module.css'
import Chart from "./Data/Chart";
import Header from "../../Components/Header/Header";
import BurgerButton from "../../Components/UI/Button/BurgerButton/BurgerButton";
import BurgerMenu from "../../Components/UI/Burger/Burger";
import {useContext, useEffect, useState} from "react";
import {BurgerContext} from "../../Context/BurgerContext";
import UserButton from "../../Components/UI/Button/UserButton/UserButton";
import {useNavigate} from "react-router-dom";
import Modal from "../../Components/UI/Modal/Modal";
import BorderButton from "../../Components/UI/Button/BorderButton/BorderButton";
import PlaceHolderInput from "../../Components/UI/PlaceHolderInput/PlaceHolderInput";

const Statistics = () => {
    const {setBurger} = useContext(BurgerContext)

    const [time, setTime] = useState([])
    const [sugar, setSugar] = useState([])

    const [time_c, setTime_c] = useState("")
    const [sugar_c, setSugar_c] = useState(0)

    useEffect(() => {

    }, [time]);

    const [modal, setModal] = useState(false)
    const burgerLinks = [{route: "/product", name: "Продукты"}]
    const navigate = useNavigate()


    return (
        <div className={s.Wrapper}>
            <Header left={<BurgerButton onClick={() => setBurger(true)}/>} center={"Статистика"} right={<UserButton onClick={() => navigate('/account')}/>}/>
            <BurgerMenu links={burgerLinks}/>
            <div className={s1.Body}>
                <div className={s1.Form}>
                    <Chart labels={time} data={sugar}/>
                </div>
                <div className={s1.Form}>
                    <button onClick={() => setModal(true)} className={s2.Sugar_btn}>
                        <img className={s2.Plus} src={process.env.PUBLIC_URL + "/plus.svg"} alt={"plus"}/>
                        <h3 className={s2.Text}>Добавить сахар</h3>
                    </button>
                </div>
                <Modal modal={modal} setModal={setModal}>
                    <PlaceHolderInput type={"time"} value={time_c} onChange={(e) => setTime_c(e.target.value)}>Время</PlaceHolderInput>
                    <PlaceHolderInput type={"number"} value={sugar_c} onChange={(e) => setSugar_c(e.target.value)}>Сахар</PlaceHolderInput>
                    <BorderButton onClick={()=> {setModal(false); setSugar([...sugar, sugar_c]); setTime([...time, time_c])}}>Добавить</BorderButton>
                </Modal>
            </div>

        </div>
    );
}

export default Statistics;