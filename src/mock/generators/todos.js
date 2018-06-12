import Mock from 'mockjs'

let Todos = []
const COUNT = [1, 2, 3, 4, 5]
for (let i = 1; i <= 3; i++) {
  Todos.push(Mock.mock({
    id: Mock.Random.guid(),
    title: Mock.Random.first(),
    isLocked: Mock.Random.boolean(),
    isDelete: false,
    items: COUNT.map(() => {
      return {
        id: Mock.Random.guid(),
        description: Mock.Random.paragraph(1, 3),
        isCompleted: Mock.Random.boolean(),
        isDelete: false
      }
    })
  }))
}

export {
  Todos
}
