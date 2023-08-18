import React, { useState } from "react";

export default function HandleLogin() {
  const userName = "Ayush Kumar";

  const username = "HPLaptop";
  const password = "password";

  const [usernameState, setUserNameState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [loggedIn, setLogggedIn] = useState(false);

  function login() {
    if (usernameState === username && passwordState === password) {
      setLogggedIn(true);
    }
  }

  return (
    <div className="container mt-5 w-50">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            onChange={(event) => {
              setUserNameState(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          Password
          <input
            type="password"
            className="form-control"
            onChange={(event) => {
              setPasswordState(event.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={login}>
          Submit
        </button>

            {loggedIn && <h1>Logged In</h1>}

      </form>
    </div>
  );
}
