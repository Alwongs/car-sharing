<template>
    <div class="tab-extra">

        <p>Цвет</p>
        <ul class="colors">
            <li 
                v-for="color in colors"
                :key="color.id"
                :class="{ checked: selectedColorId == color.id }"
                class="color"
                @click="selectColor(color)"
            >
                <div class="circle"></div>
                <label>{{ color.name }}</label>       
            </li>
        </ul>

        <p>Дата</p>
        <div class="dates mb-32">        
            <date-picker
                v-model="dateFrom"
                :label="'C'" 
                class="date-from"
                @selectData="saveDateToStore"                
                @clearData="clearDateFrom"

            />
            <date-picker 
                v-model="dateTo"
                :label="'По'" 
                class="date-to"
                @selectData="saveDateToStore"                
                @clearData="clearDateTo"
            />
        </div>  

        <p>Тариф</p>
        <ul class="rates mb-32">
            <li 
                v-for="rate in rates"
                :key="rate.id" 
                :class="{ checked: selectedRateId == rate.id }"
                class="rate mb-8"
                @click="selectRate(rate)"
            >
                <div class="circle"></div>
                <label>{{ rate.rateTypeId.name }}, {{ rate.price }}Р/{{ rate.rateTypeId.unit }}</label>
            </li>
        </ul>

        <p>Доп услуги</p>
        <ul class="services">
            <li 
                v-for="service in extraServices"
                :key="service.id"
                :class="{ checked: this.$store.getters.getExtraServices.some(item => item.id === service.id)}"
                class="service"
                @click="selectService(service)"
            >
                <div class="checkbox"><div class="tick"></div></div>
                <label>{{ service.name }}, {{ service.price }}р</label>
            </li>
        </ul> 
    </div>
</template>

<script>
import moment from 'moment'
import { mapGetters, mapMutations, mapActions } from 'vuex';
import DatePicker from '@/components/OrderPage/SearchDatePicker.vue'

export default {
    name: 'TabExtra',       
    components: {  DatePicker },
    data() {
        return {
            selectedColorId:  this.$store.getters.getColor.id || null,
            selectedRateId:  this.$store.getters.getRate.id || null,
            dateFrom: '',
            dateTo: '',
            range: null
        }
    },
    computed: {
        ...mapGetters([
            'colors',
            'rates',
            'getOrder',
            'getColor',
            'getDateFrom',
            'getDateTo',
            'getRange',
            'getRate',
            'extraServices',
            'getExtraServices',
        ]),
    }, 
    created() {
        this.manageBtn();
        this.get_rates_from_api()
    }, 
    updated() {
        this.manageBtn();
    },
    methods: {
        ...mapMutations([
            'ACTIVATE_BTN',
            'DISACTIVATE_BTN',
            'ADD_COLOR_TO_ORDER',
            'ADD_RATE_TO_ORDER',
            'UPDATE_SERVICES_IN_ORDER',
            'ADD_DATE_TO_ORDER',
            'CLEAR_RANGE_IN_ORDER',
            'CLEAR_DATEFROM_IN_ORDER',
            'CLEAR_DATETO_IN_ORDER',
        ]),
        ...mapActions([
            'get_rates_from_api',
        ]),
        selectColor(color) {
            this.selectedColorId = color.id;
            this.ADD_COLOR_TO_ORDER(color);                
        }, 

        saveDateToStore() {
            this.range = this.countRange(this.dateFrom, this.dateTo); 
            if(this.range == 'negative or zero') {
                alert('Выберите дату окночания аренды позже даты начала аренды!');
                this.clearDateTo();
                return
            }
            this.ADD_DATE_TO_ORDER({
                dateFrom: this.dateFrom,
                dateTo: this.dateTo,
                range: this.range
            });
        }, 

        countRange(start, end) {
            moment.locale('ru');
            const dateFrom = moment(start, 'DD.MM.YYYY HH:mm');
            const dateTo = moment(end, 'DD.MM.YYYY HH:mm');
            let difference = dateTo.diff(dateFrom, 'H');
            if (difference <= 0) {
                return 'negative or zero';
            }
            return {
                days: Math.floor(difference / 24),
                hours: difference % 24
            }
        },
        clearDateFrom() {
            this.dateFrom = '';
            this.CLEAR_DATEFROM_IN_ORDER();
            this.CLEAR_RANGE_IN_ORDER();
        },
        clearDateTo() {
            this.dateTo = '';
            this.CLEAR_DATETO_IN_ORDER();
            this.CLEAR_RANGE_IN_ORDER();            
        },
        selectRate(rate) {
            this.selectedRateId = rate.id;
            this.ADD_RATE_TO_ORDER(rate);                
        }, 
        selectService(service) {
            let currentServices = this.getOrder.extraServices;
            if (this.getOrder.extraServices.some(item => item.id === service.id)) {
                let newArray = currentServices.filter(item => item.id !== service.id);  
                this.UPDATE_SERVICES_IN_ORDER(newArray);
            } else {
                currentServices.push(service);
                this.UPDATE_SERVICES_IN_ORDER(currentServices)
            }
        }, 
        manageBtn() {
            if (
                this.getColor.id && 
                this.getDateFrom &&
                this.getDateTo &&
                this.getRate.id
            ) {
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
label {
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
    cursor: pointer;
    .checkbox {
        border: 1px solid #999999;
        width: 12px;
        height: 12px;
        margin-right: 8px;       
    }  
    &.checked {
        .checkbox {
            border: 1px solid #0EC261;
        }
        .tick {
            content: '';
            background-image: url('../../assets/img/svg/tick.svg');
            width: 13px;
            height: 10px;
        }
        label {
            color: #121212;
        }
    }
}
</style>