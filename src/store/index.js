import Vuex from 'vuex'
import Vue from 'vue'
import todos from './modules/listas/todos'
import cep from './modules/utils/cep'
import products from './modules/listas/products'

// Load Vuex
Vue.use(Vuex)

// create a store 

export default new Vuex.Store({
    modules: {
        todos: todos, 
        cep: cep, 
        products: products
    }
})