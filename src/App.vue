<template>
  <div id="app">
    <header>
      <div>
        <h1>Animation List</h1>
      </div>
      <div>
        <btn>
          <a target="_blank" href="https://github.com/limichange/my-animation-website">Github</a>
        </btn>
        <btn>
          <a target="_blank" href="https://github.com/limichange/my-animation-website/issues/new">Need more? Tell me</a>
        </btn>
      </div>
    </header>
    <div class="list">
      <box><squareBlock class="arrow" /></box>
      <box><circleBlock class="point" /></box>
      <box><squareBlock class="rotate" /></box>
      <box><squareBlock class="rotate-reverse" /></box>
      <box><squareBlock class="move" /></box>
      <box><squareBlock class="move2" /></box>
      <box><circleBlock class="scale" /></box>
      <box><circleBlock class="bubble" /></box>
      <box><squareBlock class="shake" /></box>
      <box><squareBlock class="shake2" /></box>
      <box><squareBlock class="rotate-scale" /></box>
      <box><circleBlock class="fade" /></box>
      <box><squareBlock class="swing" /></box>
      <box><squareBlock class="fade2" /></box>
      <box><squareBlock class="rotate-move" /></box>
      <box><squareBlock class="spin" /></box>
      <box><circleBlock class="rotate-center" /></box>
      <box><squareBlock class="fold" /></box>
      <box><squareBlock class="move3" /></box>
      <box><squareBlock class="change" /></box>
    </div>
  </div>
</template>

<script>
import squareBlock from './components/squareBlock'
import box from './components/box'
import circleBlock from './components/circleBlock'
import btn from './components/button'

export default {
  name: 'app',
  components: {
    squareBlock,
    box,
    circleBlock,
    btn
  }
}
</script>

<style lang="less">
#app {
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #34495e;
}

a {
  text-decoration: none;
  color: inherit;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    display: block;
  }

  & > div {
    margin: 0 70px;
  }
}

h1 {
  font-weight: 300;
  font-size: 3em;
}

.list {
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  display: flex;
}
</style>
