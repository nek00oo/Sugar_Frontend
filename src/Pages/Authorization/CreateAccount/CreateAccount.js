import s from "./CreateAccount.module.css"
import BorderButton from "../../../Components/UI/Button/BorderButton/BorderButton";
const CreateAccount = () => {
    return (
        <div className={s.Body}>
            <div className={s.Form}>
                <div><h1 className={s.Header}>Ещё нет аккаунта ?</h1></div>
                    <BorderButton>Cоздать</BorderButton>
            </div>
        </div>
    );
}

export default CreateAccount;