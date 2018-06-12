import Vue from 'vue'
import Vuex from 'vuex'
import uuidV4 from 'uuid/v4'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: 'todo1',
        isLocked: false,
        isDeleted: false,
        items: [
          {
            id: 1,
            description: 'todo1item1',
            isCompleted: false,
            isDeleted: false
          },
          {
            id: 2,
            description: 'todo1item2',
            isCompleted: false,
            isDeleted: false
          },
          {
            id: 3,
            description: 'todo1item3',
            isCompleted: false,
            isDeleted: false
          }
        ]
      },
      {
        id: 2,
        title: 'todo2',
        isLocked: false,
        isDeleted: false,
        items: [
          {
            id: 4,
            description: 'todo2item1',
            isCompleted: false,
            isDeleted: false
          },
          {
            id: 5,
            description: 'todo2item2',
            isCompleted: false,
            isDeleted: false
          },
          {
            id: 6,
            description: 'todo2item3',
            isCompleted: false,
            isDeleted: false
          }
        ]
      }
    ],
    todoSelected: undefined
  },
  getters: {
    existTodos: (state) => state.todos.filter((todo) => todo.isDeleted === false),
    selectedTodo: (state) => state.todos.find((todo) => todo.id === state.todoSelected),
    selectedTodoExistItems (state, getters) {
      if (getters.selectedTodo === undefined) {
        return []
      } else {
        return getters.selectedTodo.items.filter((item) => item.isDeleted === false)
      }
    }
  },
  actions: {
    getTodos (context) {
      axios.get(`/todo`).then((res) => {
        console.log(res.data.todos)
        context.commit('getTodos', res.data.todos)
      })
    },
    addTodo (context, title) {
      context.commit('addTodo', title)
    },
    delTodo (context, id) {
      context.commit('delTodo', id)
    },
    clickTodo (context, id) {
      context.commit('clickTodo', id)
    },
    toggleTodoLock (context, id) {
      context.commit('toggleTodoLock', id)
    },
    addTodoItem (context, description) {
      context.commit('addTodoItem', description)
    },
    delTodoItem (context, id) {
      context.commit('delTodoItem', id)
    }
  },
  mutations: {
    getTodos (state, data) {
      state.todos = data
    },
    addTodo (state, title) {
      let newId = uuidV4()
      state.todos.push({
        id: newId,
        title: title,
        isLocked: false,
        isDeleted: false,
        items: []
      })
      state.todoSelected = newId
    },
    delTodo (state, id) {
      let index = state.todos.findIndex(todo => todo.id === id)
      state.todos[index].isDeleted = true
      if (state.todos[index].id === state.todoSelected) {
        state.todoSelected = undefined
      }
    },
    clickTodo (state, id) {
      state.todoSelected = id
    },
    toggleTodoLock (state, id) {
      state.todos.find((todo) => id === todo.id).isLocked = !state.todos.find((todo) => id === todo.id).isLocked
    },
    addTodoItem (state, description) {
      state.todos.find((todo) => state.todoSelected === todo.id).items.push({
        id: uuidV4(),
        description: description,
        isCompleted: false,
        isDeleted: false
      })
    },
    delTodoItem (state, id) {
      state.todos.find((todo) => state.todoSelected === todo.id).items.find((item) => item.id === id).isDeleted = true
    }
  }
})
