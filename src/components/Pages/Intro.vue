<template >
  <main class="flex items-start md:items-center justify-center bg-neutral bg-base-pattern">
    <div class="mx-3 flex flex-col items-center justify-center md:flex-row">
      <div class="md:self-start">
        <img class="w-24 sm:w-40 md:w-56 lg:w-60" :src="myInfo._Avatar" alt="Avatar" />
        <div class="card-title mb-0 px-0 border-b sm:border-0 md:text-2xl">About Me</div>
      </div>
      <div
        class="rounded-box bg-neutral border-2 card-body max-w-lg p-4"
        style="border-color:#1f1f21"
      >
      <div v-for="(p,i) in myInfo._Detail.split('||')" :key="i">
        <p class="text-left mb-4 md:text-lg">{{p}}</p>
      </div>
        <div class="flex flex-wrap">
          <div
            v-for="(item, i) in myInfo._Stack"
            :key="i"
            class="badge badge-primary badge-outline m-1 ml-0"
          >
            <code class="text-xs">{{ item }}</code>
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