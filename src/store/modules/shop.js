// mutations-type
const types = {
    ADD_CART: 'shop/ADD_CART',
    CANCEL_CART: 'shop/CANCEL_CART'
}

const state = {
    products: [
        {
            title: 'The Perfect Sandwich, A Real NYC Classic',
            image: 'http://www.w3schools.com/w3images/sandwich.jpg',
            inventory: 5,
            price: 155
        },
        {
            title: 'Let Me Tell You About This Steak',
            image: 'http://www.w3schools.com/w3images/steak.jpg',
            inventory: 1,
            price: 1380
        },
        {
            title: 'Cherries, interrupted, Fantastic favor',
            image: 'http://www.w3schools.com/w3images/cherries.jpg',
            inventory: 2,
            price: 499
        },
        {
            title: 'Once Again, Robust Wine and Vegetable Pasta',
            image: 'http://www.w3schools.com/w3images/wine.jpg',
            inventory: 0,
            price: 790
        }
    ],
    shoppingCart: []
}

const getters = {
    // get all products
    getProducts: state => state.products,
    // get shopping cart number
    getShoppingCartTotal: state => state.shoppingCart.length,
    // get shopping cart list
    getShoppingCartList: state => state.shoppingCart,
    // get shopping cart price total
    getCartPriceTotal: state => state.shoppingCart.reduce((a, b) => a + b.price, 0),
    // get recommended products
    getRecommendedProducts: state => {
        const inventoryList = state.products.filter(product => product.inventory > 0);
        const random = Math.round(Math.random() * (inventoryList.length - 1));
        return inventoryList[random];
    }
}

const actions = {
    addCart({commit}, title){
        commit(types.ADD_CART, title)
    },
    cancelCart({commit}, title){
        commit(types.CANCEL_CART, title)
    }
}

const mutations = {
    [types.ADD_CART](state, title){
        const item = state.products.find(item => item.title === title && item.inventory !== 0);
        item.inventory -= 1;
        state.shoppingCart.push({
            title: item.title,
            price: item.price
        })
    },
    [types.CANCEL_CART](state, title){
        const cartIndex = state.products.findIndex(item => item.title === title);
        state.shoppingCart.splice(cartIndex, 1);
        const item = state.products.find(item => item.title === title);
        item.inventory += 1;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}