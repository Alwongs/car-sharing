import apiServices from "../../services/apiServices";

export default {
    getters: {
        rates(state) {
            return state.rates;
        },       
    },
    state: {
        rates: [],    
    },
    mutations: {
        UPDATE_RATES(state, rates) {
            state.rates = rates;
        },    
    },
    actions: {
        get_rates_from_api({commit}) {     
            apiServices.getRates()
            .then((response) => {
                commit('UPDATE_RATES', response.data.data)
            })
            .catch(error => {
                console.error(error)
            })
        },     
    }
}