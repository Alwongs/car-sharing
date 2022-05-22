<template>
    <main class="main">
        <h1 class="title">
            <span class="service">
                Рукоделие
            </span>
            <br> 
            <span class="brand">
                Need for drive
            </span>         
        </h1>

        <p class="description">
            Поминутная аренда авто твоего города
        </p>

        <app-btn
            :text="'Забронировать'"
            class="btn-main"
            @click="$router.push('/order/location')"
        />
    </main>
</template>

<script>
import AppBtn from '../Common/AppBtn.vue'

export default {
    name: 'MainSectionContent',
    components: { AppBtn },
}
</script>

<style lang="scss" scoped>

    .title {
        font-weight: 700;
        font-size: 70px;
        line-height: 66px;
        margin-bottom: 34px;
        @media (max-width: $mobile-max) {
            line-height: 110%;
            font-size: 32px;
            margin-bottom: 16px;            
        }
        .service {
            color: $black;
        }
        .brand {
            color: $green;
        }
    }
    .description {
        font-weight: 300;
        font-size: 26px;
        line-height: 30px;
        color: $grey;
        margin-bottom: 60px;
        @media (max-width: $mobile-max) {
            font-size: 18px;
            line-height: 21px;
            margin-bottom: 32px;           
        }
    } 
    .btn-main {
        width: 250px;
        height: 48px;
        background: $bg-btn;
        color: $white;
        background-blend-mode: darken;
        box-shadow: 0px 2px 4px $box-shadow-color;
        border-radius: 8px;
        @media (max-width: $mobile-max) {
            box-shadow: none;
            width: 100%;
            height: 50px;
            border-radius: 0;
        }        
    }
</style>



