<template>
  <div class="m-full-screen-container">
    <div ref="domRef" class="inner">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onBeforeUnmount, onMounted, ref } from 'vue'
  const mounted = ref<boolean>(true)
  const domRef = ref<HTMLElement>()
  const autoResizeScreen = () => {
    // const { width, height } = window.screen
    const { clientWidth, clientHeight } = document.body
    var width = 1920,
      height = 1080
    let left
    let top
    let scale
    // 获取比例  可视化区域的宽高比与 屏幕的宽高比  来进行对应屏幕的缩放
    if (clientWidth / clientHeight > width / height) {
      scale = (clientHeight / height) - 0.1
      top = 100
      left = ((clientWidth - width * scale) / 2) + 100
    } else {
      scale = (clientWidth / width) - 0.1
      left = 0
      top = (clientHeight - height * scale) / 2
    }
    // 防止组件销毁后还执行设置状态s
    if (mounted.value) {
      Object.assign(domRef.value.style, {
        transform: `scale(${scale})`,
        left: `${left}px`,
        top: `${top}px`,
      })
    }
  }
  onMounted(() => {
    mounted.value = true
    autoResizeScreen()
    window.addEventListener('resize', autoResizeScreen)
  })
  onBeforeUnmount(() => {
    mounted.value = false
    window.removeEventListener('resize', autoResizeScreen)
  })
</script>

<style lang="scss" scoped>
  .m-full-screen-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #030409;
    // width: 100vw;
    // height: 100vh;
    .inner {
      overflow: hidden;
      transform-origin: left top;
      z-index: 999;
      position: fixed;
      transition: all 0.3s;
    }
  }
</style>
