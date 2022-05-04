import { createStore } from "vuex";
import events from './modules/events.js';
import slider from './modules/slider.js';
import cities from './modules/cities.js';
import points from './modules/points.js';
import steps from './modules/steps.js';

export default createStore({
    modules: {
        events,
        slider,
        cities,
        points,
        steps
    },
});