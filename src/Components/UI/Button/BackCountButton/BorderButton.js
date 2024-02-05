import s from "./Button.module.css";

const BackCountButton = (props) => {
    return (
        <div className={s.Border}>
            <button className={s.Button} {...props} >{props.children}</button>
        </div>
    );
}

export default BackCountButton;