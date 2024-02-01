import s from "./Body.module.css"
import BorderInput from "../../UI/Input/BorderInput";
import BorderButton from "../../UI/Button/BorderButton";
const Body = ({title, InputComponents, button}) => {
    return (
        <div className={s.Body}>
            <div className={s.Form}>
                <div><h1 className={s.Header}>{title}</h1></div>
                {InputComponents.map(({type, placeholder}, index) => (
                    <BorderInput key={index} type={type} placeholder={placeholder} />
                ))}
                <BorderButton>{button}</BorderButton>
            </div>
        </div>
    );
}

export default Body;