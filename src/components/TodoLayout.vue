<template>
  <div>
    <TodoMenu></TodoMenu>
    <TodoContent></TodoContent>
  </div>
</template>

<script>
import TodoMenu from './TodoMenu'
import TodoContent from './TodoContent'

export default {
  components: {
    TodoMenu,
    TodoContent
  }
}
</script>
