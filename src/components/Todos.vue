<template>
  <div class="todos">
    <ul v-for="(todo, i) in allTodos" :key="i">
      <li>{{todo.title}}</li>
      <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: mapGetters("todos", ["allTodos"]),
  methods: {
    ...mapActions("todos", ["fetchTodos", "deleteTodo", "addTodo"])
  },
  created() {
    this.fetchTodos();
  }
};
</script>
<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #070707;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  right: 10px;
  color: #000;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>