import React, {useContext, useState} from 'react';
import s from './ProductCard.module.css'
import Modal from "../Modal/Modal";
import {TakenContext} from "../../../Context/TakenContext";
import BackCountButton from "../Button/BackCountButton/BorderButton";
import BorderInput from "../Input/BorderInput";

const ProductCard = (props) => {
    const [modal, setModal] = useState(false)
    const [gram, setGram] = useState(0)
    const {Taken, setTaken} = useContext(TakenContext)

    return (
        <div className={s.Pr}>
        <button className={s.Product} onClick={() => setModal(true)}>
            <h3 className={s.Text}>{props.name}</h3>
        </button>
            <Modal modal={modal} setModal={setModal}>
                <h3 className={s.Product} style={{fontSize: "3vh", justifyContent: "center"}}>{props.name}</h3>
                <div className={s.Block}>
                    <h3>100г:</h3>
                    <h3></h3>
                    <h3>123У</h3>
                </div>
                <h2 className={s.Product} style={{fontSize:"4vh"}}>Порция</h2>
                <BorderInput type={"number"} onChange={(e) => setGram(e.target.value)}/>
                <BackCountButton onClick={() => {setTaken([...Taken, {
                    name: props.name,
                    gr: gram,
                    product_id: props.product_id,
                    del_id: Date.now()
                }])
                setModal(false)}}>добавить</BackCountButton>
            </Modal>
        </div>
    );
};

export default ProductCard;