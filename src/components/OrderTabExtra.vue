<template>
    <div class="tab-extra">
        <p>Цвет</p>
        <div class="colors">
            <div 
                v-for="color in colors"
                :key="color.id"
                :class="{ checked: selectedColorId == color.id }"
                class="color"
                @click="selectColor(color)"
            >
                <div class="circle"></div>
                <div class="label">{{ color.name }}</div>       
            </div>
        </div>

        <p>Дата аренды</p>
        <search-date  class="mb-32"/>


        <p>Тариф</p>
        <div class="rates mb-32">
            <div 
                v-for="rate in getRates"
                :key="rate.id" 
                :class="{ checked: selectedRateId == rate.id }"
                class="rate mb-8"
                @click="selectRate(rate)"
            >
                <div
                    class="circle"
                ></div>
                <div class="label">{{ rate.rateTypeId.name }}, {{ rate.price }}Р/{{ rate.rateTypeId.unit }}</div>
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
import { mapGetters, mapMutations, mapActions } from 'vuex';

import SearchDate from './OrderSearchDate.vue'

    export default {
        name: 'OrderTabExtra',       
        components: { SearchDate },
        data() {
            return {
                selectedRateId:  this.$store.getters.getOrder.rate.id || null,
                selectedColorId:  this.$store.getters.getOrder.color.id || null,
                colors: [
                    {
                        id: 1,
                        name: 'Любой',
                    },
                    {
                        id: 2,
                        name: 'Красный',
                    },
                    {
                        id: 3,
                        name: 'Голубой',
                    },
                ]
            }
        },
        computed: {
            ...mapGetters([
                'getRates',
            ]),
        }, 

        created() {
            this.manageBtn();
        }, 
        mounted() {
            this.get_rates_from_api()
        },
        updated() {
            this.manageBtn();
        },

        methods: {
            ...mapMutations([
                'ACTIVATE_BTN',
                'DISACTIVATE_BTN',
                'ADD_RATE_TO_ORDER',
                'ADD_COLOR_TO_ORDER'
            ]),
            ...mapActions([
                'get_rates_from_api',
            ]),

            selectRate(rate) {
                this.selectedRateId = rate.id;
                this.ADD_RATE_TO_ORDER(rate);                
            },
            selectColor(color) {
                this.selectedColorId = color.id;
                this.ADD_COLOR_TO_ORDER(color);                
            },
            
            manageBtn() {
                if (this.selectedCarId) {
                    this.ACTIVATE_BTN();
                } else {
                    this.DISACTIVATE_BTN();            
                }            
            }, 
        },
    }
</script>

<style lang="scss" scoped>

p {
    font-size: 14px;
    color: #121212;
    margin-bottom: 16px;
}
.label {
    font-size: 14px;
    font-weight: 300;
    color: #999999;
}
.circle {
    border: 1px solid #999999;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    margin-right: 8px;
}
.colors {
    display: flex;
    margin-bottom: 32px;
    .color {
        display: flex;  
        align-items: center;
        margin-right: 16px;
        cursor: pointer;
    }
}
.rate {
    display: flex;
    align-items: center;
    cursor: pointer;
}
.color, .rate {
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