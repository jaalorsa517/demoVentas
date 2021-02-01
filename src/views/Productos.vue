<template lang="pug">
    v-container
        list-productos(:data="productos")
</template>
<script>
import listProductos from "@/components/listProductos.vue";

export default {
  name: "Productos",
  components: {
    listProductos,
  },
  data: function() {
    return {
      productos: [
        {
          nombre: "Confite dulce y agridulce donde el amigo",
          cantidad: 56,
          valor: 150000,
        },
        {
          nombre: "Confite dulce y agridulce donde el amigo",
          cantidad: 56,
          valor: 150000,
        },
        {
          nombre: "Confite dulce y agridulce donde el amigo",
          cantidad: 56,
          valor: 150000,
        },
        {
          nombre: "Confite dulce y agridulce donde el amigo",
          cantidad: 56,
          valor: 150000,
        },
        {
          nombre: "Confite dulce y agridulce donde el amigo",
          cantidad: 56,
          valor: 150000,
        },
        {
          nombre: "Confite dulce y agridulce donde el amigo",
          cantidad: 56,
          valor: 150000,
        },
        {
          nombre: "Confite dulce y agridulce donde el amigo",
          cantidad: 56,
          valor: 150000,
        },
        {
          nombre: "Confite dulce y agridulce donde el amigo",
          cantidad: 56,
          valor: 150000,
        },
        {
          nombre: "Confite dulce y agridulce donde el amigo",
          cantidad: 56,
          valor: 150000,
        },
        {
          nombre: "Confite dulce y agridulce donde el amigo",
          cantidad: 56,
          valor: 150000,
        },
        {
          nombre: "Confite dulce y agridulce donde el amigo",
          cantidad: 56,
          valor: 150000,
        },
        {
          nombre: "Confite dulce y agridulce donde el amigo",
          cantidad: 56,
          valor: 150000,
        },
        {
          nombre: "Confite dulce y agridulce donde el amigo",
          cantidad: 56,
          valor: 150000,
        },
        {
          nombre: "Confite dulce y agridulce donde el amigo",
          cantidad: 56,
          valor: 150000,
        },
        {
          nombre: "Confite dulce y agridulce donde el amigo",
          cantidad: 56,
          valor: 150000,
        },
      ],
    };
  },
};
</script>
