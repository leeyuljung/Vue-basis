<template>
    <div class="wrap">
        <div class="top-bar">
            <router-link :to="{name: 'Cart'}" class="btn btn-sm cart-btn">
                購物車 <span>{{ cartTotal }}</span>
            </router-link>
        </div>

        <!-- recommended products -->
        <div class="recommend" v-if="recommend !== undefined">
            <div class="row">
                <div class="col-md-3">
                    <img :src="recommend.image" style="width:100%;">
                </div>
                <div class="col-md-9">
                    <h3>{{ recommend.title }}</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, delectus reiciendis necessitatibus ab quaerat quo. Aperiam est molestias velit cum soluta assumenda quos explicabo similique tempora. Eius vero eum voluptatibus
                    </p>
                    <p class="price">$ {{ recommend.price }}</p>
                    <button 
                        class="btn btn-danger"
                        @click="addCart(recommend.title)"
                    >
                        加購
                    </button>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: mapGetters({
        cartTotal: 'getShoppingCartTotal',
        cartList: 'getShoppingCartList',
        priceTotal: 'getCartPriceTotal',
        recommend: 'getRecommendedProducts'
    }),
    methods: mapActions([
        'addCart',
        'cancelCart'
    ])
}
</script>

<style scoped>
    .recommend{
        text-align: left;
    }
</style>