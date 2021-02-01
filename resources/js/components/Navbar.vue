<template>
    <div class="page-container">
        <md-toolbar class="md-primary">
            <div class="md-toolbar-row">
                <div class="md-toolbar-section-start">
                    <router-link :to="{ name: 'home' }">
                        <h3 class="md-title">Vue Minimarket</h3>
                    </router-link>
                </div>
                <md-autocomplete
                    class="search"
                    v-model="searchItem"
                    :md-options="product"
                    md-layout="box">
                    <label>Наименование...</label>
                </md-autocomplete>
                <md-button class="md-icon-button" @click="search(searchItem)">
                    <md-icon>search</md-icon>
                </md-button>
                <div class="md-toolbar-section-end">
                    <div class="catalog-qtq">
                        <span>Товаров в корзине: {{BASKET.length}}</span>
                    </div>
                    <router-link :to="{ name: 'basket', params: {cart_data: BASKET} }">
                        <md-button class="md-icon-button">
                            <md-icon>shopping_basket</md-icon>
                        </md-button>
                    </router-link>
                </div>
            </div>
        </md-toolbar>
    </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "Navbar",
    data() {
        return {
            searchItem: '',
            product: [],
        }
    },
    computed: {
        ...mapGetters([
            'SEARCH_ITEM',
            'PRODUCTS',
            'BASKET'
        ])
    },
    methods: {
        ...mapActions([
            'GET_SEARCH_ITEM_TO_VUEX'
        ]),
        search(value) {
            this.GET_SEARCH_ITEM_TO_VUEX(value);
        },
        clearSearchField() {
            this.searchValue = ''
            this.GET_SEARCH_ITEM_TO_VUEX();
        }
    }
};
</script>

<style lang="scss" scoped>
.md-toolbar {
    background: linear-gradient(135deg, #0B5289 0%, #094370 100%);
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.241641);
    color: #ffffff;
}

.md-field {
    width: 20%;
}
</style>
