import s from "./Input.module.css";

const BorderInput = ({type, placeholder}) => {
    return (
        <div className={s.Border}>
            <input className={s.Input} type={type} placeholder={placeholder}/>
        </div>
    );
}

export default BorderInput;