<template>
  <div class="box">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'box'
}
</script>

<style lang="less" scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
}
</style>

