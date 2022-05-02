<template>
    <div class="home-page">
        <main-section />
        <slider-section />
    </div>
</template>

<script>
import MainSection from '../components/MainSection.vue'
import SliderSection from '../components/SliderSection.vue'

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
