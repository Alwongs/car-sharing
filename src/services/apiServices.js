import axiosConfig from "./axiosConfig";

const url = {
    CITY: "/db/city",
    POINT: "/db/point",
    CAR: "/db/car",
    CATEGORIES: "/db/category",
    RATES: "/db/rate",
};

export default {
    getCities() {
        return axiosConfig.get(url.CITY);
    },
    getPoints() {
        return axiosConfig.get(url.POINT);
    },
    getCars() {
        return axiosConfig.get(url.CAR);
    },
    getCategories() {
        return axiosConfig.get(url.CATEGORIES);
    },
    getRates() {
        return axiosConfig.get(url.RATES);
    },
};