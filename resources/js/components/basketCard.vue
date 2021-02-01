<template>
    <div class='cart-item'>
        <img class="cart-item__image" :src=" '../../images/'  + cart_item_data.image " alt="">
        <div class="cart-item__info">
            <p>{{ cart_item_data.name }}</p>
            <p>Цена: {{ cart_item_data.price }} Р.</p>
            <p>Артикул: {{ cart_item_data.article }}</p>
        </div>
        <div class="cart-item__quantity">
            <md-button class="md-fab md-mini md-primary" :md-ripple="true" @click="incrementItem">
                <md-icon>add</md-icon>
            </md-button>
            <div style="font-size: 15px"><p>Количество:</p>{{ cart_item_data.quantity }}</div>
            <md-button class="md-fab md-mini" @click="decrementItem">
                <md-icon>remove</md-icon>
            </md-button>
        </div>
        <md-button class="md-fab md-mini md-primary delete" @click="deleteFromCart">
            <md-icon>delete_outline</md-icon>
        </md-button>
    </div>
</template>

<script>
export default {
    name: "basketCard",
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {}
    },
    methods: {
        decrementItem() {
            this.$emit('decrement')
        },
        incrementItem() {
            this.$emit('increment')
        },
        deleteFromCart() {
            this.$emit('deleteFromCart')
        },
        mounted() {
            this.$set(this.cart_item_data, 'quantity', 1)
        }
    },
}
</script>

<style lang="scss" scoped>
.cart-item {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(38.9deg, #00A4FA -40.63%, #006BF2 107.65%);
    border: 1px solid #26A6EE;
    box-sizing: border-box;
    box-shadow: -6px -6px 10px rgba(56, 62, 70, 0.749863), 6px 6px 10px rgba(22, 22, 23, 0.794635);
    border-radius: 22px;
    margin: 5%;
    color: #eaeaea !important;

    &__quantity{
        display: flex;
        flex-direction: row;
        text-align: center;
    }

    &__image {
        max-width: 130px;
        margin-left: 5%;
        padding-top: 3px;
        padding-bottom: 3px;
    }
}

.delete {
    display: flex;
    justify-content: flex-end;
    margin-right: 5%;
}
</style>
