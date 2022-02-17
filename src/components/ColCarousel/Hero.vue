<template >
  <div
    id="container"
    class="flex flex-col bg-neutral bg-base-pattern mx-auto items-center justify-center p-6"
  >
    <div id="wordsBox" class="text-left -mt-28">
      <code class="breath-word text-primary text-lg">$ Hi, my name is</code>

      <div
        id="bigWords"
        class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold"
      >
        <p class="text-gray-200 my-3">Koho Zheng.</p>
        <p class="text-gray-400 mt-1">I build things for the web.</p>
      </div>

      <div id="briefIntro" class="max-w-lg">
        <p class="mt-6 mb-10 text-gray-400">{{ myInfo._Brief }}</p>
      </div>

      <div id="contactBtn">
        <label for="modal" class="btn btn-primary btn-outline modal-button">
          <code class="text-base font-normal normal-case">Contact me</code>
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