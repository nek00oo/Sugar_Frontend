import React from 'react';
import s from './ArrowButton.module.css'
const ArrowButton = (props) => {
    return (
        <button className={s.btn}><img src={process.env.PUBLIC_URL + "/arrow.svg"} alt={"Back"} {...props}/></button>
    );
};

export default ArrowButton;