import {useContext, useState} from "react"
import {AuthContext} from "../../../Context/AuthContext"
import s from "./MyProduct.module.css"
import ProductCard from "../../../Components/UI/Product/ProductCard";
import BorderButton from "../../../Components/UI/Button/BackCountButton/BorderButton";

const MyProduct = ({links}) => {
    const {Auth, setAuth} = useContext(AuthContext)
    const [Product, setProduct] = useState(false)
    const [startY, setStartY] = useState(null)

    const toggleMenu = () => {
        setProduct(!Product);
    };

    const handleTouchStart = (e) => {
        setStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
        if (startY && e.touches[0].clientY - startY > 50) {
            setProduct(false);
            setStartY(null);
        } else if (startY && startY - e.touches[0].clientY > 50) {
            setProduct(true);
            setStartY(null);
        }
    };

    return (
        <div
            className={`${s.product__menu}${Product ? ` ${s.open}` : ''}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <div className={`${s.first_element}${Product ? '' : ` ${s.close_first_element}`}`}>
                <div className={s.title}>Ваша еда</div>
                <img className={s.arrow} src={process.env.PUBLIC_URL + "/arrowUp.svg"} alt={"arrow"} onClick={toggleMenu}/>
            </div>
            <div className={s.menu}>
                <div className={s.menu__item}>
                    <img className={s.minus} src={process.env.PUBLIC_URL + "/minus.svg"} alt={"minus"}></img>
                    <ProductCard/>
                </div>
                <div className={s.menu__item}>
                    <img className={s.minus} src={process.env.PUBLIC_URL + "/minus.svg"} alt={"minus"}></img>
                    <ProductCard/>
                </div>
                <div className={s.menu__item}>
                    <img className={s.minus} src={process.env.PUBLIC_URL + "/minus.svg"} alt={"minus"}></img>
                    <ProductCard/>
                </div>
                <div className={s.menu__item}>
                    <img className={s.minus} src={process.env.PUBLIC_URL + "/minus.svg"} alt={"minus"}></img>
                    <ProductCard/>
                </div>
                <div className={s.menu__item}>
                    <img className={s.minus} src={process.env.PUBLIC_URL + "/minus.svg"} alt={"minus"}></img>
                    <ProductCard/>
                </div>
                <div className={s.menu__item}>
                    <img className={s.minus} src={process.env.PUBLIC_URL + "/minus.svg"} alt={"minus"}></img>
                    <ProductCard/>
                </div>
                <div className={s.menu__item}>
                    <img className={s.minus} src={process.env.PUBLIC_URL + "/minus.svg"} alt={"minus"}></img>
                    <ProductCard/>
                </div>
                <BorderButton>Рассчитать</BorderButton>
            </div>
        </div>
    );
};

export default MyProduct;