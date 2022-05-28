<template>
    <button 
        class="lang-btn"
        :class="{ hidden: !isMenuOpened }"
    >
        Eng
    </button>      
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'LangBtn',
    computed: {
        ...mapGetters([
            'isMenuOpened'
        ]),
    },     
}
</script>

<style lang="scss" scoped>

.lang-btn {
    font-weight: 700;
    font-size: 13px;
    color: $green;
    bottom: 32px;
    @media (max-width: $mobile-max) {
        bottom: 28px;  
        &.hidden {
            display: none;
        }      
    }    
}
</style>