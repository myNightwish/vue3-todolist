<template>
    <input
      type="text" 
      v-model="inputValue"
      placeholder="请输入内容"
      @keydown.enter="addTodo(inputValue)"
    >
</template>

<script>
import { defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'NavHeader',
  props: {
      todoList: {
        type: Array,
        default: () => []
      },
    },
  setup(props, ctx) {
    const inputValue = ref('');
    const addTodo= (addValue) => {
      if(!addValue) return;
      // 判断是否已经存在
      const canFill = !props.todoList.find(item => item.title === addValue);
      if(canFill) {
        ctx.emit("addTodo", {
          title: addValue,
          isCompleted: false
        })
        inputValue.value = '';
      } else {
        alert("已经存在了，请重新输入")
      }
    }; 
    return {
      inputValue,
      addTodo
    }
  }
})
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  height: 20px;
  border-radius: 10px;
  padding: 10px 20px;
  border: 2px solid #c6c4c4;
}
</style>