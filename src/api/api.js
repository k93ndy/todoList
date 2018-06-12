import axios from 'axios'

export const getTodos = params => {
  return axios.get(`/todo`, {
    params: params
  })
}
