<template>
  <div class="button">
  </div>
</template>

<script>
export default {
  name: 'button'
}
</script>

<style lang="less" scoped>
.button {
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  color: #fff;
  background-color: #4fc08d;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
}

.button.white {
  background-color: #fff;
  color: #42b983;
}
</style>

