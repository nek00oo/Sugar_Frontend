import s from "./PlaceHolder.module.css";

const PlaceHolder = ({props, children}) => {
    return (
        <div className={s.PlaceHolder}>
            <h2 {...props}>{children}</h2>
        </div>
    );
}

export default PlaceHolder;