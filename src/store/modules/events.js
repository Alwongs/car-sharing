export default {
    getters: {
        isLoading(state) {
            return state.isLoading;
        },
        isMenuOpened(state) {
            return state.isMenuOpened;
        },
        isConfirmOpened(state) {
            return state.isConfirmOpened;
        },
    },
    state: {
        isLoading: false,
        isMenuOpened: false,
        isConfirmOpened: false,
    },
    mutations: {
        START_LOADING(state) {
            state.isLoading = true;
        },
        STOP_LOADING(state) {
            state.isLoading = false;
        },
        TOGGLE_MENU(state) {
            state.isMenuOpened = !state.isMenuOpened;
        },
        TOGGLE_CONFIRM(state) {
            state.isConfirmOpened = !state.isConfirmOpened;
        },
    }
}