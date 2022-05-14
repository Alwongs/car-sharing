<template>
    <nav>
        <ul>
            <li 
                class="place" 
                :class="{ 
                    active: currentRouteName == 'location',
                    filled: getOrder.point.name 
                }"
                @click="goTo('location')"
            >
                <a href="#">Местоположение</a>
            </li>

            <li 
                class="model" 
                :class="{ 
                    active: currentRouteName == 'model',
                    filled: getOrder.model.name, 
                    disabled: !getOrder.point.name 
                }"
                @click="goTo('model')"
            >
                <a href="#">Модель</a>
            </li>

            <li 
                class="additional" 
                :class="{ 
                    active: currentRouteName == 'extra', 
                    disabled: !getOrder.model.name 
                }"               
                @click="goTo('extra')"
            >
                <a href="#">Дополнительно</a>
            </li> 

            <li 
                class="result" 
                :class="{ active: currentRouteName == 'total' }"
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
            'getOrder',
        ]),
        currentRouteName() {
            return this.$route.name;
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
            background-image: url('../assets/img/svg/breadcrumbs.svg');
            height: 8px;
            width: 6px;
            background-size: contain;
            margin: 0 16px;
        }
    }

</style>