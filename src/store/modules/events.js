export default {
    getters: {
        isMenuOpened(state) {
            return state.isMenuOpened;
        },
        isLoading(state) {
            return state.isLoading;
        },
    },
    state: {
        isMenuOpened: false,
        isLoading: false
    },
    mutations: {
        TOGGLE_MENU(state) {
            state.isMenuOpened = !state.isMenuOpened;
        },
        START_LOADING(state) {
            state.isLoading = true;
        },
        STOP_LOADING(state) {
            state.isLoading = false;
        }
    }
}