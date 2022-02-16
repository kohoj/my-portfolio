<!-- hero-page & row-carousel -->
<template >
  <div class="carousel rounded-box carousel-vertical mb-2 mx-2">
    <div id="hero" class="relative w-full h-full carousel-item">
      <Hero class="w-full" />
      <div
        class="line-zoom sm:hidden absolute rounded-full bottom-0 mx-36 inset-x-0 h-px bg-primary bg-opacity-85"
      ></div>
    </div>
    <div id="row" class="relative w-full h-full carousel-item">
      <RowCarousel class="w-full" />
      <div
        class="line-zoom sm:hidden absolute rounded-full top-0 mx-36 inset-x-0 h-px bg-primary bg-opacity-85"
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
.arrow-zoom {
  -webkit-animation: zoom_x 2.5s infinite;
}
@-webkit-keyframes zoom_x {
  0% {
    -webkit-transform: scale(1);
    opacity: 1;
  }
  50% {
    -webkit-transform: scale(0.8);
    opacity: 0.8;
  }
  100% {
    -webkit-transform: scale(1);
    opacity: 0.8;
  }
}

.line-zoom {
  -webkit-animation: zoom_y 2.5s infinite;
}
@-webkit-keyframes zoom_y {
  0% {
    -webkit-transform: scaleY(1);
  }
  50% {
    -webkit-transform: scaleY(0.3);
  }
  100% {
    -webkit-transform: scaleY(1);
  }
}
</style>