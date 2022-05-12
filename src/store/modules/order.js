export default {
    getters: {
        getOrder(state) {
            return state.order;
        },
        getIsActiveBtn(state) {
            return state.isActivBtn;
        }
    },
    state: {
        order: {
            location: {
                city: {},
                point: {},
            },
            car: {},
        },
        isActivBtn: false,
    },
    mutations: {
        ADD_CITY_TO_ORDER(state, city) {
            state.order.location.city = city;
        },
        ADD_POINT_TO_ORDER(state, point) {
            state.order.location.point = point;
        },
        ADD_CAR_TO_ORDER(state, car) {
            state.order.car = car;
        },

        
        CLEAR_CITY_FROM_ORDER(state) {
            state.order.location.city = {};            
        },
        CLEAR_POINT_FROM_ORDER(state) {
            state.order.location.point = {};            
        },

        ACTIVATE_BTN(state) {
            state.isActivBtn = true;
        },
        DISACTIVATE_BTN(state) {
            state.isActivBtn = false;
        }
    },
}