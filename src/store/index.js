import { createStore } from "vuex";
import events from './modules/events.js';
import slider from './modules/slider.js';
import location from './modules/location.js';
import models from './modules/models.js';
import order from './modules/order.js';
import extra from './modules/extra.js';

export default createStore({
    modules: {
        events,
        slider,
        location,
        models,
        order,
        extra
    },
});