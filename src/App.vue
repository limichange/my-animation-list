<template>
  <div id="app">
    <div class="list">
      <box>
        <squareBlock class="arrow" />
      </box>
      <box>
        <squareBlock class="point" />
      </box>
      <box>
        <squareBlock class="rotate" />
      </box>
      <box>
        <squareBlock class="rotate-reverse" />
      </box>
      <box>
        <squareBlock class="move" />
      </box>
      <box>
        <squareBlock class="move2" />
      </box>
      <box>
        <circleBlock class="scale" />
      </box>
    </div>
  </div>
</template>

<script>
import squareBlock from './components/squareBlock'
import box from './components/box'
import circleBlock from './components/circleBlock'

export default {
  name: 'app',
  components: {
    squareBlock,
    box,
    circleBlock
  }
}
</script>

<style>
#app {
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #34495e;
}

.list {
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  display: flex;
}
</style>
