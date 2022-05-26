<template>
    <div class="tab-total">     
        <div class="details">
            <div class="model-name mb-8">
                {{ name }}
            </div>
            <div class="model-number mb-8">
                {{ number || 'без номера' }}
            </div>

            <div 
                v-if="isFullTank"
                class="services mb-8"
            >
                <span class="option">
                    Полный бак:
                </span>
                <span class="value">
                    Да
                </span>
            </div>
            <div 
                v-if="isNeedChildChair"
                class="services mb-8"
            >
                <span class="option">
                    Детское кресло:
                </span>
                <span class="value">
                    Да
                </span>
            </div>
            <div 
                v-if="isRightWheel"
                class="services mb-8"
            >
                <span class="option">
                    Правый руль:
                </span>
                <span class="value">
                    Да
                </span>
            </div>

            <div class="time-ready">
                <span class="option">
                    Доступна с 
                </span>
                <span>
                    {{ dateFrom }}
                </span>
            </div>
        </div>

        <div class="car-image">
            <img
                :src="imgPath"
                alt="car-pic"
            >            
        </div>       
    </div>  
</template>

<script>
export default {
    name: 'TotalCard',
    props: [
        'name', 
        'number', 
        'isFullTank', 
        'isNeedChildChair', 
        'isRightWheel', 
        'dateFrom', 
        'imgPath' 
    ],
}
</script>

<style lang="scss" scoped>

    .tab-total {
        display: flex;
        justify-content: space-between;       
        @media (min-width: $tablet-min) and (max-width: $tablet-max) {
            flex-direction: column;
        }
        @media (max-width: $mobile-max) {
            flex-direction: column;
        }
    }

    .details { 
        width: 262px;
        font-size: 14px;
        color: $black; 
        .model-name {
            font-size: 18px;
        }
        .model-number {
            border: 1px solid #999999;
            border-radius: 4px;
            text-align: center;
            padding: 4px 0 4px 0;
            width: 94px;
            height: 24px;
        }         
        .option {
            font-weight: 700;             
            margin-right: 8px; 
        }
        .value {
            font-weight: 300; 
        }  
        
        @media (min-width: $tablet-min) and (max-width: $tablet-max) {
            flex: none;
        }
        @media (max-width: $mobile-max) {
            flex: none;
        }  
    }

    .car-image {
        height: 116px;        
        text-align: right;
        @media (min-width: $tablet-min) and (max-width: $tablet-max) {
            flex: none;
        }
        @media (max-width: $mobile-max) {
            flex: none;
        }
        img {             
            height: 100%;
        }
    }
</style>