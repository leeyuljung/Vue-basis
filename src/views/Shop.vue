<template>
    <div class="top-bar">
        <router-link :to="{name: 'Cart'}">
            <span>購物車 {{ cartTotal }}</span>
        </router-link>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: mapGetters({
        foodList: 'getProducts',
        cartTotal: 'getShoppingCartTotal'
    }),
    // methods: mapActions([

    // ])
}
</script>

<style scoped>
    .top-bar{
        width: 1200px;
        margin: auto;
        text-align: right;
    }
</style>