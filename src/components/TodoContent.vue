<template>
  <div>
    <ul v-if="items.length">
      <li v-for="item in items" :key="item.id">
        <label>
          <input type="checkbox" v-model="item.isCompleted">
          <span :class="{ strikethrough: item.isCompleted }">{{ item.description }}</span>
          <button @click="delTodoItem(item.id)">Del</button>
        </label>
      </li>
    </ul>
    <input type="text" v-model="todoItemNew" @keyup.enter="addTodoItem(todoItemNew)">
  </div>
</template>

<script>
export default {
  data () {
    return {
      todoItemNew: ''
    }
  },
  computed: {
    items () {
      return this.$store.getters.selectedTodoExistItems
    }
  },
  methods: {
    addTodoItem (description) {
      this.$store.dispatch('addTodoItem', description)
      this.todoItemNew = ''
    },
    delTodoItem (id) {
      this.$store.dispatch('delTodoItem', id)
    }
  }
}
</script>

<style>
.strikethrough {
  text-decoration: line-through;
}

li input{
  vertical-align:middle;
}
</style>
