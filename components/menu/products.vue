<template>
  <v-card flat>
    <v-tabs
    class="fixed-tabs-bar v-tabs__bar"
      v-model="model"
      :sticky="sticky"
      show-arrows=""
      color="pink accent-4"
    >
      <v-tab
        v-for="cat in categories"
        koli
        :key="cat.idcategories"
        :href="`#tab-${cat.idcategories}`"
      >
        {{ cat.titlecategory }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="model">
      <product
        v-for="product in products"
        :key="product.idproducts"
        :product="product"
      ></product>
    </v-tabs-items>
  </v-card>
</template>

<script>
import Product from "@/components/menu/product";
export default {
  components: {
    Product,
  },
  props: {
    products: {
      type: Array,
      required: false,
    },
    categories: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      model: "tab-1",
      sticky: true,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>

<style>
.fixed-tabs-bar .v-tabs__bar {
    position: -webkit-sticky;
    position: sticky;
  top: 4rem;
  z-index: 2;
}
</style>
