<template>
  <div id="app">
    <div class="list">
      <box>
        <square class="arrow" />
      </box>
      <box>
        <square class="point" />
      </box>
      <box>
        <square class="rotate" />
      </box>
      <box>
        <square class="move" />
      </box>
      <box>
        <square class="move2" />
      </box>
      <box>
        <square class="scale" />
      </box>
    </div>
  </div>
</template>

<script>
import square from './components/square'
import box from './components/box'

export default {
  name: 'app',
  components: {
    square,
    box
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
  display: flex;
}
</style>
