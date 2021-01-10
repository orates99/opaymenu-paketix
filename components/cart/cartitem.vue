<template>
  <div>
    <v-list-item>
      <template v-slot:default="{  }">
        

        <v-list-item-content>
          <v-row>
            <v-col cols="5" xs="5">
              <v-list-item-title>{{ cartproduct.titleproduct }}</v-list-item-title>
              <v-list-item-subtitle>
                <v-chip
                  min-width="30"
                  class="ml-auto ma-1 mb-0"
                  color="pink"
                  label
                  text-color="white"
                >
                  <v-icon left> mdi-label </v-icon>
                  {{ cartproduct.totalPrice }} TL
                </v-chip></v-list-item-subtitle
              >
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="7" xs="6">
               <v-text-field v-model="cartproduct.count" class="centered-input">
              <v-btn
                right
                color="red"
                class="ml-auto d-block"
                dark
                small
                slot="prepend"
                @click="cartproduct.count-=0.5"
              >
                <v-icon>mdi-minus</v-icon>
              </v-btn>
              <v-btn
                slot="append"
                color="green"
                class="mr-auto d-block"
                dark
                small
                @click="cartproduct.count+=0.5"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-text-field>
            </v-col>
          </v-row>
        </v-list-item-content>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
    
  props: {
    cartproduct: {
      type: Object,
      required: false,
    },
  },
 
};
</script>

<style scoped>
.centered-input >>> input {
  text-align: center!important;
}
</style>
