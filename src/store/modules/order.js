export default {
    getters: {
        getOrder(state) {
            return state.order;
        },
        getIsActiveBtn(state) {
            return state.isActiveBtn;
        }
    },
    state: {
        order: {
            city: {},
            point: {},
            model: {},
            color: {},
            date: {
                dateFrom: '',
                dateTo: '',
                range: {}
            },
            rate: {},
            extraServices: [],
        },
        isActiveBtn: false,
    },
    mutations: {
        ADD_CITY_TO_ORDER(state, city) {
            state.order.city = city;
        },
        ADD_POINT_TO_ORDER(state, point) {
            state.order.point = point;
        },
        ADD_MODEL_TO_ORDER(state, model) {
            state.order.model = model;
        },
        ADD_RATE_TO_ORDER(state, rate) {
            state.order.rate = rate;
        },
        ADD_COLOR_TO_ORDER(state, color) {
            state.order.color = color;
        },
        ADD_DATE_TO_ORDER(state, date) {
            state.order.date = date;
        },
        UPDATE_SERVICES_IN_ORDER(state, extraServices) {
            state.order.extraServices = extraServices;
        },

        
        CLEAR_CITY_FROM_ORDER(state) {
            state.order.city = {};            
        },
        CLEAR_POINT_FROM_ORDER(state) {
            state.order.point = {};            
        },


        CLEAR_DATEFROM_IN_ORDER(state) {
            state.order.date.dateFrom = '';            
        },
        CLEAR_DATETO_IN_ORDER(state) {
            state.order.date.dateTo = '';            
        },
        CLEAR_RANGE_IN_ORDER(state) {
            state.order.date.range = {};            
        },

        
        ACTIVATE_BTN(state) {
            state.isActiveBtn = true;
        },
        DISACTIVATE_BTN(state) {
            state.isActiveBtn = false;
        }
    },
}