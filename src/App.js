import './App.css';

import {BrowserRouter} from "react-router-dom";
import Router from "./Router";
import {AuthContext} from "./Context/AuthContext";
import {useState} from "react";
import {UserContext} from "./Context/UserContext";
import {BurgerContext} from "./Context/BurgerContext";
import {TakenContext} from "./Context/TakenContext";

function App() {
    const [Auth, setAuth] = useState(true)
    const [Burger, setBurger] = useState(false)
    const [Taken, setTaken] = useState([{id: 1, name: "test"}])
    const [User, setUser] = useState(
        {
            name: "Стас Барецкий",
            login: "stas@baretskii.su",
            password: "",
            height: "1.75м",
            weight:"200кг"
        })

  return (
      <TakenContext.Provider value={{Taken, setTaken}}>
      <BurgerContext.Provider value={{Burger, setBurger}}>
      <UserContext.Provider value={{User, setUser}}>
            <AuthContext.Provider value={{Auth, setAuth}}>
                <BrowserRouter>
                    <Router/>
                </BrowserRouter>
            </AuthContext.Provider>
      </UserContext.Provider>
      </BurgerContext.Provider>
      </TakenContext.Provider>
  );
}

export default App;
