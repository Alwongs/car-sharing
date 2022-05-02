<template>
    <aside>
        <div class="aside-panel"></div>
        <btn-menu class="aside-btn" />
        <btn-lang class="aside-btn" />    

        <div 
            class="menu-wrap"
            :class="{ 'active': isMenuOpened }"
        >
            <div class="menu">
                <left-side-nav />
            </div>
        </div>

    </aside>
</template>

<script>
import BtnMenu from './BtnMenu.vue';
import BtnLang from './BtnLang.vue';
import LeftSideNav from './LeftSideNav.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'LeftSide',
    components: { 
        BtnMenu,
        BtnLang,
        LeftSideNav,
    },
    computed: {
        ...mapGetters([
            'isMenuOpened'
        ])
    },
}
</script>

<style lang="scss" scoped>

.aside-panel {
    background-color: $black;
    min-width: 64px;
    height: 100%;
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        min-width: 86px;
    }
    @media (max-width: $mobile-max) {
        display: none;
    } 
}
.aside-btn {
    z-index: 2;
    cursor: pointer;
    position: absolute;
    left: 32px;
    transform: translate(-50%);
    width: 32px;
    height: 32px;
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        left: 43px;
    }   
}
.menu-wrap {
    background-color: $bg-menu-wrap;
    position: absolute;
    left: 0; top: 0;
    width: 100%;
    height: 100%;
    transition: 0.5s;
    transform: translateX(-100%);
    z-index: 1;
    &.active {
        transform: translateX(0%);
    }
}
.menu {
    position: absolute; 
    left: 0; top: 0;   
    background-color: $bg-menu;
    width: 53%;
    height: 100%;
    padding: 40vh 128px;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        width: 60%;
        padding: 40vh 96px;
    }
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        width: 100%;
        padding: 40vh 96px;
    }
    @media (max-width: $mobile-max) {
        width: 100%;
        padding: 96px 28px;
    }  
}
</style>