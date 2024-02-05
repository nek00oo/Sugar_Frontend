import React from 'react';
import s from './Modal.module.css'
const Modal = ({children, modal, setModal}) => {
    const rootClasses = [s.Modal]

    if (modal) {
        rootClasses.push(s.active)
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={s.ModalContent} onClick={(e) => e.stopPropagation()}>
                <div className={s.exitBtn}>
                    <button onClick={() => setModal(false)}>X</button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;