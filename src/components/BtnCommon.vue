<template>
    <button 
        class="btn"
    >
        {{ text }}
    </button>
</template>

<script>

export default {
    name: 'Btn',
    props: [ 'text' ],
}
</script>

<style lang="scss" scoped>

    .btn {
        font-weight: 500;
        font-size: 18px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: $mobile-max) {
            position: absolute;
            left: 0;
        }
    }
</style>