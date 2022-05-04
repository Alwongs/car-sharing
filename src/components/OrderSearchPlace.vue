<template>
    <div class="location">
<!--
        <div class="location-search city-block">
            <label for="inputCity">Город</label>
            <div class="city-flex-column">
                <div class="location-search-input">
                    <input
                        v-model="city.name" 
                        type="text" 
                        id="inputCity" 
                        placeholder="Начните вводить город ..."
                        @click="openCityList"
                    >
                    <button 
                        v-if="city.name"
                        @click="clearCity"
                    ></button>
                </div>
                <ul v-if="isCityListOpen">
                    <li 
                        v-for="city in getCities" 
                        :key="city.id"
                        class="item"
                        @click="selectCity(city)"
                    >
                        {{ city.name }}
                    </li>
                </ul>
            </div>
        </div>

        <div class="location-search">
            <label for="inputPoint">Пункт выдачи</label>
            <div class="city-flex-column">
                <div class="location-search-input">
                    <input 
                        v-model="point.name"
                        @click="openPointList"
                        class="input-point"
                        type="text" 
                        id="inputPoint" 
                        placeholder="Начните вводить пункт ..."
                    >
                    <button 
                        v-if="point.name"
                        @click="clearPoint"
                    ></button>                
                </div>
                <ul v-if="isPointListOpen">
                    <li
                        v-for="point in getPoints" 
                        :key="point.id" 
                        class="item"
                        @click="selectPoint(point)" 
                    >
                        {{ point.name }}
                    </li>
                    <li v-if="getPoints.length === 0">
                        <span>В этом городе нет пунктов выдачи</span> 
                    </li>
                </ul>
            </div>
        </div>
-->
        <place-input
            :text="'Город'"
            :items="getCities"
            @openList="openCityList"
            @selectItem="selectCity"
            @clearItem="clearCity"
        />
        <!--
        <place-input 
            :text="'Пункт выдачи'"
            :items="getPoints" 
            @openList="openPointList"
        />
        -->
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import PlaceInput from './OrderSearchPlaceInput.vue';

export default {
    name: 'OrderSearchPlace',
    components: { PlaceInput },
    data() {
        return {
            //city: {},
            //point: {}
        }
    },
    computed: {
        ...mapGetters([
            'getCities',
            'getPoints',
        ]),
    },
    /*
    updated() {
        if (this.city.name && this.point.name) {
            this.ACTIVATE_BTN();
        } else {
            this.DISACTIVATE_BTN();            
        }
    },
    */
    methods: {
        ...mapMutations([
           'ADD_CITY_TO_ORDER',
           'ADD_POINT_TO_ORDER',
           'CLEAR_CITY_FROM_STEP',
           'CLEAR_POINT_FROM_STEP',
           'ACTIVATE_BTN',
           'DISACTIVATE_BTN',
        ]),
        ...mapActions([
           'get_cities_from_api',
           'get_points_from_api',
        ]),
        openCityList() {
            this.get_cities_from_api();
        },
        /*
        openPointList() {
            if (this.city.name) {
                this.get_points_from_api(this.city.id);
                this.isPointListOpen = !this.isPointListOpen;
            }
        },
           */    
        selectCity(city) {
            console.log(city)
            //this.city = city;
            //this.CLEAR_POINT_FROM_STEP();
            //this.point = {};

            this.ADD_CITY_TO_ORDER(city);               
        },
        /*
        selectPoint(point) {
            this.point = point;
            this.ADD_POINT_TO_ORDER(point)
            this.isPointListOpen = false;
        },
*/
        clearCity() {
            //this.city = {};
            //this.point = {};
            //this.CLEAR_CITY_FROM_STEP();
            //this.isCityListOpen = false;              
        },
        /*
        clearPoint() {
            this.point = {}; 
            this.CLEAR_POINT_FROM_STEP(); 
            this.isPointListOpen = false;              
        },   
        */      
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
    .location-search {
        display: flex;
        font-family: 'Roboto-light';
        font-size: 14px;
        line-height: 16px;
        color: $black;
        @media (max-width: 767px) {
            flex-direction: column;
        }     
    }
    label {
        margin-right: 5px;
        white-space: nowrap;
        @media (max-width: 767px) {
            margin: 0 0 5px 0;
        } 
    }
    .city-block {
        margin-bottom: 13px;
        @media (max-width: 767px) {
            margin-bottom: 20px;
        }  
    }
    .city-flex-column ul {
        background: $white;
        position: absolute;
        border: 1px solid $grey_light;
        width: 224px;
        max-height: 106px;
        overflow-y: scroll;
        padding-left: 5px;
        .item {
            font-size: 14px;
            line-height: 22px;
            color: $grey;
            &:hover {
                color: $green;
                cursor: pointer;
            }
        }
        li {
            color: $grey;            
        }
    }
    .location-search-input {
        display: flex;
        width: 224px;
        border-bottom: 1px solid $grey;
        padding: 0 0 1px 5px;
        input {
            width: 100%;
            border: none;
            font-family: 'Roboto-light';
            font-size: 14px;
            line-height: 16px;
            color: $grey;
        }
        button {
            width: 20px;
            border: none;
            background: none;
            cursor: pointer;
            background-image: url('../assets/img/svg/input_close_btn.svg');
            background-repeat: no-repeat;            
            background-position: center;
        }  
        @media (min-width: 768px) and (max-width: 1023px) {
            width: 170px;
        }
        @media (max-width: 767px) {
            min-width: 100%;
        }             
    }

</style>
