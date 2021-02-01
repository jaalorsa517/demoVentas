<template lang="pug">
    v-dialog(v-model="dialog" persistent)
        template(v-slot:activator="{on,attrs}")
            v-card(class="mb-3" v-bind="attrs" v-on="on")
                v-card-title {{data.nombre}}
                v-card-subtitle 
                    div(class="d-flex justify-space-around")
                        span \#{{data.cantidad}}
                        span ${{data.valor}}
        v-card
            v-card-title {{data.nombre}}
            v-card-text
                v-container
                    v-text-field(label="cantidad" type="number" :value="data.cantidad" required)
                    v-text-field(label="valor" type="number" :value="data.valor" required)
            v-card-actions
                v-btn(@click="dialog=false") Cerrar
                v-btn(@click="dialog=false") Guardar
</template>

<script>
export default {
  name: "cardItem",
  props: {
    data: {
      required: true,
    },
  },
  data: function() {
    return {
      dialog: false,
    };
  },
};
</script>
