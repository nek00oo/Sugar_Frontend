import React from 'react';
import s from './TakenProduct.module.css'

const TakenProduct = (props) => {
    return (
        <div className={s.menu__item}>
            <img className={s.minus} src={process.env.PUBLIC_URL + "/minus.svg"} onClick={() => props.del(props.del_id)} alt={"minus"}></img>
            <div className={s.Product}>
                <h3 className={s.Text}>{props.name}</h3>
                <h3 className={s.Text}>{props.mass}г</h3>
            </div>
        </div>
    );
};

export default TakenProduct;