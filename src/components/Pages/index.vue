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
      <Works class="w-full" />
    </div>
  </div>
</template>
<script>
import Intro from './Intro'
import Exp from './Exp'
import Works from './Works'
export default {
  components: { Intro, Exp, Works }
}
</script>
