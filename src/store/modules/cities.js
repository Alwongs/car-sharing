import apiServices from "../../services/apiServices";

export default {
    getters: {
        getCities(state) {
            return state.cities;
        },
        /*
        getCity(state) {
            return state.city;
        }
        */
    },
    state: {
        cities: [],
        //city: {}
    },
    mutations: {
        UPDATE_CITIES(state, cities) {
            state.cities = cities;
        },
        /*
        UPDATE_CITY(state, city) {
            state.city = city;
        },
        CLEAR_CITY(state) {
            state.city = {};
        },
        */
    },
    actions: {
        get_cities_from_api({commit}) {     
            apiServices.getCities()
            .then((response) => {
                commit('UPDATE_CITIES', response.data.data)
            })
            .catch(error => {
                console.error(error)
            })
        }
    }
}