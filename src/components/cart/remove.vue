<template>
    <v-btn v-on:click="remove()">
        REMOVE TO CART
    </v-btn>
</template>

<script>
export default {
    props: {
        id : {
            type: [ Boolean , Number, String]
        }
    },
    methods: {
        remove : function() {
            const { id, $store: { dispatch } } = this;
            if(!id) return;
            dispatch("cart/remove" , {id})
        }
    }
}
</script>