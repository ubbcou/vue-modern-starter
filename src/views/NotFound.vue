<template>
  <main v-html="`Not found <${time}>`"></main>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: '404',
  path: '/404',
  setup() {
    const time = ref<Date>(new Date())
    return {
      time
    }
  }
})
</script>

