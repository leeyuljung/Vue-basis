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
            title: 'Cherries, interrupted',
            image: 'http://www.w3schools.com/w3images/cherries.jpg',
            inventory: 2,
            price: 499
        },
        {
            title: 'Once Again, Robust Wine and Vegetable Pasta',
            image: 'http://www.w3schools.com/w3images/wine.jpg',
            inventory: 3,
            price: 790
        }
    ],
    shoppingCart: []
}

const getters = {
    // get all products
    getProducts: state => state.products,
    // get shopping cart number
    getShoppingCartTotal: state => state.shoppingCart.length
}

export default {
    state,
    getters,

}