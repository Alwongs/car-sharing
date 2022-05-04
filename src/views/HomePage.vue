<template>
    <div class="home-page">
        <main-section />
        <slider-section />
    </div>
</template>

<script>
import MainSection from '../components/HomeAbout.vue'
import SliderSection from '../components/HomeSlider.vue'

export default {
    name: 'HomePage',
    components: {
        MainSection,
        SliderSection
    }
}
</script>

<style lang="scss" scoped>

.home-page {
    display: flex;
    width: 100%;
}

</style>
