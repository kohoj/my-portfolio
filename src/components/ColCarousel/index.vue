<!-- hero-page & row-carousel -->
<template >
  <div class="carousel rounded-box carousel-vertical mb-2 mx-2">
    <div id="hero" class="relative w-full h-full carousel-item">
      <Hero class="w-full" />
      <div
        class="guide-line-x sm:hidden absolute rounded-full bottom-0 mx-28 inset-x-0 h-px bg-primary bg-opacity-90"
      ></div>
    </div>
    <div id="row" class="relative w-full h-full carousel-item">
      <RowCarousel class="w-full" />
      <div
        class="guide-line-x sm:hidden absolute rounded-full top-0 mx-28 inset-x-0 h-px bg-primary bg-opacity-85"
      ></div>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/ColCarousel/Hero'
import RowCarousel from '@/components/RowCarousel'

export default {
  components: {
    Hero,
    RowCarousel,
  },
}
</script>
<style>
.guide-line-x {
  -webkit-animation: zoom_x 3.5s infinite;
}
@-webkit-keyframes zoom_x {
  0% {
    -webkit-transform: scaleX(1);
    opacity: 0.6;
  }
  50% {
    -webkit-transform: scaleX(0.5);
    opacity: 0.2;
  }
  100% {
    -webkit-transform: scaleX(1);
    opacity: 0.6;
  }
}

.guide-line-y {
  -webkit-animation: zoom_y 3.5s infinite;
}
@-webkit-keyframes zoom_y {
  0% {
    -webkit-transform: scaleY(1);
    opacity: 0.6;
  }
  50% {
    -webkit-transform: scaleY(0.5);
    opacity: 0.2;
  }
  100% {
    -webkit-transform: scaleY(1);
    opacity: 0.6;
  }
}
</style>