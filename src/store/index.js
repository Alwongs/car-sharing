import { createStore } from "vuex";
import events from './modules/events.js';
import slider from './modules/slider.js';
import order from './modules/order.js';
import location from './modules/location.js';
import models from './modules/models.js';
import colors from './modules/colors.js';
import rates from './modules/rates.js';
import extra from './modules/extra.js';

export default createStore({
    modules: {
        events,
        slider,
        order,
        location,
        models,
        rates,
        colors,
        extra,
    },
});