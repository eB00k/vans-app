import axios from "axios";

const client = axios.create({
  baseURL: "/api/host/vans",
});

const HostService = {
  async getHostVans() {
    const response = await axios.get("/api/host/vans");
    return response.data.vans;
  },
  async getHostVanById(id) {
    const response = await axios.get(`/api/host/vans/${id}`);
    return response.data.vans[0];
  },
};

export default HostService;
