import axios from "axios";
import externalApiConfig from "../../utils/constants/apiConfig";

export default {
  products(searchQuery) {
    return axios.get("/api/fact/productos", {
      ...externalApiConfig,
      params: {
        searchquery: searchQuery,
      },
    });
  },
  invoices(searchQuery) {
    return axios.get("api/fact/get-invoices", {
      ...externalApiConfig,
    });
  },
  clients(searchQuery) {
    return axios.get("/api/fact/clientes", {
      ...externalApiConfig,
      params: {
        searchquery: searchQuery,
      },
    });
  },
};
