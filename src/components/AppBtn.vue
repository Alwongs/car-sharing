<template>
    <button 
        class="btn-common"
    >
        {{ text }}
    </button>
</template>

<script>

export default {
    name: 'AppBtn',
    props: [ 'text' ],
}
</script>

<style lang="scss" scoped>

    .btn-common {
        font-weight: 500;
        font-size: 18px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: $mobile-max) {
            position: absolute;
            left: 0;
            border-radius: 0;
        }
    }
</style>