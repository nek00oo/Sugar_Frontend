import {Route, Routes} from "react-router-dom";
import Register from "./Components/Register/Register";
import Authorization from "./Components/Authorization/Authorization";
import Account from "./Components/Account/Account";

const Router = () => {
    const Auth = true;

    return (
        Auth
        ?
        <Routes>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/authorization" element={<Authorization/>}></Route>
            <Route path="*" element={<Register/>}></Route>
        </Routes>
        :
        <Routes>
            <Route path="/account" element={<Account/>}></Route>
        </Routes>
    )
}

export default Router;