import { createStore } from "vuex";
import events from './modules/events.js';
import slider from './modules/slider.js';
import location from './modules/location.js';
import cars from './modules/cars.js';
import order from './modules/order.js';
import extra from './modules/extra.js';

export default createStore({
    modules: {
        events,
        slider,
        location,
        cars,
        order,
        extra
    },
});