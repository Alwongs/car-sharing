<template>
    <div class="card">
        <h3 class="title">{{ model.name }}</h3>
        <p class="price">{{ model.priceMin }} - {{ model.priceMax }} руб.</p>
        <img
            :src="model.thumbnail.path"
            :alt="model.thumbnail.originalname"
            class="model-picture"
        />
    </div>    
</template>

<script>

export default {
    name: 'OrderTabModelCard',
    props: [ 'model' ]
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
.model-picture {
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