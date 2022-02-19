<!-- hero-page & row-carousel -->
<template >
  <div class="carousel carousel-vertical mb-2 mx-2">
    <!-- hero -->
    <div id="hero" class="relative w-full h-full carousel-item">
      <Hero class="w-full" />
      <div
        class="breath-line z-40 sm:hidden absolute rounded-full bottom-0 mx-auto w-1/4 inset-x-0 h-1 bg-primary bg-opacity-85"
      ></div>
    </div>
    <!-- Phone : intro -->
    <div id="intro" v-if="isPhone" class="relative w-full h-full carousel-item">
      <Intro class="w-full" />
      <div
        class="breath-line z-40 sm:hidden absolute rounded-full bottom-0 mx-auto w-1/4 inset-x-0 h-1 bg-primary bg-opacity-85"
      ></div>
    </div>
    <!-- Phone : exp -->
    <div id="exp" v-if="isPhone" class="relative w-full h-full carousel-item">
      <Exp class="w-full" />
      <div
        class="breath-line z-40 sm:hidden absolute rounded-full bottom-0 mx-auto w-1/4 inset-x-0 h-1 bg-primary bg-opacity-85"
      ></div>
    </div>
    <!-- Phone : works -->
    <div id="works" v-if="isPhone" class="relative w-full h-full carousel-item rounded-b-box">
      <Works class="w-full rounded-b-box" />
      <div
        class="breath-line z-40 sm:hidden absolute rounded-full bottom-0 mx-auto w-1/4 inset-x-0 h-1 bg-primary bg-opacity-85"
      ></div>
    </div>
    <!--Phone : Contact-->
    <div v-if="isPhone" class="flex items-center w-full h-full carousel-item">
      <ContactContent />
    </div>
    <!-- PC : intro & exp & works -->
    <div v-else class="relative w-full h-full carousel-item">
      <Pages class="w-full" />
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Home/Hero'
import Intro from '@/components/Pages/Intro'
import Exp from '@/components/Pages/Exp'
import Works from '@/components/Pages/Works'
import Pages from '@/components/Pages'
import ContactContent from '@/components/Contact/ContactContent'
import { provide } from 'vue'
export default {
  components: {
    Pages,
    Hero,
    Intro,
    Exp,
    Works,
    ContactContent
  },
  setup() {
    let isPhone = true;

    (() => {
      console.log(isPhone, window.innerWidth)
      if (window.innerWidth >= 500) {
        isPhone = false;
      }
      provide('isPhone', isPhone)
      console.log(isPhone)
    })();


    return {
      isPhone
    }
  }
}
</script>