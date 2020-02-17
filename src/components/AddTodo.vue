<template>
    <div>
        <h3>AddTodo</h3>
        <div >
            <form @submit="onSubmit">
                <input type="text" name="" id="" placeholder="Add todo..." v-model="title">
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>

<script >
import { mapActions } from 'vuex'
export default {
    name: "AddTodo",
    data(){
        return{
            title: "", 
        }
    }, 
    methods: {
        ...mapActions("todos", ['addTodo']), // importei da store

        onSubmit(e){
            e.preventDefault();
            this.addTodo(this.title);
        }

    }
}
</script>

<style scoped>

</style>