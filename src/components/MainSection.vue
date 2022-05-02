<template>
    <div class="main-section">
        <div class="container">
            <main-section-header class="main-section-header" />
            <main-section-content class="main-section-content" />
            <main-section-footer class="main-section-footer" />
        </div>
    </div>
</template>

<script>
import MainSectionHeader from './MainSectionHeader.vue'
import MainSectionContent from './MainSectionContent.vue'
import MainSectionFooter from './MainSectionFooter.vue'

export default {
    name: 'MainSection',
    components: {
        MainSectionHeader,
        MainSectionFooter,
        MainSectionContent
    }
}
</script>

<style lang="scss" scoped>

.main-section {
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
     
    .main-section-header {
        flex: 0 0 auto;
        margin-bottom: 19vh;
    }  
    .main-section-content {
        flex: 1 0 auto;
    }  
    .main-section-footer {
        flex: 0 0 auto;
    }  
}
</style>