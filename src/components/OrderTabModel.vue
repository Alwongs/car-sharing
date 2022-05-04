<template>
    <div class="tab-model">
        <div class="car-classes">
            <div class="car-class">
                <div class="circle checked"></div>
                <div class="label">Все модели</div>       
            </div>
            <div class="car-class">
                <div class="circle"></div>
                <div class="label">Эконом</div>
            </div>
            <div class="car-class">
                <div class="circle"></div>
                <div class="label">Премиум</div>
            </div>
        </div>
        <div class="car-cards">

            <div 
                class="car-card"  
                v-for="(n, index) in 25" 
                :key="index"
            >
                <div class="car-title">ELANTRA {{ n }}</div>
                <div class="car-price">12000 - 25000 Р</div>
                <div class="car-img">
                    <img :src="require('../assets/img/png/car.png')" alt="car-pic">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

    export default {
        name: 'OrderTabModel',

        methods: {
            ...mapMutations([
                'ACTIVATE_BTN',
                'DISACTIVATE_BTN',
            ]),
        },
        mounted() {
            this.DISACTIVATE_BTN();       
        },
    }
</script>

<style lang="scss" scoped>

    .car-classes {
        display: flex;
        margin-bottom: 48px;
        .car-class {
            display: flex;  
            align-items: center;
            margin-right: 16px;          
        }
        .circle {
            border: 1px solid #999999;
            border-radius: 50%;
            width: 12px;
            height: 12px;
            margin-right: 8px;
            &.checked {
                border: 3px solid #0EC261;
            }
        }
        .label {
            font-family: 'Roboto-light';
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            line-height: 16px;
            color: #999999;
        }
    }

    .car-cards {
        display: flex;
        align-content: flex-start;
        width: 736px;
        height: calc(100vh - 128px - 96px);
        flex-wrap: wrap;
        overflow-y: auto;
        @media (min-width: 1024px) and (max-width: 1439px) {
            width: 100%; 
        }
        @media (min-width: 768px) and (max-width: 1023px) {
            width: 100%; 
        }
        @media (max-width: 767px) {
            width: 100%; 
        }
    }
    .car-card {
        border: 1px solid #EEEEEE;
        max-width: 50%;
        flex-grow: 1;
        font-family: 'Roboto-light';
        font-style: normal;
        font-weight: 400;
        height: auto;
        .car-title {
            margin: 16px 16px 0 16px;
            font-size: 18px;
            line-height: 21px;
            color: #121212;        
        }
        .car-price {
            margin: 0 16px 36px 16px;   
            font-size: 14px;
            line-height: 16px;
            color: #999999;            
        }
        @media (min-width: 1024px) and (max-width: 1439px) {
            width: 50%; 
        }
        @media (min-width: 768px) and (max-width: 1023px) {
            min-width: 100%;
        }
        @media (max-width: 767px) {
            min-width: 100%; 
        }
    }
    .car-img {
        text-align: right;
    }
    img {
        margin: 0 16px 16px 0;
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