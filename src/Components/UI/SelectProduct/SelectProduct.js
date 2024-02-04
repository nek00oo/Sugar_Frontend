import s from "./Select.module.css";

const SelectProduct = (props) => {
    return (
        <div className={s.Border}>
            <input className={s.Input} {...props}/>
        </div>
    );
}

export default SelectProduct;