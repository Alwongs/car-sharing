<template>
    <div class="date-search">
        <label for="inputCalendar">{{ label }}</label>
        <div class="input-block">
            <input 
                v-model="value"
                id="inputCalendar" 
                type="text"
                maxlength="16" 
                placeholder="Введите дату и время"
                @click="showCalendar"
            >
            <button
                class="close-btn" 
                :class="{ 'btn-active': value }" 
                @click="clearData"  
            ></button> 
        </div>

<!-- dropdown modal -->        
        <div 
            v-if="isShown" 
            class="calendar-block"
        >
            <ul class="date-list">
                <li 
                    v-for="date in dates" 
                    :key="date"
                    class="item"
                    @click="selectDate(date)"
                >
                    {{ date }}
                </li>
            </ul>
            <ul class="time-list">
                <li 
                    v-for="time in times" 
                    :key="time"
                    class="item"
                    @click="selectTime(time)"                                            
                >
                    {{ time }}
                </li>
            </ul>
        </div>
<!-- /dropdown modal -->         
    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'DatePicker',
    props: ['label', 'modelValue'],
    data() {
        return {
            isShown: false,
            dates: [],
            times: []
        }
    },
    computed: {
        value: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        }
    },    
    methods: {       
        showCalendar() {
            if(this.isShown === false) {
                this.dates = this.makeDateList();
                this.times = this.makeTimeList();
            }
            this.isShown = !this.isShown;
        },
        selectDate(date) {
            this.value = date;           
        },
        selectTime(time) {
            if(this.value && this.value.length == 10) {
                this.value += ' ' + time;
                this.$emit('selectData');
                this.isShown = false;
            }
        },
        clearData() {
            this.$emit('clearData');
            this.isShown = false;            
        },
        makeDateList() {
            return this.makeList({
                requestData: {}, 
                iterration: 365, 
                format: 'DD.MM.YYYY', 
                step: 1, 
                unit: 'days'
            });
        },
        makeTimeList() {
            return this.makeList({
                requestData: {house: 0, minutes: 0}, 
                iterration: 24, 
                format: 'HH:mm', 
                step: 1, 
                unit: 'hours'
            });
        },
        makeList({requestData, iterration, format, step, unit}) {
            moment.locale('ru');
            let list = [];
            let startItem = moment(requestData);
            for(let i = 0; i <= iterration; i++) {
                list.push(startItem.format(format));
                startItem.add(step, unit);
            }
            return list
        }
    }
}
</script>

<style lang="scss" scoped>

.date-search {
    width: 240px;
    margin-bottom: 10px;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.input-block {
    border-bottom: 1px solid $grey;
    display: flex;
    align-items: center;   
    padding-bottom: 3px; 
}
label {
    font-size: 14px;
    font-weight: 300;  
    color: $black;  
    margin-right: 8px;
}
input {
    border: none;
    height: fit-content;
    padding: 0 8px;
    font-size: 14px;
    color: $black;  
    outline: none;
    &::-webkit-input-placeholder {
        color: #999999;
    } 
    &::-moz-placeholder {
        color: #999999;
    }
}
.close-btn {
    width: 20px;
    height: 20px;
    border: none;
    background: none;
    cursor: pointer;

} 
.btn-active {
    background-image: url('../../assets/img/svg/input_close_btn.svg');
    background-repeat: no-repeat;            
    background-position: center;
}



.calendar-block {
    z-index: 1;
    display: flex;
    background-color: #fff;
    box-shadow: 4px 5px 8px 2px rgba(0, 0, 0, 0.2);
    position: absolute;
    left: 10px;
    top: 30px;
    border-radius: 5px;
    width: 240px;
    height: 250px;
    padding: 10px 10px 10px 0;
}
.date-list {
    font-size: 14px;
    color: $grey;
    height: 100%;
    width: 60%;
    overflow-y: auto;
}
.time-list {
    font-size: 14px;    
    color: $grey;
    height: 100%;
    width: 40%;
    overflow-y: auto;    
}
.item {
    text-align: right;
    padding: 5px 20px 5px 0;
    cursor: pointer;
    &:hover {
        background-color: lightgrey;
    }
}
</style>