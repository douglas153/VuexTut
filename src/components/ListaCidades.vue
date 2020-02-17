<template>
    <div>
        <h2>Cidades</h2>
        <ul v-for="(cidade, i) in allZipCodes" :key="i">
            <li>{{cidade.nome.mesorregiao.UFnome}}</li>
        </ul>
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
        mapGetters('cep', ['allZipCodes']), 
    methods:{
      ...mapActions('cep', ['fetchZipCodeData'])
    },
    created(){
        this.fetchZipCodeData();
    }
}
</script>

<style scoped>

</style>