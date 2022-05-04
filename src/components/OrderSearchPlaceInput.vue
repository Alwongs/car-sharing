<template>
    <div class="location-search">
        <label for="inputPoint">{{ text }}</label>
        <div class="city-flex-column">
            <div class="location-search-input">
                <input 
                    v-model="name"
                    type="text" 
                    id="inputPoint" 
                    placeholder="Начните вводить пункт ..."
                    class="input-point"
                    @click="openList"
                >
                <button 
                    v-if="name"
                    @click="clearItem"
                ></button>                
            </div>
            <ul v-if="isListOpen">
                <li
                    v-for="item in items" 
                    :key="item.id" 
                    class="item"
                    @click="selectItem(item)" 
                >
                    {{ item.name }}
                </li>
                <li v-if="items.length === 0">
                    <span>В этом городе нет пунктов выдачи</span> 
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';

export default {
    name: 'OrderSearchPlaceInput',
    props: [ 'text', 'items' ],
    data() {
        return {
            isListOpen: false,
            name: ''
        }
    },
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
        openList() {
            this.isListOpen = !this.isListOpen;
            this.$emit('openList');
        },              
        selectItem(item) { 
            this.name = item.name;
            this.$emit('selectItem', item );
            this.isListOpen = !this.isListOpen;               
        },
        clearItem() {
            this.name = '';
            //this.$emit('clearItem');
            this.isListOpen = false;              
        },
    },    
}
</script>

<style lang="scss" scoped>


.location-search {
    display: flex;
    font-family: 'Roboto-light';
    font-size: 14px;
    line-height: 16px;
    color: $black;
    margin-top: 16px;
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
