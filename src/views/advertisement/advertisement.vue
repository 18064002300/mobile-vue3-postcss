<script setup>
import { useRouter } from 'vue-router'
import { onMounted, onUnmounted } from 'vue'

const router = useRouter()

let timer
onMounted(() => {
  timer = setTimeout(() => {
    router.push({ path: '/home' })
  }, 2000)
})
onUnmounted(() => {
  timer = null
})
</script>

<template>
  <div>
    <van-button plain type="primary">朴素按钮</van-button>
  </div>
</template>

<style scoped lang="less">

</style>
