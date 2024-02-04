import s from "./PlaceHolder.module.css";

const PlaceHolderInput = ({props, children}) => {
    return (
        <div className={s.PlaceHolder}>
            <h2>{children}</h2>
            <input className={s.Input} {...props}/>
        </div>
    );
}

export default PlaceHolderInput;