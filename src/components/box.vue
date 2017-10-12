<template>
  <div class="box">
    <slot />
    <div class="cover">
      <btn class="btn" @click.native="copy">
        {{ text }}
      </btn>
    </div>
  </div>
</template>

<script>
import btn from './button'
import copy from '../utils/copy'

export default {
  name: 'box',
  props: {
    cssRaw: {
      type: String,
      default: ''
    }
  },
  components: {
    btn
  },
  data () {
    return {
      text: 'Copy CSS'
    }
  },
  methods: {
    copy () {
      copy(this.cssRaw)
      this.text = ' 👌 '

      setTimeout(() => {
        this.text = 'Copy CSS'
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
.btn {
  width: 180px;
  text-align: center;
}

.box {
  overflow: hidden;
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

