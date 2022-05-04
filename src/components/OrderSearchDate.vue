<template>
    <div class="location">
        <div class="location-search city-block">
            <label for="inputCity">C</label>
            <div class="location-search-input">
                <input 
                    type="text" 
                    id="inputCity" 
                    placeholder="Введите дату и время"
                >
                <button>
                    <img :src="require('../assets/img/svg/input_close_btn.svg')" alt="Telegram Logo">
                </button>
            </div>
        </div>
        <div class="location-search">
            <label for="inputPlace">По</label>
            <div class="location-search-input">
                <input 
                    class="input-place"
                    type="text" 
                    id="inputPlace" 
                    placeholder="Введите дату и время"
                >
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'OrderSearchDate',
}
</script>

<style lang="scss" scoped>

    * {
        box-sizing: border-box;
    }

    .location {
        background-color: white;
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
        color: #121212;

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

    .location-search-input {
        display: flex;
        width: 224px;
        border-bottom: 1px solid black;
        padding: 0 0 1px 5px;
        input {
            width: 100%;
            border: none;
            font-family: 'Roboto-light';
            font-size: 14px;
            line-height: 16px;
            color: #999999;
        }
        button {
            width: 25px;
            border: none;
            background: none;
        }  
        @media (min-width: 768px) and (max-width: 1023px) {
            width: 100%;
        }
        @media (max-width: 767px) {
            min-width: 100%;
        }             
    }

</style>
