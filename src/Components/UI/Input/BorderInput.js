import s from "./Input.module.css";

const BorderInput = (props) => {
    return (
        <div className={s.Border}>
            <input className={s.Input} {...props}/>
        </div>
    );
}

export default BorderInput;