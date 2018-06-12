<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <strong v-if="todo.id === todoSelected" @click="clickTodo(todo.id)">{{ todo.title }}</strong>
        <span v-else @click="clickTodo(todo.id)">{{ todo.title }}</span>
        <button v-if="todo.isLocked" @click="toggleTodoLock(todo.id)">Unlock</button>
        <button v-else @click="toggleTodoLock(todo.id)">Lock</button>
        <button @click="delTodo(todo.id)">Del</button>
      </li>
    </ul>
    <input type="text" v-model="todoNew" @keyup.enter="addTodo(todoNew)">
  </div>
</template>

<script>
export default {
  data () {
    return {
      todoNew: ''
    }
  },
  computed: {
    todos () {
      return this.$store.getters.existTodos
    },
    todoSelected () {
      return this.$store.state.todoSelected
    }
  },
  beforeCreate () {
    this.$store.dispatch('getTodos')
  },
  methods: {
    addTodo (title) {
      this.$store.dispatch('addTodo', title)
      this.todoNew = ''
    },
    clickTodo (id) {
      this.$store.dispatch('clickTodo', id)
    },
    delTodo (id) {
      this.$store.dispatch('delTodo', id)
    },
    toggleTodoLock (id) {
      this.$store.dispatch('toggleTodoLock', id)
    }
  }
}
</script>
