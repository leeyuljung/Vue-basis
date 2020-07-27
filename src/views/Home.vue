<template>
  <div class="home">
    <!-- 3. component 放置 -->
    <Hello />
  </div>
</template>

<script>
// 1. component 引入
import Hello from '@/components/Hello.vue'

export default {
  name: 'Home',
  // 2. component 宣告
  components: {
    Hello
  }
}
</script>
