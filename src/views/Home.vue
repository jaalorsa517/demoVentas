<template lang="pug">
  v-container.home(class="d-flex")
      list-items(:data="clientes")
</template>

<script>
import listItems from "@/components/listItems.vue";

export default {
  name: "Home",
  components: {
    listItems,
  },
  data: function() {
    return {
      clientes: [
        { nombre: "Juan Martinez", telefono: "3213213455" },
        { nombre: "Juan Martinez", telefono: "3213213455" },
        { nombre: "Juan Martinez", telefono: "3213213455" },
        { nombre: "Juan Martinez", telefono: "3213213455" },
        { nombre: "Juan Martinez", telefono: "3213213455" },
        { nombre: "Juan Martinez", telefono: "3213213455" },
        { nombre: "Juan Martinez", telefono: "3213213455" },
        { nombre: "Juan Martinez", telefono: "3213213455" },
        { nombre: "Juan Martinez", telefono: "3213213455" },
        { nombre: "Juan Martinez", telefono: "3213213455" },
        { nombre: "Juan Martinez", telefono: "3213213455" },
        { nombre: "Juan Martinez", telefono: "3213213455" },
        { nombre: "Juan Martinez", telefono: "3213213455" },
        { nombre: "Juan Martinez", telefono: "3213213455" },
        { nombre: "Juan Martinez", telefono: "3213213455" },
        { nombre: "Juan Martinez", telefono: "3213213455" },
      ],
    };
  },
};
</script>
