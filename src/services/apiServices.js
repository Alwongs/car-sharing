import axiosConfig from "./axiosConfig";

const url = {
    CITY: "/db/city",
    POINT: "/db/point",
};

export default {
    getCities() {
        return axiosConfig.get(url.CITY);
    },
    getPoints() {
        return axiosConfig.get(url.POINT);
    },
};