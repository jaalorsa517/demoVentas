<template lang="pug">
    v-tabs(centered color="white")
        v-tab(@click="$router.push('/')") Cliente
        v-tab(@click="$router.push('/pedido')") Pedido
        v-tab(@click="$router.push('/productos')") Productos
</template>
