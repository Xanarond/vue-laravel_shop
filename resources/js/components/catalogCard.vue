<template>
    <md-card v-if="displayList === false" class="md-card-grid">
        <md-image class="md-card__image">
            <img :src="'../../images/' + product_data.image" alt="">
        </md-image>
        <md-card-header>
            <div class="md-title">{{ product_data.name }}</div>
        </md-card-header>
        <md-card-content v-if="displayList === true">
            Артикул: {{ product_data.article }}
        </md-card-content>
        <md-card-content v-if="displayList === true">
            Описание товара: {{ product_data.description }}
        </md-card-content>
        <md-card-content>
            Цена: {{ product_data.price }} Р.
        </md-card-content>
        <md-card-actions>
            <md-button @click="addToBasket" class="md-raised">Добавить в корзину</md-button>
        </md-card-actions>
    </md-card>
    <md-card v-else class="md-card-col">
        <md-image class="md-card-col__image">
            <img :src="'../../images/' + product_data.image" alt="">
        </md-image>
        <md-card-header>
            <div class="md-title">{{ product_data.name }}</div>
        </md-card-header>
        <md-card-content v-if="displayList === true">
            Артикул: {{ product_data.article }}
        </md-card-content>
        <md-card-content v-if="displayList === true">
            Описание товара: {{ product_data.description }}
        </md-card-content>
        <md-card-content>
            Цена: {{ product_data.price }} Р.
        </md-card-content>
        <md-card-actions>
            <md-button @click="addToBasket" class="md-raised">Добавить в корзину</md-button>
        </md-card-actions>
    </md-card>
</template>


<script>

import {mapGetters} from "vuex";

export default {
    name: "productCard",
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        },
        displayList: {
            type: Boolean,
        }
    },
    data() {
        return {}
    },
    methods: {
        addToBasket() {
            this.$emit('addToBasket', this.product_data)
        },
    },
    mounted() {
        this.$set(this.product_data, 'quantity', 1)
    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
        ]),
    }
}
</script>

<style lang="scss" scoped>
.md-card {
    color: #eaeaea !important;
    margin: 20px 20px;
    background: linear-gradient(38.9deg, #00A4FA -40.63%, #006BF2 107.65%);
    border: 1px solid #26A6EE;
    box-sizing: border-box;
    box-shadow: -6px -6px 10px rgba(56, 62, 70, 0.749863), 6px 6px 10px rgba(22, 22, 23, 0.794635);
    border-radius: 22px;
    padding: 8px;
    flex-basis: 20%;

    &__image {
        width: 150px;
        height: 170px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 5px;
    }

    &__image-column {
        width: 150px;
        height: 170px;
        display: block;
        margin-bottom: 5px;
    }
}

.md-card-grid {
    &:hover {
        transition: 1.2s;
        transform: scale(1.1);
    }
}

.md-card-col {
    &__image {
        width: 150px;
        height: 170px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 5px;

        &:hover {
            transition: 1.2s;
            transform: scale(2.2);
        }
    }
}

.md-card-actions {
    justify-content: center !important;
}

.md-title {
    margin-bottom: 5px;
}
</style>
