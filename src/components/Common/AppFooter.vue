<template>
    <footer>
        <p class="footer-copyright">
            © 2016-2019 «Need for drive»
        </p>
        <div class="footer-phone">
            <a href="tel:+74952342244">8 (495) 234-22-44</a>
        </div>
    </footer>
</template>

<script>

export default {
    name: 'AppFooter'
}
</script>

<style lang="scss" scoped>

footer {
    font-weight: 400;
    font-size: 13px;
    display: flex;
    justify-content:  space-between;
    padding-bottom: 32px;
    @media (max-width: $mobile-max) {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 16px;
        background-color: $black;
        flex-direction: column;
        justify-content:  center;            
        text-align: right;
    }
}
.footer-copyright {
    color: $grey;
    @media (max-width: $mobile-max) {
        order: 2;
        color: $white;
    }
}
.footer-phone {
    a {
        color: $black; 
        @media (max-width: $mobile-max) {
            color: $green;
        }
    }
    @media (max-width: $mobile-max) {
        order: 1;
        margin-bottom: 8px;
    }
}
</style>
