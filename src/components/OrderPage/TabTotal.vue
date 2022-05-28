<template>
    <div class="tab-total">
        <order-card 
            v-if="getModel.name"    
            :name="getModel.name"
            :number="getModel.number"
            :isFullTank="getIsFullTank.include"
            :isNeedChildChair="getIsNeedChildChair.include"
            :isRightWheel="getIsRightWheel.include"
            :dateFrom="getDateFrom"
            :imgPath="getModel.thumbnail.path"
        />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import OrderCard from '@/components/OrderPage/OrderCard.vue';

export default {
    name: 'OrderTabTotal',
    components: { OrderCard },
    computed: {
        ...mapGetters([
            'getModel',
            'getDateFrom',
            'getIsFullTank',
            'getIsNeedChildChair',
            'getIsRightWheel',
        ]),
    },       
}
</script>
