export default {
    getters: {
        extraServices(state) {
            return state.extraServices;
        },       
        isFullTank(state) {
            return state.isFullTank;
        },       
        isNeedChildChair(state) {
            return state.isNeedChildChair;
        },       
        isRightWheel(state) {
            return state.isRightWheel;
        },       
    },
    state: {
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

/*
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
*/   
    },
}