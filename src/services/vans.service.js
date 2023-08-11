import axios from "axios";

const URL = "/api/vans";

export const VanService = {
  async getVans() {
    const response = await axios.get(URL);
    return response.data;
  },
  async getVanById(id) {
    const response = await axios.get(`${URL}/${id}`);
    return response.data.vans;
  },
};
