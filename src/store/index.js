import { createStore } from "vuex";
import events from './modules/events';
import slider from './modules/slider';

export default createStore({
    modules: {
        events,
        slider
    },
});