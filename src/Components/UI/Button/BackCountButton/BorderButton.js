import s from "./Button.module.css";

const BackCountButton = ({props, children}) => {
    return (
        <div className={s.Border}>
            <button className={s.Button} {...props} >{children}</button>
        </div>
    );
}

export default BackCountButton;