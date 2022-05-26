import axiosConfig from "./axiosConfig";

const url = {
    CITY: "/db/city",
    POINT: "/db/point",
    CAR: "/db/car?limit=10",
    CATEGORIES: "/db/category",
    RATES: "/db/rate",
    ORDER: "db/order",    
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


    postOrder(data = {}) {
        return axiosConfig.post(url.ORDER, { ...data });
    },
    putOrder(idOrder, data = {}) {
        return axiosConfig.put(url.ORDER + '/' + idOrder, { ...data });
    },

    getOrder(idOrder, data = {}) {
        return axiosConfig.get(url.ORDER + '/' + idOrder, { ...data });
    }, 

};
// idOrder: 628e48374101930017dbe74e