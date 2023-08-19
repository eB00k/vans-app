import React from "react";
import {
  useLoaderData,
  useActionData,
  Form,
  redirect,
  useNavigation,
} from "react-router-dom";
import "./login.scss";
import login from "../../services/login.service";

export function loader({ request }) {
  const searchTerm = new URL(request.url).searchParams.get("message");
  return searchTerm;
}

async function fakeLoginUser({ email, password }) {
  const data = await login.loginUser({ email, password });
  if (data.token) {
    localStorage.setItem("token", JSON.stringify(data.token));
  }
}

export async function action({ request }) {
  const redirectTo = new URL(request.url).searchParams.get("redirectTo") || "/host";
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    await fakeLoginUser({ email, password });
    const response = redirect(redirectTo);
    response.body = true;
    return response;
  } catch (err) {
    return err.message;
  }
}

export default function Login() {
  const loginMessage = useLoaderData();
  const errorMesssage = useActionData();
  const { state } = useNavigation(); // tracks the navigation state

  return (
    <div className="login-page">
      <Form className="login-form" method="post" replace>
        <h2>LOGIN</h2>
        {!errorMesssage && loginMessage && (
          <span className="login-message">{loginMessage}</span>
        )}
        {errorMesssage && (
          <span className="login-message">{errorMesssage}</span>
        )}
        <div>
          <input name="email" type="email" placeholder="Email" />
        </div>
        <div>
          <input name="password" type="password" placeholder="Password" />
        </div>
        <button disabled={state === "submitting"} className={state}>
          {state === "submitting" ? "Logging in..." : "Login"}
        </button>
      </Form>
    </div>
  );
}
