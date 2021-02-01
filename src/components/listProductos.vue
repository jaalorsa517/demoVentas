<template lang="pug">
    v-container
        div(v-for="d, index in data" :key='index')
            product-item(:data="d")
        
</template>

<script>
import productItem from "@/components/productItem.vue";

export default {
  name: "listItems",
  props: {
    data: {
      required: true,
    },
  },
  components: {
    productItem,
  },
};
</script>
