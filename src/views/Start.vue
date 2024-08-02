<template>
  <h1 @click="startJump">
    start
  </h1>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
    name: 'start',
    setup() {
      const router = useRouter();
      const startJump = () => {
        router.push({
          // path: '/home',
          name: 'Home',
          query: {
            name: 'sda',
            age: 18,
            info: JSON.stringify([12, 13, 14])
          },
          // params: {
          //   name: 'sda',
          //   age: 18,
          //   info: JSON.stringify([12, 13, 14])
          // },
        });
      }
      return {
        startJump,
      }
    }
})
</script>

