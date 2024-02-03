import React from 'react';
import s from './PenButton.module.css'
const PenButton = (props) => {
    return (
        <button className={s.btn}><img src={process.env.PUBLIC_URL + "/Group 16.svg"} alt={"User"} {...props}/></button>
    );
};

export default PenButton;