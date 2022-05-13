import apiServices from "../../services/apiServices";

export default {
    getters: {
        getCars(state) {
            return state.cars;
        },      
        getCategories(state) {
            return state.categories;
        },      
    },
    state: {
        cars: [], 
        categories: [] ,     
    },
    mutations: {
        UPDATE_CARS(state, cars) {
            state.cars = cars;
        },       
        UPDATE_CATEGORIES(state, categories) {
            state.categories = categories;
        },       
    },
    actions: {
        get_cars_from_api({commit, dispatch}, categoryId) {     
            apiServices.getCars()
            .then((response) => {
                commit('UPDATE_CARS', response.data.data)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                dispatch('filter_cars_by_category', categoryId)
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
        filter_cars_by_category({getters, commit}, categoryId) {
            if(categoryId) {
                let newArray = getters.getCars.filter((car) => {
                    if(car.categoryId && car.categoryId.id == categoryId) {
                        return car;
                    }
                });
                commit('UPDATE_CARS', newArray);
            }
        }
    }
}