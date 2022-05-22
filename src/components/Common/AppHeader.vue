<template>
    <header class="header">
        <div class="logo">
            <router-link to="/" >Need for drive</router-link> 
        </div>
        <div class="map">
            Ульяновск
        </div>
    </header>
</template>

<script>

export default {
    name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 32px;
        @media (max-width: $mobile-max) {
            padding-top: 16px;
            flex-direction: column;
            align-items: flex-end;
        }
    }    
    .logo {
        font-weight: 700;
        font-size: 30px;
        @media (max-width: $mobile-max) {
            text-align: right;
            margin-bottom: 8px;
        }
        a {
            color: $green;
        }
    }
    .map {
        font-weight: 400;        
        font-size: 14px;
        color: $grey;
        display: flex;
        align-items: center;
        background-image: url("../../assets/img/svg/map_out.svg");
        background-repeat: no-repeat;
        padding-left: 25px;
        height: 20px;
        @media (max-width: $mobile-max) {
            justify-content: flex-end;
        }
    }
</style>

