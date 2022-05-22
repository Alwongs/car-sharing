<template>
    <div class="order-side">
        <h3>Ваш заказ:</h3>
        
        <ul class="option-list">
            <li 
                v-if="getOrder.city.name" 
                class="option-item"
            >
                <div class="option-name">
                    Пункт назначения 
                </div>
                <div class="option-value">
                    <span>{{ getOrder.city.name }},</span>
                    <span>{{ getOrder.point.name }}</span>
                </div>
            </li> 

            <li 
                v-if="getOrder.model.name" 
                class="option-item"
            >
                <div class="option-name">
                    Модель 
                </div>
                <div class="option-value">
                    <span>{{ getOrder.model.name }}</span>
                </div>
            </li> 

            <li 
                v-if="getOrder.color.id" 
                class="option-item"
            >
                <div class="option-name">
                    Цвет
                </div>
                <div class="option-value">
                    <span>{{ getOrder.color.name }}</span>
                </div>
            </li>  

            <li 
                v-if="getOrder.date.range.hours" 
                class="option-item"
            >
                <div class="option-name">
                    Длительность аренды
                </div>
                <div class="option-value date">
                    <span 
                        v-if="getOrder.date.range.days" 
                        class="days"
                    >
                        {{ getOrder.date.range.days }}д 
                    </span>
                    <span 
                        v-if="getOrder.date.range.hours" 
                        class="hours"
                    >   
                        {{ getOrder.date.range.hours }}ч
                    </span>
                </div>
            </li>              

            <li 
                v-if="getOrder.rate.id" 
                class="option-item"
            >
                <div class="option-name">
                    Тариф
                </div>
                <div class="option-value">
                    <span>{{ getOrder.rate.rateTypeId.name }}</span>
                </div>
            </li>  

            <li 
                v-for="item in getOrder.extraServices"
                :key="item.id"                
                class="option-item"
            >
                <div class="option-name">
                    {{ item.name }}
                </div>
                <div class="option-value">
                    <span>Да</span>
                </div>
            </li>  
        </ul>                   


        <div class="price">
            <span>Цена:</span>
            от 8000 до 12000 Р
        </div>

        <app-btn 
            :class="{ 'active': getIsActiveBtn }"
            :text="getNextTab.buttonText"
            class="order-button" 
            @click="goTo(getNextTab.nextRouteName)"
        />
    </div>
</template>

<script>
import AppBtn from '../Common/AppBtn.vue'
import { mapGetters } from 'vuex';

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
            'getOrder',
            'getIsActiveBtn',
        ]),
        getNextTab() {
            return this.setNextTab(this.$route.name);
        }
    },
    methods: {
        goTo(route) {
            if (this.getIsActiveBtn) {
                this.$router.push({name: route});
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
                        nextRouteName: 'total',
                        buttonText: 'Итого'
                    }
                    return nextTab;
            }
        }
    },
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
    span {
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
    }
}
</style>
