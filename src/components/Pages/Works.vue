<template>
  <div class="carousel">
    <div
      v-for="(item, i) in myInfo._Works"
      :key="i"
      :id="{ works: !i }"
      class="w-full h-full carousel-item"
    >
      <div
        class="card items-center justify-center rounded-t-none h-full lg:card-side bg-neutral bg-base-pattern shadow-xl"
      >
        <figure style="max-width: 500px;">
          <div class="w-full max-h-80 bg-black overflow-hidden">
            <div class="relative -top-10 transform rotate-12">
              <div class="animation-15s">
                <div
                  v-for="(photo, j) in item.photos"
                  :key="j"
                  class="w-28 h-56 mr-8 mb-8 rounded-box bg-cover bg-center shadow-lg"
                  :style="{ backgroundImage: `url(${photo})` }"
                ></div>
                <div
                  v-for="(photo, j) in item.photos"
                  :key="j"
                  class="w-28 h-56 mr-8 mb-8 rounded-box bg-cover bg-center shadow-lg"
                  :style="{ backgroundImage: `url(${photo})` }"
                ></div>
              </div>
              <div class="animation-20s">
                <div
                  class="w-28 h-56 mr-8 mb-8 rounded-box bg-cover bg-center shadow-lg"
                  style="background-image: url(https://api.lorem.space/image/album?w=400&h=400);"
                ></div>
                <div
                  class="w-28 h-56 mr-8 mb-8 rounded-box bg-cover bg-center shadow-lg"
                  style="background-image: url(https://api.lorem.space/image/album?w=400&h=400);"
                ></div>
                <div
                  class="w-28 h-56 mr-8 mb-8 rounded-box bg-cover bg-center shadow-lg"
                  style="background-image: url(https://api.lorem.space/image/album?w=400&h=400);"
                ></div>
                <div
                  class="w-28 h-56 mr-8 mb-8 rounded-box bg-cover bg-center shadow-lg"
                  style="background-image: url(https://api.lorem.space/image/album?w=400&h=400);"
                ></div>
                <div
                  class="w-28 h-56 mr-8 mb-8 rounded-box bg-cover bg-center shadow-lg"
                  style="background-image: url(https://api.lorem.space/image/album?w=400&h=400);"
                ></div>
                <div
                  class="w-28 h-56 mr-8 mb-8 rounded-box bg-cover bg-center shadow-lg"
                  style="background-image: url(https://api.lorem.space/image/album?w=400&h=400);"
                ></div>
                <div
                  class="w-28 h-56 mr-8 mb-8 rounded-box bg-cover bg-center shadow-lg"
                  style="background-image: url(https://api.lorem.space/image/album?w=400&h=400);"
                ></div>
                <div
                  class="w-28 h-56 mr-8 mb-8 rounded-box bg-cover bg-center shadow-lg"
                  style="background-image: url(https://api.lorem.space/image/album?w=400&h=400);"
                ></div>
              </div>
            </div>
          </div>
        </figure>
        <div class="card-body relative z-20 items-center justify-start overflow-hidden">
          <div class="rounded-box bg-neutral text-left px-3 flex relative py-8">
            <div class="max-w-sm flex flex-col relative z-20">
              <span class="w-20 h-1 bg-primary mb-4"></span>
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
              <p class="text-sm sm:text-base mb-4">{{ item.detail }}</p>
              <div class="flex flex-wrap">
                <div v-for="(item, i) in myInfo._Stack" :key="i" class>
                  <code class="text-xs mr-3">{{ item }}</code>
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="i != myInfo._Works.length - 1"
            class="breath-line sm:hidden absolute rounded-full h-1/4 right-0 my-auto inset-y-0 w-px bg-primary bg-opacity-85"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  inject: ['myInfo'],
}
</script>
<style scoped="scoped">
.photo-item {
  width: 320px;
  height: 200px;
  /* margin-right: 60px;
  margin-bottom: 60px; */
  /* border-radius: 16px; */
  /* background-size: cover; */
  /* background-repeat: no-repeat; */
  /* background-position: center; */
  /* box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.15); */
}
.animation-15s {
  animation: scroller 15s linear infinite;
  width: calc(9rem * 8);
  display: flex;
}
.animation-20s {
  animation: scroller 20s linear infinite;
  width: calc(9rem * 8);
  display: flex;
}

@keyframes scroller {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(calc(-9rem * 4));
  }
  100% {
    transform: translateX(0);
  }
}
.photo-1 {
  background-image: url(https://api.lorem.space/image/album?w=400&h=400);
}
.photo-2 {
  background-image: url(https://res.cloudinary.com/dzq1l03yt/image/upload/v1593513347/Nature/image_16_oqcpeb.jpg);
}
.photo-3 {
  background-image: url(https://res.cloudinary.com/dzq1l03yt/image/upload/v1593513347/Nature/image_15_opmlwd.jpg);
}
.photo-4 {
  background-image: url(https://res.cloudinary.com/dzq1l03yt/image/upload/v1593513346/Nature/image_14_nie14a.jpg);
}
.photo-5 {
  background-image: url(https://res.cloudinary.com/dzq1l03yt/image/upload/v1593513346/Nature/image_13_kojf0w.jpg);
}
.photo-6 {
  background-image: url(https://res.cloudinary.com/dzq1l03yt/image/upload/v1593513346/Nature/image_17_hngpby.jpg);
}
.photo-7 {
  background-image: url(https://res.cloudinary.com/dzq1l03yt/image/upload/v1593513346/Nature/image_11_wcunjf.jpg);
}
.photo-8 {
  background-image: url(https://res.cloudinary.com/dzq1l03yt/image/upload/v1593513346/Nature/image_9_stnpjs.jpg);
}
.photo-9 {
  background-image: url(https://res.cloudinary.com/dzq1l03yt/image/upload/v1593513345/Nature/image_12_m3evi3.jpg);
}
.photo-10 {
  background-image: url(https://res.cloudinary.com/dzq1l03yt/image/upload/v1593513345/Nature/image_10_euaoai.jpg);
}
.photo-11 {
  background-image: url(https://res.cloudinary.com/dzq1l03yt/image/upload/v1593513345/Nature/image_7_apdkz1.jpg);
}
.photo-12 {
  background-image: url(https://res.cloudinary.com/dzq1l03yt/image/upload/v1593513345/Nature/image_8_khwrpi.jpg);
}
.photo-13 {
  background-image: url(https://res.cloudinary.com/dzq1l03yt/image/upload/v1593513345/Nature/image_5_vhwqqg.jpg);
}
.photo-14 {
  background-image: url(https://res.cloudinary.com/dzq1l03yt/image/upload/v1593513345/Nature/image_2_nrbfpf.jpg);
}
.photo-15 {
  background-image: url(https://res.cloudinary.com/dzq1l03yt/image/upload/v1593513345/Nature/image_4_qxw6i4.jpg);
}
.photo-16 {
  background-image: url(https://res.cloudinary.com/dzq1l03yt/image/upload/v1593513345/Nature/image_3_ucohbw.jpg);
}
.photo-17 {
  background-image: url(https://res.cloudinary.com/dzq1l03yt/image/upload/v1593513345/Nature/image_1_yitfy3.jpg);
}
.photo-18 {
  background-image: url(https://res.cloudinary.com/dzq1l03yt/image/upload/v1593513345/Nature/image_6_xcylqe.jpg);
}
</style>