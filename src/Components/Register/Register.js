import s from "./Register.module.css"
import Header from "../Header/Header";
import Body from "./Body/Body";
const Register = () => {
    return (
        <div className={s.Wrapper}>
            <Header/>
            <Body/>
        </div>
    );
}

export default Register;