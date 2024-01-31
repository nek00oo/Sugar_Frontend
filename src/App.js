import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Header from "./Components/Header/NavBarHeader/Header";
import Register from "./Components/Register/Register";
import Account from "./Components/Account/Account";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Register/>}></Route>
            <Route path="/account" element={<Account/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
