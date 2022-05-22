<template>
    <div class="home-page">
        <main-section />
        <slider-section />
    </div>
</template>

<script>
import MainSection from '@/components/HomePage/HomeAbout.vue'
import SliderSection from '@/components/HomePage/HomeSlider.vue'

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
