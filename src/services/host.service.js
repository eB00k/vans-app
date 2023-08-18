import axios from "axios";

const api = axios.create({
  baseURL: "/api/host/vans",
});

const HostService = {
  async getHostVans() {
    const response = await api.get();
    return response.data.vans;
  },
  async getHostVanById(id) {
    const response = await api.get(`/${id}`);
    return response.data.vans[0];
  },
};

export default HostService;
