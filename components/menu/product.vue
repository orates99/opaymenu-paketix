<template>
  <v-tab-item :value="`tab-${product.idcategory}`">
    <v-card class="ma-2">
      <add-cart
        v-if="addCartDialog"
        :product="product"
        @close="addCartDialog = false"
      ></add-cart>

      <v-card-title>
        {{ product.titleproduct }}
      </v-card-title>

      <v-card-subtitle>
        {{ product.description }}
      </v-card-subtitle>

      <v-card-actions class="mt-0">
        <v-btn class="mx-2" fab dark color="success" @click="AddToCart">
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
        <v-btn fab dark small color="red">
          <v-icon dark> mdi-heart </v-icon>
        </v-btn>

        <v-chip class="ml-auto ma-1 mb-0" color="pink" label text-color="white">
          <v-icon left> mdi-label </v-icon>
          {{ product.price }} TL
        </v-chip>
      </v-card-actions> </v-card
    ><!--  -->
  </v-tab-item>
</template>

<script>
import AddCart from "../dialogs/addCart.vue";
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  components: {
    AddCart,
  },
  data() {
    return {
      addCartDialog: false,
    };
  },
  methods: {
    AddToCart() {
      this.addCartDialog = !this.addCartDialog;
    },
  },
};
</script>

<style></style>
