<template>
  <main>Example page ID: {{ id }}</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'ExampleID',
  setup() {
    const route = useRoute()
    const { id } = route.params

    return {
      id,
    }
  },
})
</script>

<style></style>
