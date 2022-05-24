<template>
    <div class="tab-model">
        <app-loader 
            v-if="isLoading" 
            class="loading"
        />        
        <div class="category-group">
            <div 
                class="category all-categories"
                @click="showAllModels"
            >
                <div 
                    class="circle"
                    :class="{ 'checked': checked == 'all' }"
                ></div>
                <div class="label">Все модели</div>       
            </div>

            <div 
                v-for="category in getCategories" 
                :key="category.id"
                class="category"
                @click="showFilteredCars(category.id)"
            >
                <div 
                    class="circle"
                    :class="{ 'checked': checked == category.id }"
                ></div>
                <div class="label">{{ category.name }}</div>
            </div>
        </div>

        <div class="car-group">
            <model-card 
                v-for="model in getModels"
                :key="model.id"
                :model="model"
                :class="{'selected': selectedModelId == model.id}"
                class="car-item"
                @click="selectModel(model)"
            />
        </div>      
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import AppLoader from '@/components/Common/AppLoader.vue'
import ModelCard from '@/components/OrderPage/TabModelCard.vue';

export default {
    name: 'TabModel',
    components: { 
        AppLoader,
        ModelCard,  
    },
    data() {
        return {
            checked: 'all',
            selectedModelId: this.$store.getters.getOrder.model.id || null
        }
    },
    computed: {
        ...mapGetters([
            'isLoading',
            'getOrder',
            'getModels',
            'getCategories'
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
            'ACTIVATE_BTN',
            'DISACTIVATE_BTN',
            'ADD_MODEL_TO_ORDER'
        ]),
        ...mapActions([
            'get_models_from_api',
            'get_categories_from_api',
        ]), 
        manageBtn() {
            if (this.selectedModelId) {
                this.ACTIVATE_BTN();
            } else {
                this.DISACTIVATE_BTN();            
            }            
        },        

        showAllModels() {
            this.checked = 'all';
            this.get_models_from_api();
        },
        showFilteredModels(id) {
            this.checked = id;
            this.get_models_from_api(id);
        },
        selectModel(model) {
            this.selectedModelId = model.id;
            this.ADD_MODEL_TO_ORDER(model);
        }
    },
    mounted() {
        this.get_categories_from_api();
        this.get_models_from_api();      
    },
}
</script>

<style lang="scss" scoped>

.tab-model {
    position: relative;
}
.loading {
    padding-top: 64px;
    height: 100%;
}

.category-group {
    max-width: 736px;    
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 48px;
    .category {
        display: flex;  
        align-items: center;
        margin-right: 16px;
        cursor: pointer;          
    }
    .circle {
        border: 1px solid $grey;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin-right: 8px;
        &.checked {
            border: 3px solid $green;
        }
    }
    .label {
        font-family: 'Roboto-light';
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        color: $grey;
    }
}

.car-group{
    display: flex;
    align-content: flex-start;
    width: 736px;
    height: calc(100vh - 128px - 96px);
    flex-wrap: wrap;
    overflow-y: auto;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        width: 100%; 
    }
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        width: 100%; 
    }
    @media (max-width: $mobile-max) {
        width: 100%; 
    }
}
.car-item {
    border: 1px solid #EEEEEE;
    max-width: 50%;
    flex-grow: 1;
    height: auto; 
    cursor: pointer;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        width: 50%; 
    }
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        min-width: 100%;
    }
    @media (max-width: $mobile-max) {
        min-width: 100%; 
    }  
    &.selected {
        border: 2px solid $green;
    }     
}
</style>