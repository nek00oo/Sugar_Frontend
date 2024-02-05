import React, {useState} from 'react';
import s from './ProductCard.module.css'
import Modal from "../Modal/Modal";
const ProductCard = ({name, id}) => {
    const [modal, setModal] = useState(false)


    return (
        <button className={s.Product} key={id} onClick={() => setModal(true)}>
            <h3 className={s.Text}>{name}</h3>
            <Modal modal={modal} setModal={setModal}>
                <input placeholder={"test"}/>
                <input placeholder={"test"}/>
                <input placeholder={"test"}/>
                <input placeholder={"test"}/>
                <input placeholder={"test"}/>
                <input placeholder={"test"}/>
            </Modal>
        </button>
    );
};

export default ProductCard;