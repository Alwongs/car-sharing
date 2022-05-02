export default {
    getters: {
        isMenuOpened(state) {
            return state.isMenuOpened;
        },
    },
    state: {
        isMenuOpened: false,
    },
    mutations: {
        TOGGLE_MENU(state) {
            state.isMenuOpened = !state.isMenuOpened;
        },
    }
}