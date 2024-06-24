import './App.css';

import {BrowserRouter} from "react-router-dom";
import Router from "./Router";
import {AuthContext} from "./Context/AuthContext";
import {useEffect, useState} from "react";
import {UserContext} from "./Context/UserContext";
import {BurgerContext} from "./Context/BurgerContext";
import {TakenContext} from "./Context/TakenContext";

function App() {
    const [Auth, setAuth] = useState(false)
    const [Burger, setBurger] = useState(false)
    const [Taken, setTaken] = useState([])
    const [User, setUser] = useState(null)

    useEffect(() => {
        console.log("User updated:", User);
    }, [User]);

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
