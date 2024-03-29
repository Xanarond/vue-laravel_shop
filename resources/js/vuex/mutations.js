export default {
    SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products
    },
    SET_BASKET: (state, product) => {
        if (state.basket.length) {
            let isProductExists = false;
            state.basket.map(function (item) {
                if (item.article === product.article) {
                    isProductExists = true;
                    item.quantity++
                }
            })
            if (!isProductExists) {
                state.basket.push(product)
            }
        } else {
            state.basket.push(product)
        }
    },
    REMOVE_FROM_BASKET: (state, index) => {
        state.basket.splice(index, 1)
    },
    INCREMENT: (state, index) => {
        state.basket[index].quantity++
    },
    DECREMENT: (state, index) => {
        if (state.basket[index].quantity > 1) {
            state.basket[index].quantity--
        }
    },
    SET_SEARCH_ITEM_TO_VUEX: (state, value) => {
        state.searchItem = value;
    },
}
