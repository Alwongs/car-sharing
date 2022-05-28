<template>
    <div class="wrapper">
        <aside-panel />
        <router-view/>
    </div>

    <order-modal 
        v-if="isConfirmOpened"
        @confirmOrder="confirmOrder"
        @goBack="goBack"
    /> 
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import AsidePanel from '@/components/AsidePanel/AsidePanel.vue'
import OrderModal from '@/components/OrderPage/OrderModal.vue';

export default {
    name: 'App',
    components: { AsidePanel, OrderModal },
    computed: {
        ...mapGetters([
            'getCreatedOrder',
            'isConfirmOpened'
        ]),
    }, 
    methods: {
        ...mapMutations([
            'TOGGLE_CONFIRM',
        ]),        
        ...mapActions([
        'create_order_in_api',
        ]),         
        async confirmOrder() {
            await this.create_order_in_api();
            this.$router.push({name: 'confirm'});   
            this.TOGGLE_CONFIRM();                     
        },
        goBack() {
            this.TOGGLE_CONFIRM();
        },
    }     
}
</script>

<style lang="scss" scoped>

.wrapper {
    display: flex;
    height: 100vh;
}
</style>
