<!-- hero-page & row-carousel -->
<template >
  <div class="carousel rounded-box carousel-vertical mb-2 mx-2">
    <div id="hero" class="w-full h-full carousel-item">
      <Hero class="w-full" />
    </div>
    <div id="row" class="w-full h-full carousel-item">
      <RowCarousel class="w-full" />
    </div>
  </div>
</template>

<script>
import Hero from '@/components/ColCarousel/Hero'
import RowCarousel from '@/components/RowCarousel'

export default {
  components: {
    Hero,
    RowCarousel
  },
}
</script>
