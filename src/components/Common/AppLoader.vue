<template>
    <div class="container">
        <div class="loader"></div>
    </div>  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background-color: $white;
}
.loader{
    width: 100px;
    height: 100px;
    border-radius: 100%;
    position: relative;
    margin: 0 auto;
}
.loader:before, .loader:after{
  content: "";
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  left: calc(50% - 10px);
  background-color: $green;
  animation: squaremove 1s ease-in-out infinite;
}
.loader:after{
  bottom: 0;
  animation-delay: 0.5s;
}
@keyframes squaremove{
    0%, 100%{
        -webkit-transform: translate(0,0) rotate(0);
        -ms-transform: translate(0,0) rotate(0);
        -o-transform: translate(0,0) rotate(0);
        transform: translate(0,0) rotate(0);
    }
    25%{
        -webkit-transform: translate(40px,40px) rotate(45deg);
        -ms-transform: translate(40px,40px) rotate(45deg);
        -o-transform: translate(40px,40px) rotate(45deg);
        transform: translate(40px,40px) rotate(45deg);
    }
    50%{
        -webkit-transform: translate(0px,80px) rotate(0deg);
        -ms-transform: translate(0px,80px) rotate(0deg);
        -o-transform: translate(0px,80px) rotate(0deg);
        transform: translate(0px,80px) rotate(0deg);
    }
    75%{
        -webkit-transform: translate(-40px,40px) rotate(45deg);
        -ms-transform: translate(-40px,40px) rotate(45deg);
        -o-transform: translate(-40px,40px) rotate(45deg);
        transform: translate(-40px,40px) rotate(45deg);
    }
}
</style>