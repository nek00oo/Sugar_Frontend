import s from "../UI/Wrapper.module.css";
import Header from "../Header/NavBarHeader/Header";
import Body from "./Body/Body";

const Statistics = () => {
    return (
        <div className={s.Wrapper}>
            <Header title="Статистика"/>
            <Body/>
        </div>
    );
}

export default Statistics;