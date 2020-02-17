<template>
  <div id="app">
      <AddTodo/> 
      <FilterTodos />
      <Todos />
      <lista-cidades />
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import AddTodo from './components/AddTodo.vue'
import FilterTodos from './components/FilterTodos.vue'
import ListaCidades from './components/ListaCidades'
export default {
  name: 'app',
  components: {
   Todos,
   AddTodo,
   FilterTodos,
   'lista-cidades': ListaCidades
  }
}
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
