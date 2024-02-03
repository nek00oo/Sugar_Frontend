import React from 'react';
import s from './Modal.module.css'
const Modal = ({children, visible}) => {
    const rootClasses = [s.Modal]

    if (visible) {
        rootClasses.push(s.active)
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={s.ModalContent}>
                {children}
            </div>
        </div>
    );
};

export default Modal;