import s from "../../Components/UI/Wrapper.module.css";
import s1 from "../../Components/UI/Form.module.css"
import s3 from "./Product.module.css"
import {useContext, useEffect, useState} from "react";
import {BurgerContext} from "../../Context/BurgerContext";
import Header from "../../Components/Header/Header";
import BurgerButton from "../../Components/UI/Button/BurgerButton/BurgerButton";
import BurgerMenu from "../../Components/UI/Burger/Burger";
import SelectProduct from "../../Components/UI/SelectProduct/SelectProduct";
import ProductCard from "../../Components/UI/Product/ProductCard";
import MyProduct from "./MyProduct/MyProduct";
import UserButton from "../../Components/UI/Button/UserButton/UserButton";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Product = () => {
    const {setBurger} = useContext(BurgerContext)
    const navigate = useNavigate()
    const [cards, setCards] = useState([])

    const fetchProductData = async () => {
        try {
            const response = await axios.get("http://localhost:8080/product/all");
            setCards(response.data.Data);
        } catch (error) {
            console.error("Error fetching product data:", error);
        }
    };

    useEffect(() => {
        fetchProductData();
    }, []);

    const burgerLinks = [{route: "/statistics", name: "Статистика"}]

    return (
        <div className={s.Wrapper}>
            <Header left={<BurgerButton onClick={() => setBurger(true)}/>} center={"Главная"} right={<UserButton onClick={() => navigate('/account')}/>}/>
            <BurgerMenu links={burgerLinks}/>
            <div className={`${s1.Body} ${s3.Body}`}>
                <div className={`${s1.Form} ${s3.Form}`}>
                    <SelectProduct placeholder={"Поиск продукта"}/>
                    <div className={s3.Scroll}>
                        {cards.map((card,index) =>
                            <ProductCard key={index} name={card.name} product_id={card.id} carb={card.carbs}/>
                        )}
                    </div>
                </div>
            </div>
            <MyProduct/>
        </div>
    );
}

export default Product;