<template >
  <main class="sm:border-2 sm:border-gray-300 rounded-box">
    <div class="max-w-5xl p-0 sm:px-4 sm:py-12 mx-auto">
      <div class="grid gap-2 sm:grid-cols-12">
        <div class="col-span-12 sm:col-span-3">
          <div class="block shadow-lg w-24 h-3 my-2 rounded-md mx-auto sm:mx-0 bg-neutral"></div>
          <div class="text-center sm:text-left">
            <p class="text-2xl">
              <span class="card-title">Where I've Worked</span>
            </p>
          </div>
        </div>

        <div
          class="bg-opacity-85 col-span-12 space-y-2 relative p-0 sm:pl-4 text-left sm:col-span-8"
        >
          <!-- timeline -->
          <div class="hidden p-0 sm:block absolute top-2 bottom-0 w-0.5 -left-3 bg-gray-300"></div>
          <!-- --- -->
          <div class="flex flex-col sm:relative">
            <!-- point -->
            <div
              class="hidden sm:block absolute top-6 w-4 h-4 rounded-full z-30 bg-neutral border border-primary"
              style="left:-35px"
            ></div>
            <div
              tabindex="0"
              class="bg-base-pattern collapse btn-outline shadow-lg bg-base-100 text-neutral-content rounded-box collapse-arrow"
            >
              <div class="collapse-title text-xl font-medium">
                <h3 class="text-xl font-medium tracking-wide">Donec porta enim vel</h3>
                <time class="text-xs tracking-wide uppercase text-coolGray-600">Dec 2020</time>
              </div>
              <div class="collapse-content">
                <p
                  class="mt-3"
                >Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
              </div>
            </div>
          </div>
          <!-- --- -->
          <div class="flex flex-col sm:relative">
            <div
              class="hidden sm:block absolute top-6 w-4 h-4 rounded-full bg-gray-300"
              style="left:-35px;z-index:1"
            ></div>
            <div
              tabindex="0"
              class="collapse border border-base-300 bg-base-100 rounded-box collapse-arrow"
            >
              <div class="collapse-title text-xl font-medium">
                <h3 class="text-xl font-semibold tracking-wide">Donec porta enim vel</h3>
                <time class="text-xs tracking-wide uppercase text-coolGray-600">Dec 2020</time>
              </div>
              <div class="collapse-content">
                <p
                  class="mt-3"
                >Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>