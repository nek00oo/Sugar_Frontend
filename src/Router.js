import {Navigate, Route, Routes} from "react-router-dom";
import Register from "./Components/Register/Register";
import Authorization from "./Components/Authorization/Authorization";
import Account from "./Components/Account/Account";
import {useContext} from "react";
import {AuthContext} from "./Context/AuthContext";
import Statistics from "./Components/Statistics/Statistics";

const Router = () => {
    const {Auth} = useContext(AuthContext)

    return (
        Auth
        ?
        <Routes>
            <Route path="/account" element={<Account/>}></Route>
            <Route path="*" element={<Navigate to="/account"/>}></Route>
        </Routes>
        :
        <Routes>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/authorization" element={<Authorization/>}></Route>
            <Route path="/statistics" element={<Statistics/>}></Route>
            <Route path="*" element={<Navigate to="/register"/>}></Route>
        </Routes>
    )
}

export default Router;