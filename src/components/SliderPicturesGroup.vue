<template>
    <div 
        class="slider-group" 
        :style="{'margin-left': `-${getSlideMargin()}%` }"
    >
        <div 
            class="slide" 
            v-for="slide in slider_data" 
            :key="slide.id"
        >
            <div class="slide-container">
                <h2>{{ slide.title }}</h2>
                <p>
                    {{ slide.description }}
                </p>
                <btn-common
                    :text="'Подробнее'"
                    :style="{ 'background': slide.btn_color }"
                    class="btn-details" 
                />
            </div>            
            <img 
                :src="require('../assets/img/jpg/' + slide.img)" 
                alt="Slide picture"
            >
        </div>
    </div>    
</template>

<script>
import { mapGetters } from 'vuex';
import BtnCommon from './BtnCommon.vue';

export default {
  components: { BtnCommon },
    name: 'SliderPicturesGroup',
    computed: {
        ...mapGetters([ 
            'slider_data',
            'currentSlideIndex'
        ])
    },
    methods: {
        getSlideMargin() {
            return this.currentSlideIndex * 100
        }
    }
}
</script>

<style lang="scss" scoped>

.slider-group {
    height: 100%;
    width: 400%;
    display: flex;
    transition: all .6s ease;
}
.slide {
    position: relative;
    width: 25%;
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    &:after {
        z-index: 1;
        content: '';
        position: absolute;
        left:0; top:0;
        width: 100%;
        height: 100%;
        background-image: $bg_slide_filter;
    } 
}
.slide-container {
    z-index: 2;
    position: absolute;
    top: 0; 
    left: 96px;
    right: 96px;
    height: 100%; 
    padding-top: 29vh;       
}
h2 {
    font-weight: 500;
    font-size: 40px;
    margin-bottom: 8px;
    color: $white;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        font-size: 32px;
    }
}
p {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 32px;
    color: $grey_light;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        font-size: 22px;
    }
}
.btn-details {
    width: 164px;
    height: 48px;
    border-radius: 4px;
    font-weight: 500;
    font-size: 18px;
    color: $white;
    cursor: pointer;
}
</style>