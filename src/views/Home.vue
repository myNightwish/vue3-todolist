<template>
  <div class="home">
    <navHeader @addTodo="addTodo" :todoList="todoList"></navHeader>
    <navMain :todoList = "todoList" @deleteItem="deleteTodo"></navMain>
    <navFooter :doneNums="doneNums" :allNums="todoList.length" @clearDone="clearDone"></navFooter>
  </div>
</template>

<script>
import {defineComponent, computed} from 'vue';
import { useStore } from 'vuex'

import navHeader from "@/components/navHeader/index.vue";
import navFooter from "@/components/navFooter/index.vue";
import navMain from "@/components/navMain/index.vue";

export default defineComponent({
    name: 'Home',
    components: {
      navHeader,
      navFooter,
      navMain
    },
    setup() {
      // 注意：query 传参可以用 path、name
      // 但 params 传参不会在地址栏显示，切刷新后不存在，且只能传 name，而不能传 path
      // const query = useRoute().query;
      // const params = useRoute().params;
      const store = useStore();
      const todoList = computed(() => {
        return store.state.todoList;
      });
      const doneNums = computed(() => {
        return store.state.todoList.filter(item => item.isDone)?.length;
      })
      const clearDone = () => {
        store.commit('clearDoneList');
      }
      const deleteTodo = (index) => {
        store.commit('deleteTodo', index);
      }

      const addTodo = (todo) => {
        store.commit('addTodo', todo);
      }

      return {
        doneNums, 
        todoList,
        clearDone,
        deleteTodo,
        addTodo
      }
    }
})
</script>

<style lang="scss" scoped>
.home {
  width: 400px;
  color: #2c3e50;
}
</style>
