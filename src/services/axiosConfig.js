import axios from "axios";

const instance = axios.create({
    baseURL: "https://api-factory.simbirsoft1.com/api",
});

instance.defaults.headers.common["X-Api-Factory-Application-Id"] =
    process.env.VUE_APP_APPLICATION_ID;

export default instance;