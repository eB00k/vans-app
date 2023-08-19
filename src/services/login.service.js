import axios from "axios";

const login = {
  async loginUser(creds) {
    const response = await axios.post("/api/login", creds);
    if (!response.data.user) {
      throw { message: "No user found with these credentials" };
    }
    return response.data;
  },
};

export default login;
