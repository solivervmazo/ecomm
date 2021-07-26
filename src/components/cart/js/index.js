
/* eslint-disable no-unused-vars */
export const stores = {
    namespaced: true,
    state: {
        products: [],
    },
    mutations: {
        ADD_PRODUCT: function (state, { product = 0 } = {}) {
            if (!product) return;
            if (!product.id) return;
            if (state.products.find(item => item.id == product.id)) return;
            state.products.push(product)
        },
        REMOVE_PRODUCT: function (state, { id = false } = {}) {
            state.products.find((d, i) => {
                if (d.id === id) {
                    state.products.splice(i, 1);
                    return true;
                }
            });
            state.products.push({});
            state.products.pop();
        },
        POP_PRODUCT: function (state, { category = false } = {}) {
            state.products.find((d, i) => {
                if (d.category === category) {
                    
            console.log(category)
                    state.products.splice(i, 1);
                    return true;
                }
            });
            console.log(state.products)
            state.products.push({});
            state.products.pop();
        },
    },
    getters: {
        GET_PRODUCTS: state => {
            return state.products;
        },

    },
    actions: {
        add: function ({ commit }, { product = false } = {}) {
            if (!product) return;
            commit("ADD_PRODUCT", {
                product
            });
        },
        remove: function ({ commit }, { id = false } = {}) {
            if (!id) return;
            commit("REMOVE_PRODUCT", {
                id
            });
        },
        pop: function ({ commit }, { category = false } = {}) {
            if (!category) return;
            commit("POP_PRODUCT", {
                category: category.item
            });
        }
    }
};
