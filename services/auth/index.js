import axios from "axios";
import externalApiConfig from "../../utils/constants/apiConfig";

export default {
  async login({ email, password }) {
    const { data } = await axios.post(
      "/api/auth/login",
      {
        email,
        password,
      },
      externalApiConfig
    );
    const { access_token: token } = data;
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
    return data;
  },
  logout() {
    return axios.post("/api/auth/logout", {}, externalApiConfig);
  },

  userInfo() {
    return axios.post("/api/auth/user", {}, externalApiConfig);
  },
};
