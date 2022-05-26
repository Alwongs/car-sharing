<template>
    <div class="wrapper">
        <div class="modal">
            <h3>Подтвердить заказ</h3>
            <div class="btn-block">
                <app-btn
                    :text="'Подтвердить'"
                    class="btn-confirm"
                    @click="confirm"
                />
                <app-btn
                    :text="'Вернуться'"
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
    name: 'TestPage',
    components: { AppBtn },
    methods: {
        confirm() {
            alert('confirm');
        },
        goBack() {
            alert('goBack');
        },
    }
}
</script>

<style lang="scss" scoped>

.wrapper {
    z-index: 4;
    background-color: rgba(255, 255, 255, 0.9);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
}
.modal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;        
    position: absolute;
    left: 50%;
    top: 50%;
    width: 405px;
    height: 157px;
    transform: translate(-50%, -50%);
    padding: 24px;
}
h3 {
    text-align: center;
    font-size: 24px;
    font-weight: 400;    
}
.btn-block {
    display: flex;
    justify-content: space-between;
}
.btn-confirm {
    width: 177px;
    height: 48px;
    background: linear-gradient(90deg, $green 0%, $green-dark 100%);   
    border-radius: 8px;
    color: $white;
}
.btn-return {
    width: 164px;
    height: 48px;
    background: linear-gradient(90deg, $red-dark 0%, $red 100%);
    border-radius: 4px;
    color: $grey-light;
}

</style>