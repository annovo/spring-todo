<template>
  <div class = "loading-container" v-if="visible">
    <div class="loading-spinner-container">
      <div class="trinity-rings-spinner">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    visible: {
      required: true,
      type: Boolean,
      default: false
    }
  }
}
</script>
<style>
.loading-container {
  height: 100%;
  margin: 0;
  background-color: rgba(0,0,0,0.8);
  position: fixed; /* Sit on top of the page content */
  display: block; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
}

.trinity-rings-spinner, .trinity-rings-spinner * {
  box-sizing: border-box;
}

.trinity-rings-spinner {
  height: 66px;
  width: 66px;
  padding: 3px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
  box-sizing: border-box;
  margin: 200px auto;
}
.trinity-rings-spinner .circle {
  position:absolute;
  display:block;
  border-radius:50%;
  border: 3px solid #f2f2f2;
  opacity: 1;
}

.trinity-rings-spinner .circle:nth-child(1) {
  height: 60px;
  width: 60px;
  animation : trinity-rings-spinner-circle1-animation 1.5s infinite linear;
  border-width: 3px;
}
.trinity-rings-spinner .circle:nth-child(2) {
  height: calc(60px * 0.65);
  width: calc(60px * 0.65);
  animation : trinity-rings-spinner-circle2-animation 1.5s infinite linear;
  border-width: 2px;
}
.trinity-rings-spinner .circle:nth-child(3) {
  height: calc(60px * 0.1);
  width: calc(60px * 0.1);
  animation:trinity-rings-spinner-circle3-animation 1.5s infinite linear;
  border-width: 1px;
}

@keyframes trinity-rings-spinner-circle1-animation{
  0% {
    transform: rotateZ(20deg) rotateY(0deg);
  }
  100% {
    transform: rotateZ(100deg) rotateY(360deg);
  }
}
@keyframes trinity-rings-spinner-circle2-animation{
  0% {
    transform: rotateZ(100deg) rotateX(0deg);
  }
  100% {
    transform: rotateZ(0deg) rotateX(360deg);
  }
}
@keyframes trinity-rings-spinner-circle3-animation{
  0% {
    transform: rotateZ(100deg) rotateX(-360deg);
  }
  100% {
    transform: rotateZ(-360deg) rotateX(360deg);
  }
}
</style>