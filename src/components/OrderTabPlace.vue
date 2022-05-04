<template>
    <div>
        <search-place class="order-search-place" />
        <p>Выбрать на карте:</p>
        <img :src="require('../assets/img/png/map.png')" alt="карта">
    </div>
</template>

<script>
    import SearchPlace from './OrderSearchPlace.vue'

    export default {
        name: 'OrderTabPlace',
        components: {        
            SearchPlace,
        }
    }
</script>

<style lang="scss" scoped>

    .order-search-place {
        max-width: 323px;
        margin-bottom: 45px;   
    }
    p {
        margin-bottom: 16px;
        font-size: 14px;
        line-height: 16px;
        color: #121212;
    }
    img {
        max-width: 100%;
        @media (min-width: 1024px) and (max-width: 1439px) {
            max-width: 100%; 
        }
        @media (min-width: 768px) and (max-width: 1023px) {
            max-width: 100%; 
        }
        @media (max-width: 767px) {
            max-width: 100%; 
        }
    } 

</style>