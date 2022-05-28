<template>
    <div class="tab-confirm">
        <app-loader 
            v-if="isLoading" 
            class="loading"
        />
        <order-card 
            v-if="getCreatedOrder && getCreatedOrder.carId"
            :name="getCreatedOrder.carId.name"
            :number="getCreatedOrder.carId.number"
            :services="getCreatedOrder.extraServices"
            :isFullTank="getCreatedOrder.isFullTank"
            :isNeedChildChair="getCreatedOrder.isNeedChildChair"
            :isRightWheel="getCreatedOrder.isRightWheel"            
            :dateFrom="getDateFrom"
            :imgPath="getCreatedOrder.carId.thumbnail.path"
        />
    </div>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex';
import AppLoader from '@/components/Common/AppLoader.vue'
import OrderCard from '@/components/OrderPage/OrderCard.vue'

export default {
    name: 'TabConfirm',
    components: { OrderCard, AppLoader },    
    computed: {
        ...mapGetters([
            'getCreatedOrder',
            'isLoading'
        ]), 
        getDateFrom() {
            moment.locale('ru');
            return moment(this.getCreatedOrder.dateFrom).format('DD.MM.YYYY HH:mm')
        }
    }      
}
</script>

<style lang="scss" scoped>

.tab-confirm {
    position: relative;
}
</style>

