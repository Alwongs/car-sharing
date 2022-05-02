import apiServices from "../../services/apiServices";

export default {
    getters: {
        getPoints(state) {
            return state.points;
        },
        /*
        getPoint(state) {
            return state.point;
        }
        */
    },
    state: {
        points: [],
        //point: {}
    },
    mutations: {
        UPDATE_POINTS(state, points) {
            state.points = points;
        },
        /*
        UPDATE_POINT(state, point) {
            state.point = point;
        },
        CLEAR_POINT(state) {
            state.point = {};
        },
        */
    },
    actions: {
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
        }
    }
}