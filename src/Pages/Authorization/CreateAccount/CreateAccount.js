import s from "./CreateAccount.module.css"
import {Link} from "react-router-dom";
const CreateAccount = () => {
    return (
        <div className={s.Body}>
            <div className={s.Form}>
                <div><h1 className={s.Header}>Ещё нет аккаунта ?</h1></div>
                    <div className={s.Border}>
                    <Link className={s.Button} to={"/register"}>Создать</Link>
                    </div>
            </div>
        </div>
    );
}

export default CreateAccount;