<template>
  <div class="carousel">
    <!-- PC : intro -->

    <div id="intro" class="relative w-full h-full carousel-item">
      <Intro class="w-full" />
    </div>
    <!-- PC : exp -->

    <div id="exp" class="relative w-full h-full carousel-item">
      <Exp class="w-full" />
    </div>
    <!-- PC : works -->

    <div id="works" class="relative w-full h-full carousel-item">
      <div
        class="w-full flex flex-col bg-neutral bg-base-pattern mx-auto items-center justify-center p-6"
      >Works</div>
    </div>
  </div>
</template>
<script>
import Intro from './Intro'
import Exp from './Exp'
export default {
  components: { Intro, Exp, }
}
</script>
