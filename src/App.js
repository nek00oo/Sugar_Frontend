import './App.css';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Register from "./Components/Register/Register";
import Account from "./Components/Account/Account";
import Authorization from "./Components/Authorization/Authorization";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Register/>}></Route>
            <Route path="/account" element={<Account/>}></Route>
            <Route path="/authorization" element={<Authorization/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
