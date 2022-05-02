<template>
    <div class="wrapper">
        <left-side />
        <router-view/>
    </div>
</template>

<script>
import LeftSide from './components/LeftSide.vue'

export default {
    name: 'App',
    components: { LeftSide }
}
</script>

<style lang="scss" scoped>

.wrapper {
    display: flex;
    height: 100vh;
}
</style>
