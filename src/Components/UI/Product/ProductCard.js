import React, {useContext, useState} from 'react';
import s from './ProductCard.module.css'
import Modal from "../Modal/Modal";
import {TakenContext} from "../../../Context/TakenContext";
import BackCountButton from "../Button/BackCountButton/BorderButton";
const ProductCard = ({name, id}) => {
    const [modal, setModal] = useState(false)
    const {Taken, setTaken} = useContext(TakenContext)

    return (
        <div className={s.Pr}>
        <button className={s.Product}  key={id} onClick={() => setModal(true)}>
            <h3 className={s.Text}>{name}</h3>
        </button>
            <Modal modal={modal} setModal={setModal}>
                <h3 className={s.Product} style={{fontSize: "3vh", justifyContent:"center"}}>{name}</h3>
                <div className={s.Block}>
                    <h3>100г:</h3>
                    <h3></h3>
                    <h3>12Ккал</h3>
                    <h3>1234Ж</h3>
                    <h3>123У</h3>
                    <h3>1234Б</h3>
                </div>
                <BackCountButton onClick={(e) => {
                    e.preventDefault()
                    setTaken([...Taken, {name: name, id: id}])}}>добавить</BackCountButton>

            </Modal>
        </div>
    );
};

export default ProductCard;