import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./login.scss";

const FORM_DATA = {
  email: "",
  password: "",
};

export function loader({ request }) {
  const searchTerm = new URL(request.url).searchParams.get("message");
  return searchTerm;
}

export default function Login() {
  const [loginFormData, setLoginFormData] = useState(FORM_DATA);
  const [errorMessage, setErrorMessage] = useState(FORM_DATA);
  const loginMessage = useLoaderData();
  console.log(loginMessage);

  function handleSubmit(e) {
    e.preventDefault();
    if (!loginFormData.email || !loginFormData.email.includes("@")) {
      setErrorMessage((prev) => ({ ...prev, email: "invalid email" }));
      return;
    }
    if (!loginFormData.password) {
      setErrorMessage((prev) => ({ ...prev, password: "invalid password" }));
      return;
    }

    console.log(loginFormData);
  }

  function handleChange(e) {
    setErrorMessage((prev) => ({ ...prev, [e.target.name]: "" }));
    console.log(loginFormData);
    setLoginFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-form">
        {loginMessage && <span className="login-message">{loginMessage}</span>}
        <h2>LOGIN</h2>

        <div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={loginFormData.email}
          />
          {errorMessage.email && <span>{errorMessage.email}</span>}
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={loginFormData.password}
          />
          {errorMessage.password && <span>Invalid password</span>}
        </div>
        <button>Log In</button>
      </form>
    </div>
  );
}
