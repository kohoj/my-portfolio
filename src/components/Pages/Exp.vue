<template >
  <main class="bg-neutral bg-base-pattern">
    <div class="max-w-5xl p-0 sm:px-4 sm:py-12 mx-auto">
      <div class="opacity-85 grid gap-2 sm:grid-cols-12">
        <div class="col-span-12 sm:col-span-3">
          <div class="text-center sm:text-left">
            <p class="text-2xl mt-2 sm:mt-0">
              <span class="card-title">Where I've Worked</span>
            </p>
          </div>
          <div class="block shadow-lg w-24 h-1 sm:h-3 mt-2 rounded-md mx-auto sm:mx-0 bg-primary"></div>
        </div>

        <div class="col-span-12 space-y-2 relative p-0 sm:pl-4 text-left sm:col-span-8">
          <!-- timeline -->
          <div class="hidden p-0 sm:block absolute top-2 bottom-0 w-0.5 -left-3 bg-gray-300"></div>
          <!-- --- -->
          <div v-for="(exp, i) in myInfo._Exps" :key="i" class="flex flex-col sm:relative">
            <!-- point -->
            <div
              class="hidden sm:block absolute top-6 w-4 h-4 rounded-full z-30 bg-neutral border border-primary"
              style="left:-35px"
            ></div>
            <!-- content -->
            <div
              tabindex="0"
              class="mx-4 border-2 bg-neutral collapse text-neutral-content rounded-box collapse-arrow"
              style="border-color:#1f1f21"
            >
              <div class="collapse-title">
                <h3 class="text-lg tracking-wide">
                  {{ exp.job }}
                  <p class="text-primary font-semibold">@{{ exp.company }}</p>
                </h3>
                <time class="text-xs tracking-wide uppercase text-coolGray-600">{{ exp.date }}</time>
              </div>
              <ul class="collapse-content">
                <li v-if="exp.p1" class="text-base mb-3">
                  <span class="text-primary text-sm">▶ &nbsp;</span>
                  <span v-html="exp.p1"></span>
                </li>
                <li v-if="exp.p2" class="text-base mb-3">
                  <span class="text-primary text-sm">▶ &nbsp;</span>
                  <span v-html="exp.p2"></span>
                </li>
                <li v-if="exp.p3" class="text-base mb-3">
                  <span class="text-primary text-sm">▶ &nbsp;</span>
                  <span v-html="exp.p3"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  inject: ['myInfo'],
}
</script>