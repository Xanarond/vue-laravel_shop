<template>
    <div>
        <div class="title">
            <h2>{{ title }}</h2>
            <hr>
        </div>
        <push-notify :messages="messages"/>
        <div v-if="displayList === false" class="con">
            <md-button class="md-icon-button md-raised md-primary" @click.prevent="changeDisplay(true)">
                <md-icon>grid_off</md-icon>
            </md-button>
        </div>
        <div v-else class="con">
            <md-button class="md-icon-button md-raised md-primary" @click.prevent="changeDisplay(false)">
                <md-icon>grid_on</md-icon>
            </md-button>
        </div>
        <div class="container">
            <div class="menu-bar">
                <div class="selectors">
                    <category-select
                        :selected="selected"
                        :options="categories"
                        @select="sortByCategories"
                    />
                </div>
            </div>
            <div class="cards" :class="{'list-group-column': displayList}">
                <product-card v-for="product in filteredProducts" :key="product.id" :product_data="product"
                              :displayList="displayList" @addToBasket="addToBasket"/>
            </div>
        </div>
    </div>
</template>

<script>


import ProductCard from "../components/catalogCard";
import {mapActions, mapGetters} from 'vuex';
import CategorySelect from "../components/categorySelect";
import pushNotify from "../components/pushNotify";

export default {
    name: "mainPage",
    components: {CategorySelect, ProductCard, pushNotify},
    data() {
        return {
            title: 'Каталог',
            page: 'Main',
            products: '',
            sortedProducts: [],
            categories: [
                {name: 'Все', value: 'ALL'},
                {name: 'Смартфоны', value: 'smartphones'},
                {name: 'Планшеты', value: 'laptops'},
                {name: 'Приставки', value: 'consoles'},
                {name: 'Ноутбуки', value: 'notebooks'},
                {name: 'Фотоаппараты', value: 'cameras'},
            ],
            selected: 'Все',
            displayList: false,
            messages: []
        }
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_LOCAL_API',
            'ADD_TO_BASKET'
        ]),
        addToBasket(data) {
            this.ADD_TO_BASKET(data)
                .then(() => {
                    let timeStamp = Date.now().toLocaleString();
                    this.messages.unshift(
                        {name: 'Товар добавлен в корзину', icon: 'check_circle', id: timeStamp}
                    )
                })
        },
        sortProductsBySearchValue(value) {
            this.sortedProducts = [...this.PRODUCTS]
            this.sortedProducts = value ? this.sortedProducts.filter(function (item) {
                return item.name.toLowerCase().includes(value.toLowerCase())
            }) : this.PRODUCTS;
        },
        sortByCategories(category) {
            this.sortedProducts = [];
            let vm = this;
            this.PRODUCTS.map(function (item) {
                if (item.category === category.name) {
                    vm.sortedProducts.push(item);
                }
            })
            this.selected = category.name
        },
        changeDisplay(isList) {
            this.displayList = isList;
        }
    },
    watch: {
        SEARCH_ITEM() {
            this.sortProductsBySearchValue(this.SEARCH_ITEM);
        }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_LOCAL_API()
            .then((response) => {
                if (response.data) {
                    this.sortProductsBySearchValue(this.SEARCH_ITEM)
                }
            })
    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'SEARCH_ITEM'
        ]),
        filteredProducts() {
            return this.sortedProducts.length ? this.sortedProducts : this.PRODUCTS;
        },
    },

}
</script>

<style scoped>
hr {
    width: 85%;
    size: auto;
    background-color: #d2d2d2;
}

.title {
    text-align: center;
    color: #d2d2d2;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.con {
    display: flex;
    margin-bottom: 20px;
    justify-content: flex-end;
    margin-right: 5%;
}

.menu-bar {
    width: 20%;
    border-right: 1px solid #d2d2d2;
    padding-left: 5px;
}

.cards {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.list-group-column {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

.selectors {
    background-color: #d9d9d9;
    width: 80%;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 5%;
}

</style>
