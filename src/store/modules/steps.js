export default {
    getters: {
        getSteps(state) {
            return state.steps;
        },
        getIsActiveBtn(state) {
            return state.isActivBtn;
        }
    },
    state: {
        steps: {
            place: {
                city: {},
                point: {},
            },
        },
        isActivBtn: false,
    },
    mutations: {
        ADD_CITY_TO_ORDER(state, city) {
            state.steps.place.city = city;
        },
        ADD_POINT_TO_ORDER(state, point) {
            state.steps.place.point = point;
        },
        
        CLEAR_CITY_FROM_STEP(state) {
            state.steps.place.city = {};            
        },
        CLEAR_POINT_FROM_STEP(state) {
            state.steps.place.point = {};            
        },

        ACTIVATE_BTN(state) {
            state.isActivBtn = true;
        },
        DISACTIVATE_BTN(state) {
            state.isActivBtn = false;
        }
    },
}