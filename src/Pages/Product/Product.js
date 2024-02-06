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
import UserButton from "../../Components/UI/Button/UserButton/UserButton";
import {useNavigate} from "react-router-dom";

const Product = () => {
    const {setBurger} = useContext(BurgerContext)
    const navigate = useNavigate()
    const [cards, setCards] = useState([
        {name:"Хлеб бородинский", product_id:1, carb:41},
        {name:"Фундук", product_id:12, carb:10},
        {name:"Фасоль варёная", product_id:13, carb:22},
        {name:"Треска запечённая", product_id:16, carb:8},
        {name:"Гречневая каша на молоке", product_id:17, carb:22},
        {name:"Имбирь", product_id:18, carb:16.2},
        {name:"Инжир", product_id:19, carb:13.7},
        {name:"Капуста пекинская", product_id:20, carb:2},
        {name:"Колбаса вегетарианская", product_id:21, carb:1.8},
        {name:"Горчица", product_id:15, carb:22}])

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
                            <ProductCard key={index} name={card.name} product_id={card.product_id} carb={card.carb}/>
                        )}
                    </div>
                </div>
            </div>
            <MyProduct/>
        </div>
    );
}

export default Product;