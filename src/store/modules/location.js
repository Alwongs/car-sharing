import apiServices from "../../services/apiServices";

export default {
    getters: {
        cities(state) {
            return state.cities;
        },
        points(state) {
            return state.points;
        },        
    },
    state: {
        cities: [],
        points: [],        
    },
    mutations: {
        UPDATE_CITIES(state, cities) {
            state.cities = cities;
        },
        UPDATE_POINTS(state, points) {
            state.points = points;
        },        
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
        },
        get_points_from_api({commit}, id) {     
            apiServices.getPoints()
            .then((response) => {
                let allPoints = response.data.data
                let result = allPoints.filter(function (point) {
                    if (point.cityId) {
                        return point.cityId.id  === id;
                    }
                });
                commit('UPDATE_POINTS', result)
            })
            .catch(error => {
                console.error(error)
            })
        },      
    }
}

