<template>
  <div class="footer-wrapper" @click="changeHello">
    <div>已完成{{ doneNums }} / 全部{{ allNums }}</div>
    <div v-if="doneNums" class="clear-btn" @click="clearDone">清空已完成</div>
  </div>
</template>

<script>
import { defineComponent} from 'vue'

export default defineComponent({
  name: 'NavFooter',
  props: {
    doneNums: {
      type: Number,
      default: 0
    },
    allNums: {
      type: Number,
      default: 0
    }
  },
  setup(_, ctx) {
    const clearDone = () => {
      ctx.emit('clearDone');
    }
    return {
      clearDone
    }
  },
})
</script>

<style lang="scss" scoped>
.footer-wrapper {
  display: flex;
  justify-content: space-between;
  font-weight: 500;

  .clear-btn {
    border-radius: 20px;
    background-color: #dddcdc;
    box-shadow: inset 0px 1px 2px #767474;
    width: 120px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;

    &:hover {
      background-color: #f0f0f0;
      cursor: pointer;
    }
  }
}
</style>