<template>
  <div>
    <h1 class="display-3 font-weight-light mb-4">
      Negocie e Consulte suas Ações
    </h1>
    <v-sheet color="primary mb-2 pa-2" :elevation="6">
      <v-icon class="white--text mr-3">info</v-icon>
      <span class="headline white--text font-weight-light"
        >Você pode Salvar & Carregar os Dados</span
      >
    </v-sheet>
    <v-sheet color="success mb-2 pa-2" :elevation="6">
      <v-icon class="white--text mr-3">info</v-icon>
      <span class="headline white--text font-weight-light"
        >Clique em "Finalizar" para iniciar um novo dia!</span
      >
    </v-sheet>
    <v-divider class="my-4"></v-divider>
    <p class="display-1">
      <strong>Seu saldo: {{ funds | currency }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
};
</script>

<style>
</style>