<template>
  <v-app id="inspire">
    <snackbar></snackbar>
    <v-navigation-drawer v-model="drawer" app :mobile-breakpoint="768">
      <v-img
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        height="170"
        class="pa-4 pt-7"
        src="home/bg-candy.jpg"
        ><v-avatar size="70" class="mb-2">
          <img dense src="https://cdn.vuetifyjs.com/images/john.jpg" alt="Orhan ATEŞ" />
        </v-avatar>
        <v-list-item-title class="title white--text"> Marcus Obrien </v-list-item-title>
        <v-list-item-subtitle class="white--text">Network Engineer</v-list-item-subtitle>
      </v-img>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="pink accent-3" dark>
      <template v-slot:img="{ props }">
        <v-img v-bind="props"></v-img>
      </template>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Paketix</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <nuxt></nuxt>
    </v-main>
    <v-bottom-navigation
      
      
      v-model="value"
      :background-color="color"
      dark
      app
      
    >
      <v-btn nuxt to="/">
        <span>Menü</span>

        <v-icon>mdi-silverware</v-icon>
      </v-btn>

      <!-- <v-btn >
        
          <v-icon>mdi-cart</v-icon>
       
      </v-btn> -->
      
        <v-btn class="cart-button" fab nuxt to="/cart" color="pink accent-3" depressed elevation="0"   absolute top >
      
        <v-badge v-if="$store.state.cart.length>0" offset-y="-30" offset-x="-10"   color="green" :content="$store.state.cart.length">
          
           </v-badge>
            <span>Sepetim</span>
           <v-icon >mdi-cart</v-icon>
        </v-btn>


   

      <v-btn>
        <span>Favorilerim</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import Snackbar from '@/components/Shared/Snackbar'
export default {
  components:{
    Snackbar
  },
  data() {
    return {
      drawer: null,
      value: null,
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
      ],
    };
  },
  computed: {
    color() {
      switch (this.value) {
        case 0:
          return "pink accent-3";
        case 1:
          return "pink accent-3";
        case 2:
          return "pink accent-3";
      }
    },
  },
};
</script>
<style>
.v-app-bar-title__content {
  width: 100px !important;
}
.cart-button {
  display:block!important;
 
  border-radius: 50%!important;
 
  
}
</style>
