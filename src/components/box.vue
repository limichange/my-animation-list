<template>
  <div class="box">
    <slot />
    <div class="cover"></div>
  </div>
</template>

<script>
export default {
  name: 'box'
}
</script>

<style lang="less" scoped>
.box {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;

  &:hover .cover {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .3);
  }
}
</style>

