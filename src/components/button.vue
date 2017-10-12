<template>
  <div class="button">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'button'
}
</script>

<style lang="less" scoped>
.button {
  cursor: pointer;
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  color: #42b983;
  background-color: #fff;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;

  &:active {
    background-color: #4fc08d;
    color: #fff;
  }
}
</style>

