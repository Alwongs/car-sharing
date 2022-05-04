<template>
    <div class="home-about">
        <div class="container">
            <app-header class="app-header" />
            <about-content class="about-content" />
            <app-footer class="app-footer" />
        </div>
    </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import AboutContent from './HomeAboutContent.vue'
import AppFooter from './AppFooter.vue'

export default {
    name: 'HomeAbout',
    components: {
        AppHeader,
        AppFooter,
        AboutContent
    }
}
</script>

<style lang="scss" scoped>

.home-about {
    width: 50%;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        width: 57%;
    }
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        width: 100%;
    }
    @media (max-width: $mobile-max) {
        width: 100%;
    }     
}
.container {
    max-width: 581px;
    height: 100%; 
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        max-width: 506px;
    }
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        max-width: 638px;
    }
    @media (max-width: $mobile-max) {
        max-width: 100%;
        padding: 0 16px;
    }    
     
    .app-header {
        flex: 0 0 auto;
        margin-bottom: 19vh;
    }  
    .about-content {
        flex: 1 0 auto;
    }  
    .app-footer {
        flex: 0 0 auto;
    }  
}
</style>