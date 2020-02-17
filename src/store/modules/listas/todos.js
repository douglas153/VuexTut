import axios from "axios"


export default {
    namespaced: true,

    state: {
        todos: []
    },

    getters: {
        allTodos: (state) => state.todos
    },

    actions: {
        // getting the data
        async fetchTodos({ commit }) {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos'
            );
            commit("setTodos", response.data);
        },
        async addTodo({ commit }, title) {
            const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false }); // adicionar
            commit('newTodo', response.data)
        },
        async deleteTodo({ commit }, id) {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

            commit('removeTodo', id)
        },
     /*   async filterTodos({ commit }, e) {
            // get sele
            const limit = parseInt(e.target.options[e.target.selectedIndex].innerText);
            response = await axios.get('https://jsonplaceholder.typicode.com/todos'
            );
        }, */

    },
    mutations: {
        setTodos: (state, todos) => (state.todos = todos),

        newTodo: (state, todo) => state.todos.unshift(todo),

        removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id)
    }
}
