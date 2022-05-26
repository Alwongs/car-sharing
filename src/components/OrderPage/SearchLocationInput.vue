<template>
    <div class="location-search">
        <label for="inputLocation">{{ text }}</label>
        <div class="location-flex-column">
            <div class="location-search-input">
                <input 
                    v-model="value"
                    type="text" 
                    :id="'inputLocation'"
                    :placeholder="placeholder"
                    class="input-point"
                    @click="openList"
                >
                <button 
                    v-if="modelValue"
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

export default {
    name: 'SearchLocationInput',
    props: [ 'text', 'items', 'modelValue', 'placeholder' ],
    emits: ['update:modelValue', 'openList', 'selectItem', 'clearItem'],
    data() {
        return {
            isListOpen: false,
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
            this.$emit('clearItem');
            this.isListOpen = false;              
        },
    },    
}
</script>

<style lang="scss" scoped>


.location-search {
    display: flex;
    font-size: 14px;
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
.location-flex-column ul {
    background: $white;
    position: absolute;
    border: 1px solid $grey_light;
    width: 224px;
    max-height: 300px;
    overflow-y: scroll;
    padding-left: 5px;
    .item {
        font-size: 14px;
        color: $grey;
        &:hover {
            color: $green;
            cursor: pointer;
        }
    }
    li {
        color: $grey;
        margin-bottom: 14px;            
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
        background-image: url('../../assets/img/svg/input_close_btn.svg');
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
