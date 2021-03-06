import apiServices from "../../services/apiServices";

export default {
    getters: {
        models(state) {
            return state.models;
        },      
        categories(state) {
            return state.categories;
        },      
    },
    state: {
        models: [], 
        categories: [] ,     
    },
    mutations: {
        UPDATE_MODELS(state, models) {
            state.models = models;
        },       
        UPDATE_CATEGORIES(state, categories) {
            state.categories = categories;
        },       
    },
    actions: {
        get_models_from_api({commit, dispatch}, categoryId) { 
            commit('START_LOADING');
            apiServices.getCars()
            .then((response) => {
                commit('UPDATE_MODELS', response.data.data)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                dispatch('filter_models_by_category', categoryId)
                commit('STOP_LOADING')
            })
        },     
        get_categories_from_api({commit}) {     
            apiServices.getCategories()
            .then((response) => {
                commit('UPDATE_CATEGORIES', response.data.data)
            })
            .catch(error => {
                console.error(error)
            })
        }, 
        filter_models_by_category({getters, commit}, categoryId) {
            if(categoryId) {
                let newArray = getters.models.filter((model) => {
                    if(model.categoryId && model.categoryId.id == categoryId) {
                        return model;
                    }
                });
                commit('UPDATE_MODELS', newArray);
            }
        }
    }
}