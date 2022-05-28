<template>
    <div class="wrapper-modal">
        <div class="modal">
            <div class="title">Подтвердить заказ</div>
            <div class="btn-block">
                <app-btn
                    :text="'Подтвердить'"
                    :width="'177px'"
                    :height="'48px'"
                    class="btn-confirm"
                    @click="confirmOrder"
                />
                <app-btn
                    :text="'Вернуться'"
                    :width="'164px'"
                    :height="'48px'"                    
                    class="btn-return"
                    @click="goBack"
                />
            </div>
        </div>  
    </div>
</template>

<script>
import AppBtn from '@/components/Common/AppBtn.vue'

export default {
    name: 'OrderModal',
    components: { AppBtn },
    methods: {
        confirmOrder() {
            this.$emit('confirmOrder');
        },
        goBack() {
            this.$emit('goBack');
        },
    }
}
</script>

<style lang="scss" scoped>

.wrapper-modal {
    z-index: 10;
    background-color: rgba(255, 255, 255, 0.9);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.modal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;        
    position: fixed;
    left: 50%;
    top: 50%;
    width: 405px;
    height: 157px;
    transform: translate(-50%, -50%);
    padding: 24px;
    @media (max-width: $mobile-max) {
        padding: 0;        
        width: 100%;
        max-height: 300px;  
    }    
}
.title {
    text-align: center;
    font-size: 24px;
    font-weight: 400; 
    margin-bottom: 20px; 
}
.btn-block {
    display: flex;  
    justify-content: space-between;
    @media (max-width: $mobile-max) {
        display: flex;
        flex-direction: column;  
        justify-content: space-around;
        min-width: 100vw;                 
        height: 100%;
    }
}
.btn-confirm {
    background: linear-gradient(90deg, $green 0%, $green-dark 100%);   
    border-radius: 8px;
    color: $white;
    @media (max-width: $mobile-max) {
        margin-bottom: 10px;
        border-radius: 0;        
        position: relative;         
        min-width: 100%; 
    }
}
.btn-return {
    background: linear-gradient(90deg, $red-dark 0%, $red 100%);
    border-radius: 4px;
    color: $grey-light;
    @media (max-width: $mobile-max) {
        border-radius: 0;          
        position: relative;           
        min-width: 100%; 
    }
}
</style>