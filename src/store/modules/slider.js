export default {
    getters: {
        slider_data(state) {
            return state.slider_data;
        },
        currentSlideIndex(state) {
            return state.currentSlideIndex;
        }
    },
    state: {
        slider_data: [
            { 
                id: 1, 
                title: 'Бесплатная парковка',
                description: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
                img: 'first.jpg',
                btn_color: 'linear-gradient(90deg, #13493F 0%, #0C7B1B 100%)'
            },
            { 
                id: 2, 
                title: 'Страховка',
                description: 'Полная страховка страховка автомобиля',
                img: 'second.jpg',
                btn_color: 'linear-gradient(90deg, #132949 0%, #0C7B67 100%)'
            },
            { 
                id: 3, 
                title: 'Бензин',
                description: 'Полный бак на любой заправке города за наш счёт',
                img: 'third.jpg',
                btn_color: 'linear-gradient(90deg, #493013 0%, #7B0C3B 100%)'
            },
            { 
                id: 4, 
                title: 'Обслуживание',
                description: 'Автомобиль проходит еженедельное ТО',
                img: 'forth.jpg',
                btn_color: 'linear-gradient(90deg, #281349 0%, #720C7B 100%)'
            }
        ],
        currentSlideIndex: 0
    },
    mutations: {
        UPDATE_SLIDE_INDEX(state, index) {
            state.currentSlideIndex = index;
        }
    }
}