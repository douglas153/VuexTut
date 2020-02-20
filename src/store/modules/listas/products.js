import axios from 'axios'

export default {
    namespaced: true, 

    state: {
        products: []
    },
    getters: {
        allProducts: (state) => state.products
    },
    actions: {
        //get the product list 
        async fetchProducts({ commit }){
            const response = await axios.get('http://localhost:3000/products')
            commit("setProducts", response.data);
        }
    }, 
    mutations: {
        setProducts: (state, allProducts) => (state.products = allProducts),
    }
}