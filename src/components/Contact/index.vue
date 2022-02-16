<template >
  <input type="checkbox" id="modal" class="modal-toggle" />
  <div class="modal z-50">
    <ContactContent :fromBtn="true" />
  </div>
</template>
<script>
import ContactContent from '@/components/Contact/ContactContent'
export default {
  inject: ['myInfo'],
  components: { ContactContent },
}
</script>
