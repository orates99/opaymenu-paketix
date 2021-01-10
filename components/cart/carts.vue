<template>
  <v-list
      subheader
      two-line
      flat
    >
      <v-subheader>Sepetim</v-subheader>

      <v-list-item-group
        
        multiple
      >
       <cart-item v-for="cartproduct in cart" :key="cartproduct.idproducts" :cartproduct="cartproduct"></cart-item>


      
      </v-list-item-group>
    </v-list>
 
</template>

<script>
import cartItem from "@/components/cart/cartitem"
export default {
components:{
    cartItem
},
props:{
    cart:{
        type:Array,
        required:false
    }
}
}
</script>

<style>

</style>