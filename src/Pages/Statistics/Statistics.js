import s from '../../Components/UI/Wrapper.module.css';
import s1 from '../../Components/UI/Form.module.css';
import s2 from './Statistics.module.css';
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
import axios from 'axios';
import {UserContext} from "../../Context/UserContext";
import {formatDateDDMMYY} from "../../utils/FormatDate";

const Statistics = () => {
    const {setBurger} = useContext(BurgerContext);
    const {User} = useContext(UserContext)

    const [time, setTime] = useState([]);
    const [sugar, setSugar] = useState([]);
    const [date, setDate] = useState("");
    const [sugar_c, setSugar_c] = useState(0);
    const [modal, setModal] = useState(false);

    const burgerLinks = [{route: "/product", name: "Продукты"}];
    const navigate = useNavigate();

    const userId = parseInt(User.id, 10);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/note`, {
                params: {
                    'id': userId,
                }
            });
            const notes = response.data.Data;
            console.log(notes)
            const times = notes.map(note => formatDateDDMMYY(note['date-time']));
            const sugarLevels = notes.map(note => note['sugar-level']);

            setTime(times);
            setSugar(sugarLevels);
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const addNote = async () => {
        const noteType = "sugar";

        try {
            const response = await axios.post('http://localhost:8080/note', {
                'user-id': parseInt(userId),
                'note-type': noteType,
                'date-time': date,
                'sugar-level': parseInt(sugar_c)
            });
            console.log(response.data);
            console.log(date)
            await fetchData();
        } catch (error) {
            console.error("Error adding note:", error);
        }
    };

    const handleAddNote = () => {
        setModal(false);
        setSugar([...sugar, sugar_c]);
        setTime([...time, date]);
        addNote();
    };

    return (
        <div className={s.Wrapper}>
            <Header left={<BurgerButton onClick={() => setBurger(true)} />} center={"Статистика"} right={<UserButton onClick={() => navigate('/account')} />} />
            <BurgerMenu links={burgerLinks} />
            <div className={s1.Body}>
                <div className={s1.Form}>
                    <Chart labels={time} data={sugar} />
                </div>
                <div className={s1.Form}>
                    <button onClick={() => setModal(true)} className={s2.Sugar_btn}>
                        <img className={s2.Plus} src={process.env.PUBLIC_URL + "/plus.svg"} alt={"plus"} />
                        <h3 className={s2.Text}>Добавить сахар</h3>
                    </button>
                </div>
                <Modal modal={modal} setModal={setModal}>
                    <PlaceHolderInput type={"date"} value={date} onChange={(e) => setDate(e.target.value)}>Дата</PlaceHolderInput>
                    <PlaceHolderInput type={"number"} value={sugar_c} onChange={(e) => setSugar_c(e.target.value)}>Сахар</PlaceHolderInput>
                    <BorderButton onClick={handleAddNote}>Добавить</BorderButton>
                </Modal>
            </div>
        </div>
    );
}

export default Statistics;
