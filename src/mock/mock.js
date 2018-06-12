import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {
  Todos
} from './generators/todos'

export default {
  start () {
    let mock = new MockAdapter(axios)

    mock.onGet('/todo').reply(config => {
      let filteredTodos = Todos.filter(todo => todo.isDeleted === false)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            todos: filteredTodos
          }])
        }, 200)
      })
    })
  }
}
