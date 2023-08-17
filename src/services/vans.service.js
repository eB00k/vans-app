import axios from "axios";

const api = axios.create({
  baseURL: "/api/vans",
});

export const VanService = {
  async getVans() {
    const response = await api.get();
    return response;
  },
  async getVanById(id) {
    const response = await api.get(`/${id}`);
    return response;
  },
};
