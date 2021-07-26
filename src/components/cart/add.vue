<template>
    <v-btn v-on:click="add()">
        ADD TO CART
    </v-btn>
</template>

<script>
export default {
    props: {
        product : {
            type: [ Boolean , Object]
        }
    },
    methods: {
        add : function() {
            const { product, $store: { dispatch } } = this;
            if(!product) return;
            dispatch("cart/add" , {product})
        }
    }
}
</script>