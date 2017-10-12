<template>
  <div id="app">
    <header>
      <div>
        <h1>My Animation List</h1>
      </div>
      <div>
        <a target="_blank" href="https://github.com/limichange/my-animation-list">
          <btn> Github </btn>
        </a>
        <a target="_blank" href="https://github.com/limichange/my-animation-list/issues/new">
          <btn> Need more? Tell me </btn>
        </a>
      </div>
    </header>
    <div class="list">
      <box :cssRaw="cssRaw.arrow"><squareBlock class="arrow"/></box>
      <box :cssRaw="cssRaw.point"><circleBlock class="point" /></box>
      <box :cssRaw="cssRaw.rotate"><squareBlock class="rotate" /></box>
      <box :cssRaw="cssRaw.rotateReverse"><squareBlock class="rotate-reverse" /></box>
      <box :cssRaw="cssRaw.move"><squareBlock class="move" /></box>
      <box :cssRaw="cssRaw.move2"><squareBlock class="move2" /></box>
      <box :cssRaw="cssRaw.scale"><circleBlock class="scale" /></box>
      <box :cssRaw="cssRaw.bubble"><circleBlock class="bubble" /></box>
      <box :cssRaw="cssRaw.shake"><squareBlock class="shake" /></box>
      <box :cssRaw="cssRaw.shake2"><squareBlock class="shake2" /></box>
      <box :cssRaw="cssRaw.rotateScale"><squareBlock class="rotate-scale" /></box>
      <box :cssRaw="cssRaw.fade"><circleBlock class="fade" /></box>
      <box :cssRaw="cssRaw.swing"><squareBlock class="swing" /></box>
      <box :cssRaw="cssRaw.fade2"><squareBlock class="fade2" /></box>
      <box :cssRaw="cssRaw.rotateMove"><squareBlock class="rotate-move" /></box>
      <box :cssRaw="cssRaw.spin"><squareBlock class="spin" /></box>
      <box :cssRaw="cssRaw.rotateCenter"><circleBlock class="rotate-center" /></box>
      <box :cssRaw="cssRaw.fold"><squareBlock class="fold" /></box>
      <box :cssRaw="cssRaw.move3"><squareBlock class="move3" /></box>
      <box :cssRaw="cssRaw.change"><squareBlock class="change" /></box>
      <box :cssRaw="cssRaw.change2"><squareBlock class="change2" /></box>
    </div>
  </div>
</template>

<script>
import squareBlock from './components/squareBlock'
import box from './components/box'
import circleBlock from './components/circleBlock'
import btn from './components/button'
import cssRaw from './styles/index'

export default {
  name: 'app',
  components: {
    squareBlock,
    box,
    circleBlock,
    btn
  },
  data () {
    return {
      cssRaw
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #34495e;

  h1 {
    font-weight: 300;
    font-size: 3em;
  }
}

a {
  text-decoration: none;
  color: inherit;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    display: block;
  }

  & > div {
    margin: 0 70px;
  }
}

.list {
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  display: flex;
}
</style>
