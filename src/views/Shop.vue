<template>
    <div class="wrap">
        <div class="top-bar">
            <router-link :to="{name: 'Cart'}" class="btn btn-sm cart-btn">
                購物車 <span>{{ cartTotal }}</span>
            </router-link>
        </div>
        <div class="product-list">
            <div 
                v-for="(item, index) in foodList" 
                :key="index" 
                class="product-item" 
                :class="{'grayscale': !item.inventory}"
            >
                <img :src="item.image" style="width:100%;border-radius:10px;">
                <p class="title">{{item.title}}</p>
                <p class="price">$ {{item.price}}</p>
                <button
                    class="btn btn-sm"
                    :class="{
                        'btn-info': item.inventory >= 2,
                        'btn-danger': item.inventory == 1,
                        'btn-secondary': !item.inventory
                    }"
                    :disabled="!item.inventory"
                    @click="addCart(item.title)"
                >
                    <span v-if="item.inventory >= 2">限量 {{item.inventory}} 份</span>
                    <span v-if="item.inventory == 1">最後 {{item.inventory}} 份</span>
                    <span v-if="!item.inventory">Sold out</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: mapGetters({
        foodList: 'getProducts',
        cartTotal: 'getShoppingCartTotal'
    }),
    methods: mapActions([
        'addCart'
    ])
}
</script>

<style>
    .wrap{
        width: 1000px;
        margin: auto;
    }
    .top-bar{
        text-align: right;
    }

    .top-bar a span{
        background: #faa;
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }

    .cart-btn{
        border: 1px solid #555 !important;
    }

    .price{
        color: #ea6d3f;
    }
</style>

<style scoped>
    .product-list{
        display: flex;
        flex-flow: row wrap;
    }

    .product-item{
        width: calc(100% / 4 - 2%);
        margin: 1%;
        box-sizing: border-box;
    }

    .title{
        margin: 10px 0;
    }

    

    .grayscale{
        filter: grayscale(1);
    }
</style>

