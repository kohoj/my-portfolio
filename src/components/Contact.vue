<template >
  <input type="checkbox" id="modal" class="modal-toggle" />
  <div class="modal z-50">
    <div class="modal-box max-w-lg rounded-box border text-gray-200 m-6 shadow-lg">
      <!-- avatar -->
      <div class="avatar online mb-2">
        <div class="rounded-full border-2 w-24 h-24">
          <img :src="myInfo._Avatar" />
        </div>
      </div>
      <!-- words -->
      <div class="mb-10">
        <p class="text-4xl font-bold text-gray-200 mb-5">Get In Touch</p>
        <p class="text-gray-300">{{ myInfo._Ending }}</p>
      </div>
      <!-- email & social media -->
      <div class="flex flex-col mb-6 opacity-85">
        <!-- email -->
        <div class="flex flex-row mb-4 items-center justify-center">
          <!--email address-->
          <div class="grid w-52 h-12 mr-2 rounded-box bg-base-300 place-items-center">
            <span class="select-all">{{ myInfo._Email }}</span>
          </div>
          <!--email send btn-->
          <a
            :href="`mailto:${myInfo._Email}`"
            class="grid w-14 card bg-base-500 btn btn-outline text-base font-normal normal-case place-items-center"
          >
            <svg
              class="w-6 h-6 inline"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>

        <!-- others -->
        <div class="flex flex-row items-center justify-center">
          <!--Github-->
          <a
            target="_blank"
            :href="myInfo._GitHub"
            class="card w-14 mr-4 bg-base-500 btn btn-outline text-base font-normal normal-case place-items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              viewBox="0 0 30 30"
              fill="currentColor"
            >
              <path
                d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
              />
            </svg>
          </a>
          <!--Codpen-->
          <a
            target="_blank"
            :href="myInfo._Codepen"
            class="card w-14 mr-4 bg-base-500 btn btn-outline text-base font-normal normal-case place-items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              viewBox="0 0 50 50"
              fill="currentColor"
            >
              <path
                d="M 25 4 L 4 17.34375 L 4 32.652344 L 25 46 L 46 32.65625 L 46 17.34375 Z M 25 29.183594 L 19.066406 25.070313 L 25 21.023438 L 30.933594 25.070313 Z M 27 17.605469 L 27 9.949219 L 40.429688 18.484375 L 34.410156 22.65625 Z M 23 17.605469 L 15.589844 22.65625 L 9.570313 18.484375 L 23 9.949219 Z M 12.09375 25.042969 L 8 27.832031 L 8 22.203125 Z M 15.570313 27.453125 L 23 32.605469 L 23 40.050781 L 9.589844 31.527344 Z M 27 32.605469 L 34.429688 27.453125 L 40.410156 31.527344 L 27 40.050781 Z M 37.90625 25.042969 L 42 22.203125 L 42 27.832031 Z"
              />
            </svg>
          </a>
          <!-- Wechat -->
          <div class="dropdown mr-4">
            <div
              tabindex="0"
              class="card w-14 bg-base-500 btn btn-outline text-base font-normal normal-case place-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                viewBox="0 0 50 50"
                fill="currentColor"
              >
                <path
                  d="M 19 6 C 9.625 6 2 12.503906 2 20.5 C 2 24.769531 4.058594 28.609375 7.816406 31.390625 L 5.179688 39.304688 L 13.425781 34.199219 C 15.714844 34.917969 18.507813 35.171875 21.203125 34.875 C 23.390625 39.109375 28.332031 42 34 42 C 35.722656 42 37.316406 41.675781 38.796875 41.234375 L 45.644531 45.066406 L 43.734375 38.515625 C 46.3125 36.375 48 33.394531 48 30 C 48 23.789063 42.597656 18.835938 35.75 18.105469 C 34.40625 11.152344 27.367188 6 19 6 Z M 13 14 C 14.101563 14 15 14.898438 15 16 C 15 17.101563 14.101563 18 13 18 C 11.898438 18 11 17.101563 11 16 C 11 14.898438 11.898438 14 13 14 Z M 25 14 C 26.101563 14 27 14.898438 27 16 C 27 17.101563 26.101563 18 25 18 C 23.898438 18 23 17.101563 23 16 C 23 14.898438 23.898438 14 25 14 Z M 34 20 C 40.746094 20 46 24.535156 46 30 C 46 32.957031 44.492188 35.550781 42.003906 37.394531 L 41.445313 37.8125 L 42.355469 40.933594 L 39.105469 39.109375 L 38.683594 39.25 C 37.285156 39.71875 35.6875 40 34 40 C 27.253906 40 22 35.464844 22 30 C 22 24.535156 27.253906 20 34 20 Z M 29.5 26 C 28.699219 26 28 26.699219 28 27.5 C 28 28.300781 28.699219 29 29.5 29 C 30.300781 29 31 28.300781 31 27.5 C 31 26.699219 30.300781 26 29.5 26 Z M 38.5 26 C 37.699219 26 37 26.699219 37 27.5 C 37 28.300781 37.699219 29 38.5 29 C 39.300781 29 40 28.300781 40 27.5 C 40 26.699219 39.300781 26 38.5 26 Z"
                />
              </svg>
            </div>
            <div
              tabindex="0"
              class="mt-2 shadow card border compact dropdown-content bg-base-100 rounded-box"
            >
              <div class="card-body">
                <p class="select-none text-left">
                  ID ~
                  <span class="select-all font-bold">{{ myInfo._Wechat }}</span>
                </p>
              </div>
            </div>
          </div>
          <!-- Instagram -->
          <a
            target="_blank"
            :href="myInfo._Instagram"
            class="card w-14 bg-base-500 btn btn-outline text-base font-normal normal-case place-items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"
              />
            </svg>
          </a>
        </div>
      </div>
      <!-- signature -->
      <span class="text-gray-300">
        <svg
          class="w-6 h-6 inline"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>&nbsp;Designed & Built by Koho Zheng&nbsp;&nbsp;
      </span>
      <!-- close btn -->
      <div class="modal-action">
        <label for="modal" class="btn btn-primary btn-outline">
          <code class="text-base font-normal normal-case">Got it !</code>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  inject: ['myInfo'],
}
</script>
