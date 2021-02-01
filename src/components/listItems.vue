<template lang="pug">
    v-container
        div(v-for="d, index in data" :key='index')
            card-item(:data="d")
        
</template>

<script>
import cardItem from "@/components/cardItem.vue";

export default {
  name: "listItems",
  props: {
    data: {
      required: true,
    },
  },
  components: {
    cardItem,
  },
};
</script>
