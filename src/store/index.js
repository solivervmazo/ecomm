
/* eslint-disable no-unused-vars */
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

import { stores as products } from "../components/products/js/";
import { stores as cart } from "../components/cart/js/";

const cartData = createPersistedState({
    paths: ['cart.products']
  })

export default new Vuex.Store({
    namespaced: true,
    state: {
    },
    modules: {
        products,
        cart
    },
    plugins: [cartData]
});

