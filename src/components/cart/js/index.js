
/* eslint-disable no-unused-vars */
export const stores = {
    namespaced: true,
    state: {
        products: []
    },
    mutations: {},
    getters: {
        GET_PRODUCT: state => {
            return state.customers;
        },
        GET_PRODUCTS: state => ({ id = 0 } = {}) => {
            return Object.assign(
                {},
                state.products.find(product => product.id == id)
            );
        }

    },
    actions: {
    }
};
