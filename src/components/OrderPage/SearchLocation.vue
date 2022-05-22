<template>
    <div class="location">

        <location-input
            v-model="city.name"
            :text="'Город'"
            :placeholder="'Начните вводить город ...'"            
            :items="getCities"
            @openList="openCityList"
            @selectItem="selectCity"
            @clearItem="clearCity"
        />

        <location-input 
            v-model="point.name"
            :text="'Пункт выдачи'"
            :placeholder="'Начните вводить пункт ...'"
            :items="getPoints" 
            @openList="openPointList"
            @selectItem="selectPoint"
            @clearItem="clearPoint"                       
        />

    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import LocationInput from '@/components/OrderPage/SearchLocationInput.vue';

export default {
    name: 'SearchLocation',
    components: { LocationInput },
    data() {
        return {
            city: this.$store.getters.getOrder.city || {},
            point: this.$store.getters.getOrder.point || {}
        }
    },
    computed: {
        ...mapGetters([
            'getOrder',
            'getCities',
            'getPoints',
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


</style>
