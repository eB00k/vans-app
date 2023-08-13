import axios from "axios";

const client = axios.create({
  baseURL: "/api/host/vans",
});

const HostService = {
  async getHostVans() {
    const response = await axios.get("/api/host/vans");
    return response.data.vans;
  },
};

export default HostService;
