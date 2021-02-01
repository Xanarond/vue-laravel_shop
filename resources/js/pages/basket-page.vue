<template>
    <div class='cart'>
        <div class="title">
            <h2>{{ title }}</h2>
            <hr>
        </div>
        <basket-card
            v-for="(item, index) in cart_data"
            :key="item.article"
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
            @increment="increment(index)"
            @decrement="decrement(index)"
        />
    </div>
</template>
<script>
import {mapActions} from "vuex";
import BasketCard from "../components/basketCard";


export default {
    name: "orderBasket",
    components: {BasketCard},
    props: {
        cart_data: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            title: 'Корзина'
        }
    },
    methods: {
        ...mapActions([
            'DELETE_FROM_BASKET',
            'INCREMENT_BASKET_ITEM',
            'DECREMENT_BASKET_ITEM'
        ]),
        increment(index) {
            this.INCREMENT_BASKET_ITEM(index)
        },
        decrement(index) {
            this.DECREMENT_BASKET_ITEM(index)
        },
        deleteFromCart(index) {
            this.DELETE_FROM_BASKET(index)
        }
    }
}
</script>

<style lang="scss" scoped>
hr {
    width: 85%;
    size: auto;
    background-color: #d2d2d2;
}

.title {
    text-align: center;
    color: #d2d2d2;
}
</style>
