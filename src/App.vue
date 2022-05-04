<template>
    <div class="wrapper">
        <aside-panel />
        <router-view/>
    </div>
</template>

<script>
import AsidePanel from './components/AsidePanel.vue'

export default {
    name: 'App',
    components: { AsidePanel }
}
</script>

<style lang="scss" scoped>

.wrapper {
    display: flex;
    height: 100vh;
}
</style>
