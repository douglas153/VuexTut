<template>
    <div >
        <h3 class="todos">Todos: {{allTodos}}</h3>

        <ul v-for="(todo, i) in allTodos" :key="i">
            <li>{{todo.title}}</li>
        </ul>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'; 

export default {
    data(){
        return{

        }
    },
    computed: mapGetters(['allTodos'])

    
}
</script>

<style scoped>

</style>