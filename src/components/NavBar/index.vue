<!-- NavBar -->
<template>
  <!-- topBar part -->
  <div class="navbar relative m-2 shadow-lg bg-neutral text-neutral-content rounded-box">
    <div id="logoBtn" class="px-2 mx-2 navbar-start">
      <a href="/components/carousel#hero" class="text-lg font-bold">
        <span :class="{ 'text-primary font-semibold': isHero }">#</span>&nbsp;Koho
      </a>
    </div>

    <div id="moreBtn" class="navbar-end sm:hidden">
      <div class="dropdown dropdown-end dropdown-hover">
        <div tabindex="0" class="btn btn-ghost btn-square">
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="p-2 mt-4 -mr-2 border border-opacity-20 shadow-lg menu dropdown-content bg-neutral rounded-box text-sm"
        >
          <li>
            <a href="/components/carousel#intro">Introduction</a>
          </li>
          <li>
            <a href="/components/carousel#exp">Experience</a>
          </li>
          <li>
            <a href="/components/carousel#works">Works</a>
          </li>
          <li>
            <a>
              <label for="modal">Contact</label>
            </a>
          </li>
          <li>
            <a target="_blank" :href="resume">
              简历&nbsp;
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div id="middleBtn" class="px-2 mx-2 navbar-center hidden sm:flex">
      <div class="items-stretch">
        <a
          href="/components/carousel#intro"
          :class="[{ 'text-primary': isI }, 'btn btn-ghost btn-sm rounded-btn']"
        >intro</a>
        <a
          href="/components/carousel#exp"
          :class="[{ 'text-primary': isE }, 'btn btn-ghost btn-sm rounded-btn']"
        >experiment</a>
        <a
          href="/components/carousel#works"
          :class="[{ 'text-primary': isW }, 'btn btn-ghost btn-sm rounded-btn']"
        >works</a>
        <a class="btn btn-ghost btn-sm rounded-btn">
          <label for="modal">Contact</label>
        </a>
      </div>
    </div>

    <div id="downloadBtn" class="navbar-end hidden sm:flex">
      <div data-tip="简历.pdf" class="tooltip tooltip-bottom">
        <a target="_blank" :href="resume" class="btn btn-square btn-ghost">
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
  <!-- arrow Btn -->
  <ArrowBtn class="hidden sm:block" :urlHash="{ isHero, isI, isE, isW }" />
</template>
<script>
import { useRouter } from 'vue-router'
import { watch, ref } from 'vue'
import ArrowBtn from '@/components/NavBar/ArrowBtn'
export default {
  props: {
    resume: String,
  },
  setup() {
    const curUrl = ref(useRouter().currentRoute);
    let isHero = ref(true);
    let isI = ref(false);
    let isE = ref(false);
    let isW = ref(false);

    //change the Guidance's state
    watch(curUrl, () => {
      // console.log(curUrl.value.hash)
      isHero.value = isI.value = isE.value = isW.value = false;
      switch (curUrl.value.hash) {
        case '#intro':
          isI.value = true;
          break;
        case '#exp':
          isE.value = true;
          break;
        case '#works':
          isW.value = true;
          break;
        default:
          isHero.value = true;
      }
      // console.log(isHero.value, isI.value, isE.value, isW.value)
    })

    return {
      isHero, isI, isE, isW
    }
  },
  components: {
    ArrowBtn,
  }
}
</script>