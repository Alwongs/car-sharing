<template>
    <div class="tab-total">
        <div class="total-data">
            <div class="car-model">Elantra</div>
            <div class="car-plate mb-8">
                K 761 HA 73
            </div>
            <div class="fuel-level">
                Топливо <span>100%</span>
            </div>
            <div class="time-ready">
                Доступна с <span>12.06.2019 12:00</span>
            </div>
        </div>
        <div class="car-image">
            <img :src="require('@/assets/img/png/car.png')" alt="car-pic">            
        </div>
    </div>
</template>

<script>

    export default {
        name: 'OrderTabTotal',
    }
</script>

<style lang="scss" scoped>

    .tab-total {
        display: flex;
        justify-content: space-between;
        @media (min-width: 768px) and (max-width: 1023px) {
            flex-direction: column;
        }
        @media (max-width: 767px) {
            flex-direction: column;
        }
    }

    .total-data {
        div {
            margin-bottom: 8px;
            font-family: 'Roboto-light';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 16px;
            color: #121212;
        }        
        flex-basis: 262px;
        flex-shrink: 0;
        @media (min-width: 768px) and (max-width: 1023px) {
            flex: none;
        }
        @media (max-width: 767px) {
            flex: none;
        }
        .car-model {
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
        }
        .car-plate {
            border: 1px solid #999999;
            border-radius: 4px;
            text-align: center;
            padding: 4px 0 4px 0;
            font-weight: 400;
            width: 94px;
            height: 24px;
        }
        span {
            font-weight: 400;       
        }        
    }

    .car-image {
        text-align: right;
        flex-basis: 474px;
        flex-shrink: 1;
        @media (min-width: 1024px) and (max-width: 1439px) {

        }
        @media (min-width: 768px) and (max-width: 1023px) {
            flex: none;
        }
        @media (max-width: 767px) {
            flex: none;
        }
        img {
            max-width: 100%;
        }
    }

</style>