<template>
  <div v-for="(item, index) in todoList" :key="index" class="item">
    <input type="checkbox" v-model="item.isDone">
    <span class="title">{{ item.title }}</span>
    <div class="btn" @click="handleDelete(index)">删除</div>
  </div>
</template>
  
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'NavMain',
    props: {
      todoList: {
        type: Array,
        default: () => []
      },
    },
    emits: ['deleteItem'],
    setup(_, ctx) {
      const handleDelete = (index) => {
        ctx.emit('deleteItem', index);
      }
      return {
        handleDelete
      }
    }
})
</script>

<style lang="scss" scoped>
.item {
  height: 35px;
  line-height: 35px;
  width: 200px;
  position: relative;

  .title {
    color: #201a1a;
  }

  .btn {
    position: absolute;
    right: 0;
    top: 0;
    display: inline-block;
    border-radius: 20px;
    background-color: #e7e7e7;
    box-shadow: inset 0px 1px 2px #4c4b4b;
    width: 60px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 12px;
    opacity: 0;
  }
  &:hover {
      background-color: rgb(251, 250, 248);
      border-radius: 10px;
      cursor: pointer;

      .btn {
        opacity: 1;
      }
  }
}
</style>