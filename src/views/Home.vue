<template>
  <Header title="Home" />
  <main>
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <div className="px-4 py-6 sm:px-0">
        <div
          className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4"
        >
          <div class="text-center text-gray-400 mb-6">
            Here goes your content. You can also go the About page.
          </div>
          <ul class="mx-30">
            <li v-for="link in links" :Key="link.to">
              <router-link
                class="block py-2 px-4 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-red-500 focus:outline-none mb-6"
                :to="link.to"
                >Click: {{ link.text }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <!-- End replace -->
    </div>
  </main>
</template>

<script lang="ts">
import Header from "../components/Header.vue";

import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
  },
  setup() {
    const links = reactive([
      {
        to: "/example",
        text: "Example index",
      },
      {
        to: "/example/1",
        text: "Example id: 1",
      },
      {
        to: "/example/2",
        text: "Example id: 2",
      },
      {
        to: "/example/page",
        text: "Example Page",
      },
    ]);
    return {
      links,
    };
  },
});
</script>

<style></style>
