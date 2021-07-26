<template>
  <v-row>
    <v-col cols="12"> <h1>products</h1></v-col>
    <v-col cols="12">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Category</th>
              <th class="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in categories" :key="item">
              <td>{{ item }}</td>
              <td><v-btn v-on:click="remove({ item })">REMOVE</v-btn></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
//import vRemove from "../cart/remove.vue";
export default {
  components: {
    // vRemove
  },
  data() {
    return {
      products: this.$store.getters["cart/GET_PRODUCTS"],
      categories: [],
    };
  },
  methods: {
    remove: function (item) {
      const {
        $store: { dispatch },
      } = this;
      dispatch("cart/pop", { category: item });
    },
    recount: function () {
      this.categories = [];
      this.products.forEach((item) => {
        if (!this.categories.find((cat) => cat === item.category)) {
          this.categories.push(item.category);
        }
      });
    },
  },
  mounted() {
    this.recount()
  },
  computed: {
    _products: function () {
      return this.$store.getters["cart/GET_PRODUCTS"];
    },
  },
  watch: {
    _products: {
      handler: function (newValue) {
        console.log("changed")
        this.$nextTick(() => {
          this.products = newValue;
        });
        this.recount()
      },
      deep: true,
    },
  },
};
</script>