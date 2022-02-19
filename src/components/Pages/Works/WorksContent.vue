<template >
  <div
    v-for="(item, i) in myInfo._Works"
    v-show="isPhone || selectWorks.includes(i)"
    :key="i"
    :id="{ works: !i }"
    :class="[{ 'w-full h-full carousel-item': isPhone }, 'sm:border-2 sm:rounded-box']"
    style="border-color:#1f1f21"
  >
    <div
      class="card items-center justify-center rounded-t-none h-full lg:flex-row bg-neutral shadow-xl sm:rounded-box"
    >
      <!-- photos -->
      <figure style="max-width: 500px">
        <div class="w-full max-h-80 bg-black overflow-hidden">
          <div class="transform -translate-y-10 rotate-12">
            <div class="animation-10s justify-start">
              <div
                v-for="(v, k) in [...new Array(8).keys()]"
                :key="v + k"
                class="w-28 h-56 mr-8 rounded-box bg-cover bg-center shadow-lg"
                style="background-image: url(https://api.lorem.space/image/album?w=400&h=400);"
              ></div>
              <!-- <div
                  v-for="(photo, j) in item.photos"
                  :key="j"
                  class="w-28 h-56 mr-8  rounded-box bg-cover bg-center shadow-lg"
                  :style="{ backgroundImage: `url(${photo})` }"
                ></div>
                <div
                  v-for="(photo, j) in item.photos"
                  :key="j"
                  class="w-28 h-56 mr-8  rounded-box bg-cover bg-center shadow-lg"
                  :style="{ backgroundImage: `url(${photo})` }"
              ></div>-->
            </div>
            <div class="animation-12s justify-start">
              <span
                v-for="(v, k) in [...new Array(8).keys()]"
                :key="v + k"
                class="my-3 w-28 mr-8 text-white text-xs flex justify-center items-start"
              >Koho's Portfolio</span>
            </div>
            <div class="animation-14s justify-start">
              <div
                v-for="(v, k) in [...new Array(8).keys()]"
                :key="v + k"
                class="w-28 h-56 mr-8 rounded-box bg-cover bg-center shadow-lg"
                style="background-image: url(https://api.lorem.space/image/album?w=400&h=400);"
              ></div>
            </div>
          </div>
        </div>
      </figure>
      <!-- words -->
      <div class="card-body max-h-80 relative z-20 items-center justify-start overflow-hidden">
        <div class="rounded-box bg-neutral text-left px-3 flex relative">
          <div class="max-w-sm flex flex-col relative z-20">
            <!-- line -->
            <span class="w-20 h-1 rounded-full bg-primary mb-4"></span>
            <!-- name -->
            <a
              :href="item.link"
              target="_blank"
              class="inline-block link link-hover text-primary text-xl sm:text-2xl mb-0.5"
            >
              {{ item.works }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 inline-block"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                />
                <path
                  d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                />
              </svg>
            </a>
            <!-- detail -->
            <p class="text-sm sm:text-base mb-4">{{ item.detail }}</p>
            <!-- stacks -->
            <div class="flex flex-wrap">
              <div v-for="(item, i) in myInfo._Stack" :key="i" class>
                <code class="text-xs mr-3">{{ item }}</code>
              </div>
            </div>
          </div>
        </div>
        <!-- scroll tip -->
        <div
          v-if="i != myInfo._Works.length - 1"
          class="breath-line z-40 sm:hidden flex items-center absolute rounded-full h-1/4 mr-1 right-0 my-auto inset-y-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['myInfo', 'isPhone'],
  props: {
    selectWorks: Array
  }
}
</script>

<style scoped="scoped">
.animation-10s {
  animation: scroller 20s ease-in-out infinite;
  width: calc(9rem * 8);
  display: flex;
}
.animation-12s {
  animation: scroller 24s ease-in-out infinite;
  width: calc(9rem * 8);
  display: flex;
}
.animation-14s {
  animation: scroller 28s ease-in-out infinite;
  width: calc(9rem * 8);
  display: flex;
}

@keyframes scroller {
  0% {
    transform: translateX(calc(9rem * -4));
  }
  50% {
    transform: translateX(calc(9rem * 0));
  }
  100% {
    transform: translateX(calc(9rem * -4));
  }
}
</style>