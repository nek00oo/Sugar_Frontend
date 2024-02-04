import s from "./CreateAccount.module.css"
import s1 from "../../../Components/UI/Form.module.css"
import {Link} from "react-router-dom";
const CreateAccount = () => {
    return (
            <div className={`${s1.Form} ${s.Form}`}>
                <div><h1 className={`${s1.Header} ${s.Header}`}>Ещё нет аккаунта ?</h1></div>
                    <div className={s.Border}>
                    <Link className={s.Button} to={"/register"}>Создать</Link>
                    </div>
            </div>
    );
}

export default CreateAccount;