export default {
    getters: {
        extraServices(state) {
            return state.extraServices;
        },       
    },
    state: {
        extraServices: [
            {
                id: 1,
                name: 'Полный бак',
                price: 500,
            },
            {
                id: 2,
                name: 'Детское кресло',
                price: 200,
            },
            {
                id: 3,
                name: 'Правый руль',
                price: 600,
            },
        ]    
    },
}