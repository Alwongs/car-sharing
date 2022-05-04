<template>
    <nav>
        <ul>
            <li class="place active">
                <a href="#" @click="goTo('place')">Местоположение</a>
            </li>
            <li class="model">
                <a href="#" @click="goTo('model')">Модель</a>
            </li>
            <li class="additional">
                <a href="#" @click="goTo('extra')">Дополнительно</a>
            </li> 
            <li class="result">
                <a href="#" @click="goTo('total')">Итого</a>
            </li>
        </ul>
    </nav>
</template>

<script>

export default {
    name: 'Breadcrumbs',
    methods: {
        goTo(route) {
            this.$router.push({name: route});
        }
    }
}
</script>

<style lang="scss" scoped>

    ul li {
        display: inline;
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
    .active  a {
        color: $green;
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