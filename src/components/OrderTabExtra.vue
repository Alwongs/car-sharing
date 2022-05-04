<template>
    <div class="tab-extra">
        <p>Цвет</p>
        <div class="car-colors">
            <div class="car-color checked">
                <div class="circle"></div>
                <div class="label">Любой</div>       
            </div>
            <div class="car-color">
                <div class="circle"></div>
                <div class="label">Красный</div>
            </div>
            <div class="car-color">
                <div class="circle"></div>
                <div class="label">Голубой</div>
            </div>
        </div>

        <p>Дата аренды</p>
        <search-date  class="mb-32"/>

        <p>Тариф</p>
        <div class="payment-types mb-32">
            <div class="payment-type mb-8">
                <div class="circle"></div>
                <div class="label">Поминутно, 7Р/сутки</div>       
            </div>
            <div class="payment-type checked">
                <div class="circle"></div>
                <div class="label">На сутки, 1999Р/сутки</div>
            </div>
        </div>

        <p>Доп услуги</p>
        <ul>
            <li class="service checked">
                <div class="checkbox"><div class="tick"></div></div>
                <input type="checkbox" name="isFullTank" id="service1" hidden>
                <label for="service1">Полный бак, 500р</label>
            </li>
            <li class="service">
                <div class="checkbox"><div class="tick"></div></div>
                <input type="checkbox" name="isFullTank" id="service2" hidden>
                <label for="service2">Детское кресло, 200р</label>
            </li>
            <li class="service">
                <div class="checkbox"><div class="tick"></div></div>
                <input type="checkbox" name="isFullTank" id="service3" hidden>
                <label for="service3">Правый руль, 600р</label>
            </li>
        </ul>        
        
    </div>
</template>

<script>
import SearchDate from './OrderSearchDate.vue'

    export default {
        name: 'OrderTabExtra',
        components: {
            SearchDate
        }
    }
</script>

<style lang="scss" scoped>

    p {
        font-family: 'Roboto-light';
        font-size: 14px;
        line-height: 16px;
        color: #121212;
        margin-bottom: 16px;
    }
    .label {
        font-family: 'Roboto-light';
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        color: #999999;
    }
    .circle {
        border: 1px solid #999999;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin-right: 8px;
    }
    .car-colors {
        display: flex;
        margin-bottom: 32px;
        .car-color {
            display: flex;  
            align-items: center;
            margin-right: 16px;
        }
    }
    .payment-type {
        display: flex;
        align-items: center;
    }
    .car-color, .payment-type {
        &.checked {
            .circle {
                border: 3px solid #0EC261;
            } 
            .label {
                color: #121212;                    
            }              
        }
    }
    .service {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        .checkbox {
            border: 1px solid #999999;
            width: 12px;
            height: 12px;
            margin-right: 8px;       
        }  
        label {
            font-family: 'Roboto-light';
            font-size: 14px;
            line-height: 16px;
            color: #999999;
        }
        &.checked {
            .checkbox {
                border: 1px solid #0EC261;
            }
            .tick {
                content: '';
                background-image: url('../assets/img/svg/tick.svg');
                width: 13px;
                height: 10px;
            }
            label {
                color: #121212;
            }
        }
    }

</style>