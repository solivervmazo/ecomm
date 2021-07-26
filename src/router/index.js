
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import vProduct from "../components/products/";
import vCart from "../components/cart/";

export const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/products",
            name: "products",
            component: vProduct,
        },
        {
            path: "/cart",
            name: "cart",
            component: vCart,
        },

    ]
});

export default router;