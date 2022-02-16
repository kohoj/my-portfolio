<template>
  <a
    data-theme="forest"
    :href="`/components/carousel#${urlHash.isHero ? 'intro' : 'hero'}`"
    class="btn shadow-lg m-0 rounded-2xl w-min text-sm"
  >
    <code v-show="urlHash.isHero">▼</code>
    <code v-show="!urlHash.isHero">▲</code>
    <code v-show="!urlHash.isHero">
      <span :class="{ 'text-primary font-bold': urlHash.isI }">I&nbsp;&nbsp;</span>
      <span :class="{ 'text-primary font-bold': urlHash.isE }">E</span>
      <span :class="{ 'text-primary font-bold': urlHash.isW }">&nbsp;&nbsp;W</span>
    </code>
  </a>
</template>
<script>
export default {
  props: {
    urlHash: Object
  }
}
</script>
