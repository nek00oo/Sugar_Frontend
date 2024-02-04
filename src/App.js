import './App.css';

import {BrowserRouter} from "react-router-dom";
import Router from "./Router";
import {AuthContext} from "./Context/AuthContext";
import {useState} from "react";
import {UserContext} from "./Context/UserContext";
import {BurgerContext} from "./Context/BurgerContext";

function App() {
    const [Auth, setAuth] = useState(true)
    const [Burger, setBurger] = useState(false)
    const [User, setUser] = useState(
        {
            name: "Стас Барецкий",
            login: "stas@baretskii.su",
            password: "",
            height: "1.75м",
            weight:"200кг"
        })

  return (
      <BurgerContext.Provider value={{Burger, setBurger}}>
      <UserContext.Provider value={{User, setUser}}>
            <AuthContext.Provider value={{Auth, setAuth}}>
                <BrowserRouter>
                    <Router/>
                </BrowserRouter>
            </AuthContext.Provider>
      </UserContext.Provider>
      </BurgerContext.Provider>
  );
}

export default App;
