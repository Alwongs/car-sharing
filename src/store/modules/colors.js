export default {
    getters: {
        colors(state) {
            return state.colors;
        },       
    },
    state: {
        colors: [
            {
                id: 1,
                name: 'Любой',
            },
            {
                id: 2,
                name: 'Красный',
            },
            {
                id: 3,
                name: 'Голубой',
            },
        ],    
    },
}