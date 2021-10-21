import { Link, Route } from "react-router-dom";
import * as yup from "yup";
import Schema from "./CreateSchema";
import React, { useEffect } from "react";

const Create = (props) => {
  const { setNewLogin, newLogin, disable, setDisable, err, setErr, onSub } =
    props;

  const logOnUpdate = (evt) => {
    const { name, value } = evt.target;
    logUpdate(name, value);
  };

  const validate = (name, value) => {
    yup
      .reach(Schema, name)
      .validate(value)
      .then(() => setErr({ ...err, [name]: "" }))
      .catch((err) => setErr({ ...err, [name]: err.errors[0] }));
  };

  useEffect(() => {
    Schema.isValid(newLogin).then((valid) => setDisable(!valid));
  }, [newLogin]);

  const logUpdate = (name, value) => {
    validate(name, value);
    setNewLogin({ ...newLogin, [name]: value });
  };

  return (
    <Route path="/create">
      <div className="login-form-holder">
        <form id="new-login-form" onSubmit={onSub}>
          <label>
            Enter a username: &nbsp;
            <input
              id="new-username"
              type="text"
              onChange={logOnUpdate}
              value={newLogin.username}
              name="username"
            />
          </label>
          <label>
            Enter a valid email: &nbsp;
            <input
              id="new-email"
              type="email"
              onChange={logOnUpdate}
              value={newLogin.email}
              name="email"
            />
          </label>
          <label>
            Enter a password: &nbsp;
            <input
              id="new-password"
              type="password"
              onChange={logOnUpdate}
              value={newLogin.password}
              name="password"
            />
          </label>
          <input
            className="sub"
            name="sub"
            type="submit"
            value="submit"
            id="new-login-button"
            disabled={disable}
          />
        </form>
      </div>
    </Route>
  );
};

export default Create;
