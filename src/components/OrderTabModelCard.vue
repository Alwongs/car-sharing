<template>
    <div class="card">
        <h3 class="title">{{ car.name }}</h3>
        <p class="price">{{ car.priceMin }} - {{ car.priceMax }} руб.</p>
        <img
            :src="car.thumbnail.path"
            :alt="car.thumbnail.originalname"
            class="car-picture"
        />
    </div>    
</template>

<script>

export default {
    name: 'OrderTabModelCard',
    props: [ 'car' ]
}
</script>

<style lang="scss" scoped>

.card {
    display: flex;
    flex-direction: column;
    padding: 16px;
}
.title {
    font-size: 18px;
    font-weight: 400;
    color: $black;        
}
.price {
    flex-grow: 1; 
    font-size: 14px;
    color: $grey;            
}
.car-picture {
    align-self: flex-end;
    width: 256px;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        max-width: 100%; 
    }
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        max-width: 100%; 
    }
    @media (max-width: $mobile-max) {
        max-width: 100%; 
    }
}
</style>