<template>
  <v-snackbar
      v-model="$store.state.snackbar.show"
      top
      color="pink accent-4"
    >
      {{ $store.state.snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          
          
          text
          v-bind="attrs"
          @click="$store.commit('hideSnackbar')"
        >
          Kapat
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script>
export default {
data: () => ({
      
      
    }),
}
</script>

<style>

</style>