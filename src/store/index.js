import { createStore } from 'vuex'

export default createStore({
  state: {
    todoList:[{
        title: '吃饭',
        isDone: false,
      },
      {
        title: '睡觉',
        isDone: false,
      },
      {
        title: '打豆豆',
        isDone: false,
      },
    ]
  },
  mutations: {
    addTodo(state, payload) {
      state.todoList.push(payload);
    },
    deleteTodo(state, payload) {
      state.todoList.splice(payload, 1);
    },
    clearDoneList(state) {
      state.todoList = state.todoList.filter(item => !item.isDone);
    }
  }
})
