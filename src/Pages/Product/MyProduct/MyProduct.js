import {useContext, useEffect, useState} from "react"
import s from "./MyProduct.module.css"
import TakenProduct from "../../../Components/UI/TakenProduct/TakenProduct";
import {TakenContext} from "../../../Context/TakenContext";
import BackCountButton from "../../../Components/UI/Button/BackCountButton/BorderButton";
import ProgressBar from "../../../Components/UI/ProgressBar/ProgressBar";
import {UserContext} from "../../../Context/UserContext";

const MyProduct = () => {
    const [Product, setProduct] = useState(false)
    const [startY, setStartY] = useState(null)
    const [CurrentHe, setCurrentHe] = useState(0)
    const {Taken, setTaken} = useContext(TakenContext)
    const {User, setUser} = useContext(UserContext)



    useEffect(() => {
        setCurrentHe(countCart())
    }, [Taken]);

    const countCart = () => {
        let sum = 0
        Taken.map(el => sum += (el.gr / 100 * el.xe))
        return Math.round(sum)
    }

    const del = (id) => {
        setTaken(Taken.filter(t => t.del_id !== id))
    }

    const toggleMenu = () => {
        setProduct(!Product);
    };

    const handleTouchStart = (e) => {
        setStartY(e.touches[0].clientY);
    };

    const save = () => {
        setTaken([])
        setUser({...User, current_bread_unit_day: User.current_bread_unit_day - CurrentHe})
    }

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
                <img className={s.arrow} src={process.env.PUBLIC_URL + "/arrowUp.svg"} alt={"arrow"}
                     onClick={toggleMenu}/>
            </div>
            <div className={s.menu}>
                <div className={s.Scroll}>
                    {Taken.map((t, index) =>
                        <TakenProduct key={index} name={t.name} del_id={t.del_id} del={del} mass={t.gr}/>
                    )}
                </div>
            </div>
            <div className={s.text}>Остаток ХЕ:</div>
            <ProgressBar completed={Math.round(User.current_bread_unit_day - CurrentHe)} val={Math.round(User.current_bread_unit_day-CurrentHe)}/>
            <BackCountButton onClick={() => save()}>Сохранить</BackCountButton>
        </div>
    );
};

export default MyProduct;