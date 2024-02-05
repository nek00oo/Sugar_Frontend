import s from "../../Components/UI/Wrapper.module.css";
import s1 from "../../Components/UI/Form.module.css"
import s3 from "./Product.module.css"
import {useContext, useState} from "react";
import {BurgerContext} from "../../Context/BurgerContext";
import Header from "../../Components/Header/Header";
import BurgerButton from "../../Components/UI/Button/BurgerButton/BurgerButton";
import BurgerMenu from "../../Components/UI/Burger/Burger";
import SelectProduct from "../../Components/UI/SelectProduct/SelectProduct";
import ProductCard from "../../Components/UI/Product/ProductCard";
import MyProduct from "./MyProduct/MyProduct";


const Product = () => {
    const {setBurger} = useContext(BurgerContext)
    const [cards, setCards] = useState([{name:"test", id:1}])
    const burgerLinks = [{route: "/Product", name: "Продукты"}]
    return (
        <div className={s.Wrapper}>
            <Header left={<BurgerButton onClick={() => setBurger(true)}/>} center={"Главная"}/>
            <BurgerMenu links={burgerLinks}/>
            <div className={`${s1.Body} ${s3.Body}`}>
                <div className={`${s1.Form} ${s3.Form}`}>
                    <SelectProduct placeholder={"Поиск продукта"}/>
                    <div className={s3.Scroll}>
                        {cards.map(card =>
                            <ProductCard id={card.id} name={card.name}/>
                        )}
                    </div>
                </div>
            </div>
            <MyProduct/>
        </div>
    );
}

export default Product;