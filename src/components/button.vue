<template>
  <div class="button" @click="anim">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'button',
  data () {
    return {
      el: Object
    }
  },
  methods: {
    anim () {
      this.el = this.$el
      if (this.el.className === 'button btn') {
        this.el.className += ' btnanim'
      }
      setTimeout(() => {
        this.el.className = 'button btn'
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
.button {
  cursor: pointer;
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  color: #42b983;
  background-color: #ffffffe7;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
}
.btnanim {
  animation: copy-anim 1000ms cubic-bezier(0, 0.19, 0, 0.99);
}

@keyframes copy-anim {
  0% {color: #42b983; background-color: #fff;}
  100% { background: #ffffffe7; color: #4fc08d; font-size: 20px; padding: 0.54em 2em;}
}
</style>

