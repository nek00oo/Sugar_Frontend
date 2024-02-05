import React from 'react';
import s from './TakenProduct.module.css'
const TakenProduct = ({name, id, del, mass}) => {
    return (
        <div className={s.menu__item}>
            <img className={s.minus} src={process.env.PUBLIC_URL + "/minus.svg"} onClick={() => del(id)} alt={"minus"}></img>
            <div className={s.Product}>
                <h3 className={s.Text}>{name}</h3>
                <h3 className={s.Text}>{mass}</h3>
            </div>
        </div>
    );
};

export default TakenProduct;