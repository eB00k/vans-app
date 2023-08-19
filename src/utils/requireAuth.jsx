import { redirect } from "react-router-dom";

const TOKEN = "Enjoy your pizza, here's your tokens.";

export async function requireAuth(request, params = { id: null }) {
  if (!request) return null;
  const req = request?.url || "http://localhost:5173/host/vans/1";
  console.log(req);
  const pathname = new URL(req).pathname;
  const token = JSON.parse(localStorage.getItem("token"));
  const isLoggedIn = TOKEN === token ? true : false;

  if (!isLoggedIn) {
    const response = redirect(
      `/login?redirectTo=${pathname}&message=You must login first`
    );
    response.body = true;
    throw response;
  }
  return null;
}
