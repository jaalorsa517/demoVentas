<template lang="pug">
  v-app
    v-app-bar(app color="primary")
      div(class="d-flex align-center justify-center" style="width:100%")
        v-app-bar-title(class="secondary--text") Demo de ventas
        v-spacer
        find(v-show="isFinding")
        v-icon(@click="isFinding = !isFinding") mdi-file-find-outline
      template(v-slot:extension)
        tabsDemo(color="white")
    v-main
      router-view
</template>

<script>
import tabsDemo from "@/components/tabs.vue";
import find from "@/components/find.vue";

export default {
  name: "App",

  components: {
    tabsDemo,
    find,
  },
  data: () => ({
    isFinding: false,
  }),
};
</script>
