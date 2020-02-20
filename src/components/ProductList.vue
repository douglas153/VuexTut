<template>
    <div>
        <h3>Products</h3>
        <div>
            <ul v-for="(product, i) in allProducts" :key="i">
                <li>{{product.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
export default {
    data(){
        return{

        }
    }, 
    computed: 
            mapGetters('products', ['allProducts']),
    methods: {
        ...mapActions('products', ['fetchProducts'])
    },
    created(){
        this.fetchProducts();
    }
}
</script>

<style scoped>

</style>