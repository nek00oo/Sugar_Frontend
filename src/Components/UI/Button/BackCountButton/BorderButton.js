import s from "./Button.module.css";

const BorderButton = ({props, children}) => {
    return (
        <div className={s.Border}>
            <button className={s.Button} {...props} >{children}</button>
        </div>
    );
}

export default BorderButton;