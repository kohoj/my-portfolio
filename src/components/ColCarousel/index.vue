<!-- hero-page & row-carousel -->
<template >
  <div class="carousel rounded-box carousel-vertical mb-2 mx-2">
    <!-- hero -->
    <div id="hero" class="relative w-full h-full carousel-item rounded-box">
      <Hero class="w-full rounded-box" />
      <div
        class="to-zoom sm:hidden absolute rounded-full bottom-0 mx-36 inset-x-0 h-px bg-primary bg-opacity-85"
      ></div>
    </div>
    <!-- Phone : intro -->
    <div v-if="isPhone" class="relative w-full h-full carousel-item rounded-box">
      <Intro class="w-full rounded-box" />
      <div
        class="to-zoom sm:hidden absolute rounded-full bottom-0 mx-36 inset-x-0 h-px bg-primary bg-opacity-85"
      ></div>
    </div>
    <!-- Phone : exp -->
    <div v-if="isPhone" class="relative w-full h-full carousel-item rounded-box">
      <Exp class="w-full rounded-box" />
      <div
        class="to-zoom sm:hidden absolute rounded-full bottom-0 mx-36 inset-x-0 h-px bg-primary bg-opacity-85"
      ></div>
    </div>
    <!-- Phone : works -->
    <div v-if="isPhone" class="relative w-full h-full carousel-item rounded-box">
      <div
        class="w-full flex flex-col bg-neutral bg-base-pattern mx-auto items-center justify-center p-6"
      >Works</div>
      <div
        class="to-zoom sm:hidden absolute rounded-full bottom-0 mx-36 inset-x-0 h-px bg-primary bg-opacity-85"
      ></div>
    </div>
    <!--Phone : Contact-->
    <div v-if="isPhone" class="flex items-center w-full h-full carousel-item rounded-box">
      <ContactContent class="w-full h-full rounded-box" />
    </div>
    <!-- PC : intro & exp & works -->
    <div v-else id="row" class="relative w-full h-full carousel-item rounded-box">
      <RowCarousel class="w-full rounded-box" />
    </div>
  </div>
</template>

<script>
import Hero from '@/components/ColCarousel/Hero'
import Intro from '@/components/RowCarousel/Intro'
import Exp from '@/components/RowCarousel/Exp'
import RowCarousel from '@/components/RowCarousel'
import ContactContent from '@/components/Contact/ContactContent'
import { ref } from 'vue'
export default {
  components: {
    Hero,
    RowCarousel,
    Intro,
    Exp,
    ContactContent
  },
  setup() {
    const isPhone = ref(true);

    (() => {
      console.log(isPhone.value, window.innerWidth)
      if (window.innerWidth > 500) {
        isPhone.value = false;
      }
      console.log(isPhone.value)
    })();
    return {
      isPhone
    }
  }
}
</script>
<style>
.to-zoom {
  -webkit-animation: zoom_x 2.5s infinite;
}
@-webkit-keyframes zoom_x {
  0% {
    -webkit-transform: scale(1.2);
    opacity: 1;
  }
  50% {
    -webkit-transform: scale(0.8);
    opacity: 0.8;
  }
  100% {
    -webkit-transform: scale(1.2);
    opacity: 1;
  }
}
</style>