<template>
  <div
    id="preload-con"
    v-if="loadNum < 110 || !isLoaded"
    :class="['fixed bg-black inset-0 z-50',
    { 'transition duration-1000 ease bg-opacity-0': loadNum > 100 && isLoaded }]"
  >
    <div
      id="preload-wave"
      class="text-focus-in w-28 h-5 rounded-xl bg-preload-wave bg-repeat-x absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2"
      :style="{ backgroundPosition: `${loadNum}px 100%`, backgroundSize: '230px', display: loadNum > 100 && isLoaded ? 'none' : '' }"
    ></div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    isLoaded: Boolean,
  },
  setup() {
    let loadNum = ref(0);

    let timer = setInterval(() => {
      if (loadNum.value < 110) {
        loadNum.value += 2;
        return
      }
      clearInterval(timer);
      timer = null;
      console.log("Load-page Unmounted!");
    }, 50);

    return { loadNum }
  }
}
</script>
<style scoped="scoped">
#preload-wave {
  background-image: url("../assets/wave.png");
}

.text-focus-in {
  animation: text-focus-in 800ms cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}
@keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
</style>