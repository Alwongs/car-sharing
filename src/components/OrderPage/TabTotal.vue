<template>
    <order-card 
        :model="getModel"
        :services="getExtraServices"
        :dateFrom="getDateFrom"
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
            'getExtraServices',
        ]),
    },         
}
</script>
