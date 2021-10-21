import "./App.css";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { ItemContext } from "./contexts/ItemContext";
import Create from "./Create";
import Login from "./Login";

function App() {
  const [items, setItems] = useState([]);

  axios
    .get("http://localhost.com:5000/api/items")
    .then((res) => {
      setItems(res);
    })
    .catch((err) => {
      console.error(err);
    });

  const loginDefault = {
    username: "",
    email: "",
    password: "",
  };
  const [err, setErr] = useState(); //will be for rendering errors using disable state
  const [islogged, setLogged] = useState(false);
  const [disable, setDisable] = useState(false);
  const [login, setLogin] = useState(loginDefault);
  const [newLogin, setNewLogin] = useState(loginDefault);
  const [userList, setList] = useState([]);

  const createUser = (newUser) => {
    axios
      .post(
        "https://fakedata.free.beeceptor.com",
        newUser
      ) /* needs an actual api*/
      .then((res) => {
        console.log(res);
        setList([...userList, newUser]);
        setLogin(loginDefault);
        setNewLogin(loginDefault);
        setLogged(true);
      })
      .catch((valueError) => console.error(valueError));
  };
  useEffect(() => {
    console.log(userList);
  }, [userList]);

  const submit = () => {
    const newForm = {
      username: newLogin.username.trim(),
      email: newLogin.email.trim(),
      password: newLogin.password.trim(),
    };
    createUser(newForm);
  };

  const onSub = (event) => {
    event.preventDefault();
    submit();
  };

  return (
    <Router>
      <ItemContext.Provider value={items}>
        <div className="App">
          <header className="App-header">
            <div className="logo">
              _______________________________________________________________________________________
              <h1 className="App-h1">AFRICAN MARKETPLACE</h1>
              _______________________________________________________________________________________
            </div>
            <div className="link-container">
              <ul>
                {islogged ? null : (
                  <li>
                    {" "}
                    <Link id="create" to="/create">
                      {" "}
                      <button className="createbtn btn">Sign Up</button>
                    </Link>
                  </li>
                )}
                {islogged ? null : (
                  <li>
                    <Link id="login" to="/login">
                      <button className="loginbtn btn">Login</button>
                    </Link>
                  </li>
                )}
                {islogged ? (
                  <button
                    onClick={() => setLogged(!islogged)}
                    className="logout btn"
                  >
                    Logout
                  </button>
                ) : null}
                <li>
                  <Link id="home-link" to="/home">
                    <button className="homebtn btn">Home</button>
                  </Link>
                </li>
                <li>
                  <Link id="about-link" to="/about">
                    <button className="aboutbtn btn">about</button>
                  </Link>
                </li>
              </ul>
            </div>
          </header>

          <Route exact path="/home">
            <section className="upper-content-section">
              <div className="top-left"></div>
              <div className="top-right"></div>
            </section>
            <section className="content-section">
              <div className="mid-left"></div>
              <div className="mid-right"></div>
            </section>
            <section className="lower-content-section">
              <div className="mid-left"></div>
              <div className="mid-right"></div>
            </section>
          </Route>
          <Login
            login={login}
            setLogin={setLogin}
            disable={disable}
            setDisable={setDisable}
            err={err}
            setErr={setErr}
            userList={userList}
            setLogged={setLogged}
          />
          <Create
            setNewLogin={setNewLogin}
            newLogin={newLogin}
            disable={disable}
            setDisable={setDisable}
            err={err}
            setErr={setErr}
            onSub={onSub}
          />
        </div>
      </ItemContext.Provider>
    </Router>
  );
}

export default App;
