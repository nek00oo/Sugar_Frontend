import {Navigate, Route, Routes} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "./Context/AuthContext";
import Account from "./Pages/Account/Account";
import Register from "./Pages/Register/Register";
import Authorization from "./Pages/Authorization/Authorization";
import Statistics from "./Pages/Statistics/Statistics";
import Product from "./Pages/Product/Product";


const Router = () => {
    const {Auth} = useContext(AuthContext)

    return (
        Auth
        ?
        <Routes>
            <Route path="/account" element={<Account/>}></Route>
            <Route path="/product" element={<Product/>}></Route>
            <Route path="/statistics" element={<Statistics/>}></Route>
            <Route path="*" element={<Navigate to="/account"/>}></Route>
        </Routes>
        :
        <Routes>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/authorization" element={<Authorization/>}></Route>
            <Route path="*" element={<Navigate to="/authorization"/>}></Route>
        </Routes>
    )
}

export default Router;