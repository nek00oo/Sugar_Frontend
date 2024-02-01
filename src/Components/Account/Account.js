import s from "../UI/Wrapper.module.css"
import Header from "../Header/AccountHeader/Header";
import Body from "./Body/Body";
const Account = () => {
    return (
        <div className={s.Wrapper}>
            <Header/>
            <Body/>
        </div>
    );
}

export default Account;