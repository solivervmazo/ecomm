<template>
  <v-row>
    <v-col cols="12">
      {{ product.name }}
    </v-col>
    <v-col cols="12">
      {{ product.price }}
    </v-col>
    <v-col cols="12">
      {{ product.category }}
    </v-col>
    <v-col cols="12">
      {{ product.description }}
    </v-col>
    <v-col cols="12">
      <v-add
        v-if="check({ id: product.id })"
        :product="product"
        :key="product.id"
      />
      <v-remove v-else :id="product.id" :key="product.id" />
    </v-col>
  </v-row>
</template>

<script>
import vAdd from "../cart/add.vue";
import vRemove from "../cart/remove.vue";
export default {
  components: {
    vAdd,
    vRemove,
  },
  data() {
    return {
      product: {},
      cart: this.$store.getters["cart/GET_PRODUCTS"],
    };
  },
  methods: {
    get: function () {
      this.product = this.$store.getters["products/GET_PRODUCT"]({
        id: this.$route.params.id,
      });
    },

    check: function ({ id = 0 } = {}) {
      if (!id) return;
      const { cart } = this;
      return !cart.find((item) => item.id == id);
    },
  },
  mounted() {
    this.get();
  },
};
</script>