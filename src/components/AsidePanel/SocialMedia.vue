<template>
    <ul class="icon-group">
        <li class="icon-item">
            <div class="telegram-icon"></div>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'SocialMedia'
}
</script>

<style lang="scss" scoped>

    .icon-group {
        display: flex;
    }
    .icon-item {
        cursor: pointer;
        margin-right: 5px;
    }
    .telegram-icon {
        background-image: url('../../assets/img/svg/telegram.svg');
        width: 32px;
        height: 32px;
    }
</style>