<template>
    <div class="slider-section">
        <div class="wrapper-slider">

            <slider-pictures-group />

            <!-- -- footer dots -- -->
            <div class="slider-footer">
                <div class="dots-group">
                    <div
                        v-for="item in slider_data"
                        :key="item.id"
                        class="slider-footer-dot"
                        :class="{'selected-slide': item.id === currentSlideIndex + 1}"
                        @click="selectSlide(item.id)" 
                    ></div>
                </div>
            </div>

            <!-- -- buttons prev-next -- -->
            <div 
                class="slider-btn slider-btn-prev" 
                @click="prevSlide"
            >
                <div class="slider-btn-icon">
                    <img 
                        :src="require('../assets/img/svg/arrow_prev.svg')" 
                        alt="Slide" 
                        class="slider-btn-img"
                    >
                </div>
            </div>
            <div 
                class="slider-btn slider-btn-next" 
                @click="nextSlide"
            >
                <div class="slider-btn-icon">
                    <img 
                        :src="require('../assets/img/svg/arrow_next.svg')" 
                        alt="Slide" 
                        class="slider-btn-img"
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SliderPicturesGroup from './SliderPicturesGroup.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'SliderSection',
    components: { SliderPicturesGroup },
    computed: {
        ...mapGetters([ 
            'slider_data',
            'currentSlideIndex' 
        ])
    },
    methods: {
        ...mapMutations([ 'UPDATE_SLIDE_INDEX' ]),
        selectSlide(id) {
            this.UPDATE_SLIDE_INDEX(id - 1);
        },
        prevSlide() {
            if (this.currentSlideIndex >= 1) {
                this.UPDATE_SLIDE_INDEX(this.currentSlideIndex - 1);
            }
        },
        nextSlide() {
            if (this.currentSlideIndex >= this.slider_data.length - 1) {
                this.UPDATE_SLIDE_INDEX(0);
            } else {
                this.UPDATE_SLIDE_INDEX(this.currentSlideIndex + 1);
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.slider-section {
    width: 50%;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        width: 43%;
    }
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        display: none;
    }
    @media (max-width: $mobile-max) {
        display: none;
    }     
}

.wrapper-slider {
    height: 100%;
    position: relative;
    overflow: hidden;
}

.slider-footer {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    padding-bottom: 32px;
    display: flex;
    align-items: center;
    z-index: 3;
}
.dots-group {
    margin: auto;
    display: flex;
}
.slider-footer-dot {
    background-color: $white;
    border: 1px solid $black;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    margin: 0 4px;
    cursor: pointer;
    z-index: 1;
}
.selected-slide {
    background-color: $green;
}
.slider-btn {
    cursor: pointer;
    position: absolute;
    top: 0;
    width: 64px;
    height: 100%; 
    z-index: 2;
    &:hover {
        background: $bg_slider_button_hover;
    }
    &-prev {
        left: 0;           
    }
    &-next {
        right: 0;           
    }
    &-icon {
        height: 20px;
        width: 10px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
    }
}
</style>