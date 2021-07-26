<template>
  <v-row>
    <v-col cols="12"> <h1>products</h1></v-col>
    <v-col cols="12">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Product Name</th>
              <th class="text-left">Price</th>
              <th class="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
              <td>
                <v-add v-if="check({ id: item.id})" :product="item" :key="item.id" />
                <v-remove v-else :id="item.id" :key="item.id" />
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
import vAdd from "../cart/add.vue";
import vRemove from "../cart/remove.vue";
export default {
    components:{
        vAdd, vRemove
    },
  data() {
    return {
      products: this.$store.getters["products/GET_PRODUCTS"],
      cart: this.$store.getters["cart/GET_PRODUCTS"],
    };
  },
  methods: {
      check: function( { id = 0 } = {}){
          if(!id) return;
          const { cart } = this;
          return !cart.find(item => item.id == id)
      }
  },
  computed: {
    _products: function () {
      return this.$store.getters["products/GET_PRODUCTS"];
    },
    _cart: function () {
      return this.$store.getters["cart/GET_PRODUCTS"];
    },
  },
  watch: {
    _products: {
      handler: function (newValue) {
        this.$nextTick(() => {
          this.products = newValue;
        });
      },
      deep: true,
    },
    _cart: {
      handler: function (newValue) {
        this.$nextTick(() => {
          this.cart = newValue;
        });
      },
      deep: true,
    },
  },
};
</script>