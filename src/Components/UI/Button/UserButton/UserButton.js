import React from 'react';
import s from './UserButton.module.css'
const UserButton = (props) => {
    return (
        <button className={s.btn}><img src={process.env.PUBLIC_URL + "/Icon.svg"} alt={"Icon"} {...props}/></button>
    );
};

export default UserButton;