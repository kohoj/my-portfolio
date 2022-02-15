<template>
  <ScrollMaster>
    <Preload :isLoaded="isLoaded" />
    <div id="app" class="flex flex-col w-full h-full absolute inset-0 m-auto">
      <NavBar :resume="myInfo._Resume"></NavBar>
      <ColCarousel :class="[{ 'to_shake': needShake }, ' flex-1']"></ColCarousel>
    </div>
    <Contact />
  </ScrollMaster>
</template>

<script>
import { getNotionData } from './service/index.js'
import { reactive, ref, provide } from 'vue'
import ScrollMaster from '@/components/ScrollMaster'
import Preload from '@/components/Preload'
import NavBar from '@/components/NavBar'
import ColCarousel from '@/components/ColCarousel'
import Contact from '@/components/Contact'
export default {
  name: 'App',
  setup() {
    // data-collector
    const myInfo = reactive({
      _Email: '',
      _Wechat: '',
      _Instagram: '',
      _GitHub: '',
      _Codepen: '',
      _Brief: '',
      _Detail: '',
      _Stack: [],
      _Avatar: '',
      _Resume: '',
      _Ending: '',
      _Exps: [],
      _Works: [],
    });

    let isLoaded = ref(false);

    // get data from notion
    (async () => {
      [
        [{
          email: myInfo._Email,
          wechat: myInfo._Wechat,
          instagram: myInfo._Instagram,
          github: myInfo._GitHub,
          codepen: myInfo._Codepen,
          brief: myInfo._Brief,
          detail: myInfo._Detail,
          stack: myInfo._Stack,
          avatar: [{ url: myInfo._Avatar }],
          ending: myInfo._Ending,
          resume: myInfo._Resume
        }],
        myInfo._Exps,
        myInfo._Works
      ] = await getNotionData();

      isLoaded.value = true;
    })();

    provide('myInfo', myInfo);

    // shake the screen
    let needShake = ref(false);

    const toShake = () => {
      if (window.innerWidth >= 500) return;
      needShake.value = true;
      setTimeout(() => {
        needShake.value = false;
      }, 200)
    }

    provide('toShake', toShake);

    return {
      isLoaded,
      myInfo,
      needShake,
      toShake
    }
  },
  components: {
    ScrollMaster,
    Preload,
    NavBar,
    ColCarousel,
    Contact
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.to_shake {
  -webkit-animation: shake_1 0.3s;
}

@-webkit-keyframes shake_1 {
  2% {
    -webkit-transform: translate(-0.5px, 0.5px) rotate(-0.5deg);
  }
  4% {
    -webkit-transform: translate(2.5px, 0.5px) rotate(-0.5deg);
  }
  6% {
    -webkit-transform: translate(-0.5px, 1.5px) rotate(1.5deg);
  }
  8% {
    -webkit-transform: translate(0.5px, 0.5px) rotate(-0.5deg);
  }
  10% {
    -webkit-transform: translate(-0.5px, -1.5px) rotate(-0.5deg);
  }
  12% {
    -webkit-transform: translate(0.5px, -0.5px) rotate(1.5deg);
  }
  14% {
    -webkit-transform: translate(1.5px, 2.5px) rotate(-0.5deg);
  }
  16% {
    -webkit-transform: translate(-0.5px, -0.5px) rotate(0.5deg);
  }
  18% {
    -webkit-transform: translate(2.5px, 0.5px) rotate(0.5deg);
  }
  20% {
    -webkit-transform: translate(0.5px, -1.5px) rotate(-0.5deg);
  }
  22% {
    -webkit-transform: translate(2.5px, 2.5px) rotate(-0.5deg);
  }
  24% {
    -webkit-transform: translate(2.5px, 1.5px) rotate(1.5deg);
  }
  26% {
    -webkit-transform: translate(0.5px, 1.5px) rotate(-0.5deg);
  }
  28% {
    -webkit-transform: translate(1.5px, 0.5px) rotate(0.5deg);
  }
  30% {
    -webkit-transform: translate(-1.5px, 2.5px) rotate(1.5deg);
  }
  32% {
    -webkit-transform: translate(0.5px, 0.5px) rotate(0.5deg);
  }
  34% {
    -webkit-transform: translate(0.5px, 1.5px) rotate(1.5deg);
  }
  36% {
    -webkit-transform: translate(2.5px, -0.5px) rotate(1.5deg);
  }
  38% {
    -webkit-transform: translate(0.5px, 1.5px) rotate(1.5deg);
  }
  40% {
    -webkit-transform: translate(2.5px, 1.5px) rotate(1.5deg);
  }
  42% {
    -webkit-transform: translate(2.5px, -1.5px) rotate(0.5deg);
  }
  44% {
    -webkit-transform: translate(0.5px, -0.5px) rotate(0.5deg);
  }
  46% {
    -webkit-transform: translate(1.5px, -1.5px) rotate(0.5deg);
  }
  48% {
    -webkit-transform: translate(-1.5px, -0.5px) rotate(0.5deg);
  }
  50% {
    -webkit-transform: translate(2.5px, -1.5px) rotate(1.5deg);
  }
  52% {
    -webkit-transform: translate(0.5px, 1.5px) rotate(0.5deg);
  }
  54% {
    -webkit-transform: translate(2.5px, -0.5px) rotate(0.5deg);
  }
  56% {
    -webkit-transform: translate(2.5px, 2.5px) rotate(0.5deg);
  }
  58% {
    -webkit-transform: translate(2.5px, 1.5px) rotate(-0.5deg);
  }
  60% {
    -webkit-transform: translate(1.5px, 1.5px) rotate(-0.5deg);
  }
  62% {
    -webkit-transform: translate(-0.5px, 0.5px) rotate(-0.5deg);
  }
  64% {
    -webkit-transform: translate(2.5px, 1.5px) rotate(-0.5deg);
  }
  66% {
    -webkit-transform: translate(-1.5px, 0.5px) rotate(1.5deg);
  }
  68% {
    -webkit-transform: translate(1.5px, -1.5px) rotate(0.5deg);
  }
  70% {
    -webkit-transform: translate(0.5px, 0.5px) rotate(-0.5deg);
  }
  72% {
    -webkit-transform: translate(-0.5px, 1.5px) rotate(1.5deg);
  }
  74% {
    -webkit-transform: translate(-1.5px, 1.5px) rotate(1.5deg);
  }
  76% {
    -webkit-transform: translate(2.5px, -0.5px) rotate(0.5deg);
  }
  78% {
    -webkit-transform: translate(2.5px, 2.5px) rotate(0.5deg);
  }
  80% {
    -webkit-transform: translate(-1.5px, 2.5px) rotate(0.5deg);
  }
  82% {
    -webkit-transform: translate(-1.5px, -0.5px) rotate(0.5deg);
  }
  84% {
    -webkit-transform: translate(0.5px, 1.5px) rotate(-0.5deg);
  }
  86% {
    -webkit-transform: translate(-0.5px, 2.5px) rotate(0.5deg);
  }
  88% {
    -webkit-transform: translate(2.5px, 2.5px) rotate(1.5deg);
  }
  90% {
    -webkit-transform: translate(-0.5px, -1.5px) rotate(-0.5deg);
  }
  92% {
    -webkit-transform: translate(1.5px, 0.5px) rotate(0.5deg);
  }
  94% {
    -webkit-transform: translate(-0.5px, -0.5px) rotate(0.5deg);
  }
  96% {
    -webkit-transform: translate(1.5px, 0.5px) rotate(1.5deg);
  }
  98% {
    -webkit-transform: translate(0.5px, -0.5px) rotate(1.5deg);
  }
  0%,
  100% {
    -webkit-transform: translate(0, 0) rotate(0);
  }
}
</style>
