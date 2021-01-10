<template>
 <products :products="products" :categories="categories"></products>
</template>

<script>
import Products from '../components/menu/products.vue'


export default {
  components:{
    Products
  },

    computed:{
      products(){
        return this.$store.getters.getProducts
      },
      categories(){
        return this.$store.getters.getCategories
      }
    }
    

}
</script>

<style>

</style>