<template>
    <order-card 
        v-if="getModel.name"    
        :name="getModel.name"
        :number="getModel.number"
        :isFullTank="getIsFullTank"
        :isNeedChildChair="getIsNeedChildChair"
        :isRightWheel="getIsRightWheel"
        :dateFrom="getDateFrom"
        :imgPath="getModel.thumbnail.path"
    />

</template>

<script>
import { mapGetters } from 'vuex';
import OrderCard from '@/components/OrderPage/OrderCard.vue'

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
