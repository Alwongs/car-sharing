<template>
    <div class="order-side">
        <h3>Ваш заказ:</h3>
        
        <ul
            v-if="getCity.name"
            class="option-list"
        >
            <li 
                v-if="getCity.name" 
                class="option-item"
            >
                <div class="option-name">
                    Пункт назначения 
                </div>
                <div class="option-value">
                    <span>{{ getCity.name }},</span>
                    <span>{{ getPoint.name }}</span>
                </div>
            </li> 

            <li 
                v-if="getModel.name" 
                class="option-item"
            >
                <div class="option-name">
                    Модель 
                </div>
                <div class="option-value">
                    <span>{{ getModel.name }}</span>
                </div>
            </li> 

            <li 
                v-if="getColor.id" 
                class="option-item"
            >
                <div class="option-name">
                    Цвет
                </div>
                <div class="option-value">
                    <span>{{ getColor.name }}</span>
                </div>
            </li>  

            <li 
                v-if="getRange.hours" 
                class="option-item"
            >
                <div class="option-name">
                    Длительность аренды
                </div>
                <div class="option-value date">
                    <span 
                        v-if="getRange.days" 
                        class="days"
                    >
                        {{ getRange.days }}д 
                    </span>
                    <span 
                        v-if="getRange.hours" 
                        class="hours"
                    >   
                        {{ getRange.hours }}ч
                    </span>
                </div>
            </li>              

            <li 
                v-if="getRate.id" 
                class="option-item"
            >
                <div class="option-name">
                    Тариф
                </div>
                <div class="option-value">
                    <span>{{ getRate.rateTypeId.name }}</span>
                </div>
            </li>  

            <li 
                v-if="getIsFullTank.include"
                class="option-item">
                <div class="option-name">
                    {{ getIsFullTank.name }}
                </div>
                <div class="option-value">
                    <span>Да</span>
                </div>
            </li>
            <li 
                v-if="getIsNeedChildChair.include"
                class="option-item">
                <div class="option-name">
                    {{ getIsNeedChildChair.name }}
                </div>
                <div class="option-value">
                    <span>Да</span>
                </div>
            </li> 
            <li 
                v-if="getIsRightWheel.include"
                class="option-item">
                <div class="option-name">
                    {{ getIsRightWheel.name }}
                </div>
                <div class="option-value">
                    <span>Да</span>
                </div>
            </li> 
        </ul>                   

        <div v-if="getModel.id" class="price">
            <span>Цена: </span>
            <span v-if="getTotalPrice === 0">
                от {{ getModel.priceMin }} до {{ getModel.priceMax }} Р
            </span>
            <span v-else>
                {{ getTotalPrice }} Р
            </span>           
        </div>

        <app-btn 
            :class="{ 'active': getIsActiveBtn, 'bg-red': $route.name == 'confirm' }"
            :text="getNextTab.buttonText"
            class="order-button" 
            @click="goTo(getNextTab.nextRouteName)"
        />
    </div>
</template>

<script>
import AppBtn from '../Common/AppBtn.vue'
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    name: 'OrderSide',
    components: { AppBtn },
    data() {
        return {
            nextTab: {}
        }
    },
    computed: {
        ...mapGetters([
            'getPriceMin',
            'getPriceMax',
            'getCity',
            'getPoint',
            'getModel',
            'getColor',
            'getDateFrom',
            'getDateTo',
            'getRange',
            'getRate',
            'getIsFullTank',
            'getIsNeedChildChair',
            'getIsRightWheel',   
            'getIsActiveBtn',
            'isConfirmOpened'
        ]),
        getNextTab() {
            return this.setNextTab(this.$route.name);
        },
        getTotalPrice() {
            return this.countTotalPrice();
        }
    },
    methods: {
        ...mapMutations([
            'CLEAR_CREATED_ORDER',
            'CLEAR_CITY_FROM_ORDER',
            'CLEAR_POINT_FROM_ORDER',
            'CLEAR_MODEL_IN_ORDER',
            'CLEAR_PRICE_ORDER',
            'CLEAR_COLOR_IN_ORDER',
            'CLEAR_DATE_IN_ORDER',
            'CLEAR_RATE_IN_ORDER',
            'CLEAR_SERVICES_IN_ORDER',
            'TOGGLE_CONFIRM',
        ]),
        ...mapActions([
           'get_cities_from_api',
           'get_points_from_api',
           'create_order_in_api',
        ]),                
        countTotalPrice() {
            let totalPrice = 0;
            totalPrice += this.getRate.price || 0;

            if(this.getIsFullTank.include) {
                totalPrice +=this.getIsFullTank.price;
            }
            if(this.getIsNeedChildChair.include) {
                totalPrice +=this.getIsNeedChildChair.price;
            }
            if(this.getIsRightWheel.include) {
                totalPrice +=this.getIsRightWheel.price;
            }         
            return totalPrice;
        },
        goTo(route) {
            if (this.getIsActiveBtn) {
                if (route === 'confirm') {
                    this.TOGGLE_CONFIRM();
                    // вызываем метод создания заказа в модальном окне..
                } else if(this.getNextTab.buttonText === 'Отменить') {
                    this.CLEAR_CITY_FROM_ORDER();
                    this.CLEAR_POINT_FROM_ORDER();
                    this.CLEAR_CREATED_ORDER();
                    this.$router.push({name: route});                    
                }  else {
                    this.$router.push({name: route});
                }              
            }
        },
        setNextTab(currentRouteName) {
            let nextTab = {};
            switch (currentRouteName) {
                case 'location':
                    nextTab = {
                        nextRouteName: 'model',
                        buttonText: 'Выбрать модель'
                    }
                    return nextTab;
                case 'model':
                    nextTab = {
                        nextRouteName: 'extra',
                        buttonText: 'Дополнительно'
                    }
                    return nextTab;
                case 'extra':
                    nextTab = {
                        nextRouteName: 'total',
                        buttonText: 'Итого'
                    }
                    return nextTab;
                case 'total':
                    nextTab = {
                        nextRouteName: 'confirm',
                        buttonText: 'Заказать'
                    }
                    return nextTab;                    
                case 'confirm':
                    nextTab = {
                        nextRouteName: 'location',
                        buttonText: 'Отменить'
                    }
                    return nextTab;
            }
        }
    },
    watch: {
        getCity() {
            this.CLEAR_MODEL_IN_ORDER();
        },
        getPoint() {
            this.CLEAR_MODEL_IN_ORDER();            
        },
        getModel() {
            this.CLEAR_COLOR_IN_ORDER();
            this.CLEAR_DATE_IN_ORDER();
            this.CLEAR_RATE_IN_ORDER();
            this.CLEAR_SERVICES_IN_ORDER();
        }
    }
}
</script>

<style lang="scss" scoped>

.order-side {
    width: 320px;
    height: 100%;
    padding-left: 32px;
    @media (max-width: $mobile-max) {
        padding-left: 0;
        width: 100%;
        min-height: 100%;
    } 
}
h3 {
    text-align: right;
    font-size: 18px;
    font-weight: 500;
    color: $black;
    padding-bottom: 26px;
}
.option-list {
    margin-bottom: 32px;
}
.option-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
}
.option-name {
    font-size: 14px;
    font-weight: 300;
    color: $black;
    display: flex;
    width: 100%;
    white-space: nowrap;
    align-items: flex-end;
    &:after {
        border-bottom: 1px dotted $black;
        content: '';
        width: 100%;
    }
}
.option-value {
    font-size: 14px;
    font-weight: 300;
    color: $grey;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    text-align: right;
    &.date {
        display: flex;
        flex-direction: row;
        .days {
            margin-right: 3px;
        }        
    }
}
.price {
    font-size: 16px;
    font-weight: 400;
    color: $black; 
    margin-bottom: 32px; 
    span:first-child {
        font-weight: 500;                
    }                   
}
.order-button {
    background: $grey_light;
    width: 100%;
    height: 45px;
    border-radius: 8px;
    font-weight: 400;
    color: $white;
    cursor: default;
    &.active {
        background: linear-gradient(90deg, $green 2.61%, $green_dark 112.6%);
        background-blend-mode: darken;
        cursor: pointer;  
        &.bg-red {
            background: linear-gradient(270deg, $red 2.61%, $red_dark 112.6%);            
        }                     
    }
    @media (max-width: $mobile-max) {
        border-radius: 0;
        position: relative;
        margin-left: -16px;
        width: calc(100% + 32px);
        margin-bottom: 32px;
    }      
}
</style>
