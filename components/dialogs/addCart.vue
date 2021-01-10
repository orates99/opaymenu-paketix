<template>
  <v-dialog value="true" max-width="500px" persistent>
    <v-card>
      <v-card-title>
        {{ product.titleproduct }}

        <v-chip
          min-width="100"
          class="ml-auto ma-1 mb-0"
          color="pink"
          label
          text-color="white"
        >
          <v-icon left> mdi-label </v-icon>
          {{ product.price * count }} TL
        </v-chip>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field label="Adet/Porsiyon" v-model="count" class="centered-input">
              <v-btn
                right
                color="red"
                class="ml-auto d-block"
                dark
                small
                slot="prepend"
                @click="count-=0.5"
              >
                <v-icon>mdi-minus</v-icon>
              </v-btn>
              <v-btn
                slot="append"
                color="green"
                class="mr-auto d-block"
                dark
                small
                @click="count+=0.5"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-text-field>
          </v-col>
          <v-divider></v-divider>
          <v-col cols="12" xs="12">
            <v-textarea rows="2" name="input-7-1" label="Notunuz" value=""></v-textarea>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" text @click="$emit('close')"> İptal </v-btn>
        <v-btn
          class="ma-2 white--text ml-auto d-block"
          :loading="loading4"
          :disabled="loading4"
          color="green"
          @click="addToCart"
        >
          Sepete Ekle
          <template v-slot:loader>
            <span class="custom-loader">
              <v-icon light>mdi-cached</v-icon>
            </span>
          </template>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
      loading4: false,
      loader: null,
    };
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  watch: {
    count() {
      if (this.count <= 1) {
        this.count = 1;
      }
    },
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 1000);

      this.loader = null;
    },
  },
  methods: {
    addToCart() {
      this.loader = "loading4";
      this.$store.dispatch("addToCart", { count: this.count, ...this.product });
      setTimeout(() => (this.$emit('close')), 1000);
      
    },
  },
};
</script>

<style scoped>
.centered-input >>> input {
  text-align: center;
}

.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
