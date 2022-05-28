import apiServices from "../../services/apiServices";
import moment from 'moment'

export default {
    getters: {
        getCreatedOrder(state) {
            return state.createdOrder;
        },
        getPriceMin(state) {
            return state.priceMin;
        },
        getPriceMax(state) {
            return state.priceMax;
        },
        getCity(state) {
            return state.city;
        },
        getPoint(state) {
            return state.point;
        },
        getModel(state) {
            return state.model;
        },
        getColor(state) {
            return state.color;
        },

        getDateFrom(state) {
            return state.date.dateFrom;
        },
        getDateTo(state) {
            return state.date.dateTo;
        },
        getRange(state) {
            return state.date.range;
        },

        getRate(state) {
            return state.rate;
        },

        getIsFullTank(state) {
            return state.isFullTank;
        },
        getIsNeedChildChair(state) {
            return state.isNeedChildChair;
        },
        getIsRightWheel(state) {
            return state.isRightWheel;
        },


        getIsActiveBtn(state) {
            return state.isActiveBtn;
        }
    },
    state: {
        createdOrder: {},
        city: {},
        point: {},
        model: {},
        priceMin: 0,
        priceMax: 0,
        color: {},
        rate: {},
        date: {
            dateFrom: '',
            dateTo: '',
            range: {}
        },
        isFullTank: {
            include: false,
            name: 'Полный бак',
            price: 500,
        },
        isNeedChildChair: {
            include: false,
            name: 'Детское кресло',
            price: 200,
        },
        isRightWheel: {
            include: false,
            name: 'Правый руль',
            price: 600,
        },
        isActiveBtn: false,
    },
    mutations: {

        UPDATE_CREATED_ORDER(state, order) {
            state.createdOrder = order;
        },
        UPDATE_PRICE(state, price) {
            state.priceMin = price.priceMin;
            state.priceMax = price.priceMax;
        },
        ADD_CITY_TO_ORDER(state, city) {
            state.city = city;
        },
        ADD_POINT_TO_ORDER(state, point) {
            state.point = point;
        },
        ADD_MODEL_TO_ORDER(state, model) {
            state.model = model;
        },
        ADD_RATE_TO_ORDER(state, rate) {
            state.rate = rate;
        },
        ADD_COLOR_TO_ORDER(state, color) {
            state.color = color;
        },
        ADD_DATE_TO_ORDER(state, date) {
            state.date = date;
        },

        CLEAR_CREATED_ORDER(state) {
            state.createdOrder = {};
        },
        CLEAR_CITY_FROM_ORDER(state) {
            state.city = {};            
        },
        CLEAR_POINT_FROM_ORDER(state) {
            state.point = {};            
        },
        CLEAR_MODEL_IN_ORDER(state) {
            state.model = {}; 
            state.priceMin = 0;
            state.priceMax = 0;                        
        },
        CLEAR_COLOR_IN_ORDER(state) {
            state.color = {};            
        },
        CLEAR_DATE_IN_ORDER(state) {
            state.date = {
                dateFrom: '',
                dateTo: '',
                range: {}
            }            
        },
        CLEAR_DATEFROM_IN_ORDER(state) {
            state.date.dateFrom = '';            
        },
        CLEAR_DATETO_IN_ORDER(state) {
            state.date.dateTo = '';            
        },
        CLEAR_RANGE_IN_ORDER(state) {
            state.date.range = {};            
        },
        CLEAR_RATE_IN_ORDER(state) {
            state.rate = {};            
        },
        UPDATE_FULL_TANK(state) {
            state.isFullTank.include = !state.isFullTank.include;
        },
        UPDATE_CHILD_SEAT(state) {
            state.isNeedChildChair.include = !state.isNeedChildChair.include;
        },
        UPDATE_RIGHT_WEEL(state) {
            state.isRightWheel.include = !state.isRightWheel.include;
        },
        CLEAR_SERVICES_IN_ORDER(state) {
            state.isFullTank.include = false;
            state.isNeedChildChair.include = false;
            state.isRightWheel.include = false;            
        },

        ACTIVATE_BTN(state) {
            state.isActiveBtn = true;
        },
        DISACTIVATE_BTN(state) {
            state.isActiveBtn = false;
        }
    },
    actions: {
        async create_order_in_api({getters, commit}) {
            commit('START_LOADING');
            await apiServices.postOrder({
                orderStatusId: '5e26a191022b590b946c5d89',
                cityId: getters.getCity.id,
                pointId: getters.getPoint.id,
                carId: getters.getModel.id,
                color: getters.getColor.name,
                dateFrom: moment(getters.getDateFrom, 'DD.MM.YYYY HH:mm').valueOf(),
                dateTo: moment(getters.getDateTo, 'DD.MM.YYYY HH:mm').valueOf(),
                rateId: getters.getRate.id,
                price: getters.getTotalPrice,
                isFullTank: getters.getIsFullTank.include,
                isNeedChildChair: getters.getIsNeedChildChair.include,
                isRightWheel: getters.getIsRightWheel.include,                     
            })  
            .then((response) => {
                commit('UPDATE_CREATED_ORDER', response.data.data)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                commit('STOP_LOADING');
            })
        },        
    }
}
