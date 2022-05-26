<template>
    <div>
        <div class="location order-search-location">
            <location-input
                v-model="city.name"
                :text="'Город'"
                :placeholder="'Начните вводить город ...'"            
                :items="cities"
                @openList="openCityList"
                @selectItem="selectCity"
                @clearItem="clearCity"
            />
            <location-input 
                v-model="point.name"
                :text="'Пункт выдачи'"
                :placeholder="'Начните вводить пункт ...'"
                :items="points" 
                @openList="openPointList"
                @selectItem="selectPoint"
                @clearItem="clearPoint"                       
            />
        </div>
        <p>Выбрать на карте:</p>
        <img :src="require('@/assets/img/png/map.png')" alt="карта">
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import LocationInput from '@/components/OrderPage/SearchLocationInput.vue';

export default {
    name: 'OrderTabLocation',
    components: {  
        LocationInput
    },
    data() {
        return {
            city: this.$store.getters.getCity || {},
            point: this.$store.getters.getPoint || {}
        }
    },
    computed: {
        ...mapGetters([
            'getCity',
            'getPoint',
            'cities',
            'points',
        ]),
    },
    updated() {
        this.manageBtn();
    },
    created() {
        this.manageBtn();
    },
    methods: {
        ...mapMutations([
           'ADD_CITY_TO_ORDER',
           'ADD_POINT_TO_ORDER',
           'CLEAR_CITY_FROM_ORDER',
           'CLEAR_POINT_FROM_ORDER',
           'ACTIVATE_BTN',
           'DISACTIVATE_BTN',
        ]),
        ...mapActions([
           'get_cities_from_api',
           'get_points_from_api',
        ]),
        manageBtn() {
            if (this.city.name && this.point.name) {
                this.ACTIVATE_BTN();
            } else {
                this.DISACTIVATE_BTN();            
            }            
        },
        openCityList() {
            this.get_cities_from_api();
        },
        selectCity(city) {
            this.city = city;
            this.CLEAR_POINT_FROM_ORDER();
            this.point = {};
            this.ADD_CITY_TO_ORDER(city);               
        },
        clearCity() {
            this.city = {};
            this.point = {};
            this.CLEAR_CITY_FROM_ORDER();
            this.CLEAR_POINT_FROM_ORDER();                          
        },   
        openPointList() {
            if (this.city.name) {
                this.get_points_from_api(this.city.id);
            }
        },
        selectPoint(point) {
            this.point = point;
            this.ADD_POINT_TO_ORDER(point)
        },
        clearPoint() {
            this.point = {}; 
            this.CLEAR_POINT_FROM_ORDER();             
        },     
    },    
}
</script>

<style lang="scss" scoped>

.location {
    background-color: $white;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: fit-content;
}
.order-search-location {
    max-width: 323px;
    margin-bottom: 45px;   
}
p {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 16px;
    color: #121212;
}
img {
    max-width: 100%;
    @media (min-width: 1024px) and (max-width: 1439px) {
        max-width: 100%; 
    }
    @media (min-width: 768px) and (max-width: 1023px) {
        max-width: 100%; 
    }
    @media (max-width: 767px) {
        max-width: 100%; 
    }
} 
</style>