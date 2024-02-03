import React from 'react';
import s from './BurgerButton.module.css'
const BurgerButton = (props) => {
    return (
        <button className={s.btn}><img src={process.env.PUBLIC_URL + "/Menu.svg"} alt={"Menu"} {...props}/></button>
    );
};

export default BurgerButton;