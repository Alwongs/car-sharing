<template>
    <button 
        :class="{'opened': isMenuOpened}"
        class="btn-menu"
        @click="toggleMenuHandler" 
    ></button>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'AsidePanelBtnMenu',
    computed: {
        ...mapGetters([
            'isMenuOpened'
        ])
    },
    methods: {
        toggleMenuHandler() {
            this.$store.commit('TOGGLE_MENU');
        }
    }
}
</script>

<style lang="scss" scoped>

.btn-menu {
    top: 32px;
    background-image: url('../assets/img/svg/menu_btn.svg');
    @media (max-width: $mobile-max) {
        background-image: url('../assets/img/svg/menu_btn_black.svg');
    } 
    &.opened {
        background-image: url('../assets/img/svg/menu_close_btn.svg');        
    }    
}
</style>