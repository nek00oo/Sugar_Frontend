import React from 'react';
import s from './ProductCard.module.css'
const ProductCard = () => {
    return (
        <div className={s.Product}>
            <h3 className={s.Text}>name</h3>
            <h3 className={s.Text}>test</h3>
        </div>
    );
};

export default ProductCard;