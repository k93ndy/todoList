import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {
  Todos
} from './generators/todos'

export default {
  start () {
    let mock = new MockAdapter(axios)

    mock.onGet('/todo').reply(config => {
      let mockTodo = Todos.map(todo => {
        return {
          id: todo.id,
          title: todo.title,
          isLocked: todo.isLocked,
          isDelete: todo.isDelete,
          items: todo.items
        }
      }).filter(todo => todo.isDelete === false)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            todos: mockTodo
          }])
        }, 200)
      })
    })
  }
}
