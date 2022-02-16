<template>
  <!-- <ScrollMaster> -->
  <Preload :isLoaded="isLoaded" />
  <div id="app" class="flex flex-col w-full h-full absolute inset-0 m-auto">
    <NavBar :resume="myInfo._Resume"></NavBar>
    <ColCarousel class="flex-1 rounded-box"></ColCarousel>
  </div>
  <Contact />
  <!-- </ScrollMaster> -->
</template>

<script>
import { getNotionData } from './service/index.js'
import { reactive, ref, provide } from 'vue'
// import ScrollMaster from '@/components/ScrollMaster'
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


    return {
      isLoaded,
      myInfo,
    }
  },
  components: {
    // ScrollMaster,
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
</style>
