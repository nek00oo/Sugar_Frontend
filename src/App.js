import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Header from "./Components/Header/Header";
import Register from "./Components/Register/Register";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Register/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
