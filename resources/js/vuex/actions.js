import axios from "axios";

export default {
    GET_SEARCH_ITEM_TO_VUEX ({commit}, value) {
        commit('SET_SEARCH_ITEM_TO_VUEX', value)
    },
    GET_PRODUCTS_FROM_LOCAL_API({commit}) {
        return axios.get('http://localhost:3000/products')
            .then(function (products) {
                commit('SET_PRODUCTS_TO_STATE', products.data)
                return products
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    ADD_TO_BASKET({commit}, product) {
        commit('SET_BASKET', product);
    },
    DELETE_FROM_BASKET({commit}, index) {
        commit('REMOVE_FROM_BASKET', index)
    },
    INCREMENT_BASKET_ITEM({commit}, index) {
        commit('INCREMENT', index)
    },
    DECREMENT_BASKET_ITEM({commit}, index) {
        commit('DECREMENT', index)
    },
}
