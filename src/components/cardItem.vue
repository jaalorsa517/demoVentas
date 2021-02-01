<template lang="pug">
    v-dialog(v-model="dialog" persistent)
        template(v-slot:activator="{on,attrs}")
            v-card(class="mb-3" v-bind="attrs" v-on="on")
                v-card-title {{data.nombre}}
                v-card-subtitle {{data.telefono}}
        v-card
            v-card-title {{data.nombre}}
            v-card-text
                v-container
                    v-text-field(label="telefono" type="tel" :value="data.telefono" required)
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
