<template>                  
    <div class="order-page">
        <app-header class="order-page__header" />

        <div class="breadcrumbs-panel">
            <bread-crumbs 
                v-if="this.$route.name !== 'confirm'"
                class="breadcrumbs" 
            />
            <span 
                v-if="this.$route.name === 'confirm'"
                class="breadcrumbs order-number"
            >
                Заказ номер {{ getCreatedOrder.id }}
            </span>
        </div>

        <div class="main">
            <div class="left">
                <router-view></router-view>
            </div>

            <div class="right">                        
                <order-side />                        
            </div> 
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import AppHeader from '@/components/Common/AppHeader.vue'
    import BreadCrumbs from '@/components/OrderPage/Breadcrumbs.vue'
    import OrderSide from '@/components/OrderPage/OrderSide.vue'

    export default {
        name: 'OrderPage',
        components: {        
            AppHeader,
            BreadCrumbs,
            OrderSide,
        },
        computed: {
            ...mapGetters([
                'getCreatedOrder'
            ]),
        },           
    }
</script>

<style lang="scss" scoped>

    .order-page {
        display: flex;
        flex-direction: column;
        width: 100%;
        @media (max-width: $mobile-max) {
            height: fit-content;
        }
    }
    .order-page__header {
        width: 1247px;
        margin: 0 auto;
        padding: 32px 0 32px 0;        
        @media (min-width: $desktop-min) and (max-width: $desktop-max) {
            padding: 32px 64px 32px 64px;
            width: 100%;
        }
        @media (min-width: $tablet-min) and (max-width: $tablet-max) {
            padding: 32px 32px 32px 32px;            
            width: 100%;
        }
        @media (max-width: $mobile-max) {
            padding: 16px;
            width: 100%;
        }
    }
    .breadcrumbs-panel {
        display: flex;
        align-items: center;
        min-height: 32px;
        border-top: 1px solid #EEEEEE;
        border-bottom: 1px solid #EEEEEE;
        .breadcrumbs {
            width: 1247px;
            margin: 0 auto;
            @media (min-width: $desktop-min) and (max-width: $desktop-max) {
                padding: 0 64px 0 64px; 
                width: 100%;
            }
            @media (min-width: $tablet-min) and (max-width: $tablet-max) {
                padding: 0 32px 0 32px;
                width: 100%;
            }
            @media (max-width: $mobile-max) {
                padding: 5px 16px 5px 16px;
                width: 100%; 
            }   
        }
        .order-number {
            font-size: 14px;
            font-weight: 700;
        }
    }
    .main {
        flex-grow: 1;
        display: flex;
        justify-content: space-between;
        width: 1247px;
        margin: 0 auto;
        @media (min-width: $desktop-min) and (max-width: $desktop-max) {
            padding: 0 64px 0 64px;            
            width: 100%
        }
        @media (min-width: $tablet-min) and (max-width: $tablet-max) {
            padding: 0 32px 0 32px;
            width: 100%
        }
        @media (max-width: $mobile-max) {
            padding: 0 16px 0 16px;
            flex-direction: column;
            width: 100%;
        }  
        .left {
            flex-basis: 736px;
            flex-shrink: 1;
            padding-top: 32px; 
        }
        .right {
            padding-top: 32px;
            border-left: 1px solid #EEEEEE;
            @media (min-width: $desktop-min) and (max-width: $desktop-max) {
                margin-left: 64px;
            }
            @media (min-width: $tablet-min) and (max-width: $tablet-max) {
                margin-left: 32px;
            }
            @media (max-width: $mobile-max) {
                border-left: none;
            }    
        }           
    }
</style>