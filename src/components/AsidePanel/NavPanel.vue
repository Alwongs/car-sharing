<template>
    <nav class="navigation">
        <ul class="menu-list">
            <li><a>Парковка</a></li>
            <li><a>Страховка</a></li>
            <li><a>Бензин</a></li>
            <li><a>Обслуживание</a></li>
        </ul>
        <social-media />
    </nav>
</template>

<script>
import SocialMedia from '@/components/AsidePanel/SocialMedia.vue';

export default {
    name: 'NavPanel',
    components: { SocialMedia },    
}
</script>

<style lang="scss" scoped>

.menu-list {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 32px;
    color: $white;
    margin-bottom: 38px;
    cursor: pointer;
    a:hover {
        color: $green;
    }
    li {
        margin-bottom: 8px;
    }
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        font-size: 28px;
    }
    @media (max-width: $mobile-max) {
        font-size: 22px;
    }
}
</style>