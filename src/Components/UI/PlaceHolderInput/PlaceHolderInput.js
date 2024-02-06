import s from "./PlaceHolder.module.css";

const PlaceHolderInput = (props) => {
    return (
        <div className={s.PlaceHolder}>
            <h2>{props.children}</h2>
            <input className={s.Input} value={props.value} disabled={props.disabled} onChange={props.onChange} type={props.type}/>
        </div>
    );
}

export default PlaceHolderInput;