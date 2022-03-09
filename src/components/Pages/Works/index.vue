<template>
  <div
    :class="[{ 'h-full bg-neutral bg-base-pattern flex  lg:flex-row-reverse flex-row justify-center items-center overflow-hidden': !isPhone }, { 'carousel': isPhone }]"
  >
    <WorksContent :selectWorks="selectWorks" />
    <nav class="sm:block hidden p-6">
      <ul class="menu bg-neutral rounded-box border-2" style="border-color:#1f1f21">
        <li class="border-primary border-l-4">
          <p class="z-10 text-center text-xl font-bold py-5">Portfolio</p>
        </li>
        <li v-for="(item, i) in myInfo._Works" :key="i">
          <a @click="boarder(i)">{{ item.works }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import WorksContent from './WorksContent'
import { ref } from 'vue'
export default {
  inject: ['myInfo', 'isPhone'],
  components: { WorksContent },
  setup() {
    let selectWorks = ref([0]);

    const boarder = (i) => {
      selectWorks.value.pop();
      selectWorks.value.push(i);
    }
    return {
      boarder, selectWorks
    }
  }
}
</script>