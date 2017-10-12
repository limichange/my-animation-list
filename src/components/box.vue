<template>
  <div class="box">
    <slot />
    <div class="cover">
      <btn>Show CSS</btn>
      <btn>Copy CSS</btn>
    </div>
  </div>
</template>

<script>
import btn from './button'
export default {
  name: 'box',
  components: {
    btn
  }
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

  .cover {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, .5);

    & > div {
      margin: 3px;
    }
  }

  &:hover .cover {
    display: flex;
  }
}
</style>

