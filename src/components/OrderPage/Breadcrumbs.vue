<template>
    <nav>
        <ul>
            <li 
                class="place" 
                :class="{ 
                    active: currentRouteName == 'location',
                    filled: getPoint.name 
                }"
                @click="goTo('location')"
            >
                <a href="#">Местоположение</a>
            </li>

            <li 
                class="model" 
                :class="{ 
                    active: currentRouteName == 'model',
                    filled: getModel.name, 
                    disabled: !getPoint.name 
                }"
                @click="goTo('model')"
            >
                <a href="#">Модель</a>
            </li>

            <li 
                class="additional" 
                :class="{ 
                    active: currentRouteName == 'extra', 
                    filled: getRange.days,                     
                    disabled: !getModel.name 
                }"               
                @click="goTo('extra')"
            >
                <a href="#">Дополнительно</a>
            </li> 

            <li 
                class="result" 
                :class="{ 
                    active: currentRouteName == 'total',
                    disabled: !isTabFilled                     
                }"
                @click="goTo('total')"
            >
                <a href="#">Итого</a>
            </li>
        </ul>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Breadcrumbs',
    computed: {
        ...mapGetters([
            'getModel',
            'getPoint',
            'getColor',
            'getDateFrom',
            'getDateTo',
            'getRange',
            'getRate',           
        ]),
        currentRouteName() {
            return this.$route.name;
        },
        isTabFilled() {
            if(this.getColor.id && this.getRange.hours >= 0 && this.getRate.id) {
                return true;
            }
            return false;
        }
    },
    methods: {
        goTo(route) {
            this.$router.push({name: route});
        }
    },
}
</script>

<style lang="scss" scoped>

ul li {
    display: inline;
    cursor: pointer;
    &.disabled {
        pointer-events: none;
    }
    @media (max-width: 767px) {
        display: block; 
        margin-bottom: 5px;
    }   
}
a {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-decoration: none;
    color: $grey;
}
.filled a {
    color: $black;
}
.active  a {
    color: $green;
}
.bold a {
    color: black;
}
.place, .model, .additional {
    :after {
        display: inline-block;
        content: '';
        background-image: url('../../assets/img/svg/breadcrumbs.svg');
        height: 8px;
        width: 6px;
        background-size: contain;
        margin: 0 16px;
    }
}
</style>