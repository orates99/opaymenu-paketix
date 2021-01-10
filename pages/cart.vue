<template>
<carts :cart="cart"></carts>
        


</template>

<script>
import Carts from "@/components/cart/carts"

export default {
data(){
  return{
    cart:this.$store.getters.getCart
  }
},
components:{
    Carts

}
}
</script>

<style>

</style>