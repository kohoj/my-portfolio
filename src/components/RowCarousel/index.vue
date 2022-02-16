<template>
  <div class="carousel rounded-box">
    <!-- PC : intro -->

    <div id="intro" class="relative w-full h-full carousel-item rounded-box">
      <Intro class="w-full rounded-box" />
    </div>
    <!-- PC : exp -->

    <div id="exp" class="relative w-full h-full carousel-item rounded-box">
      <Exp class="w-full rounded-box" />
    </div>
    <!-- PC : works -->

    <div id="works" class="relative w-full h-full carousel-item rounded-box">
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
