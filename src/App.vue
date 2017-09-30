<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
    <IconButton v-bind:iconSrc="iconImage" class="app__menuButton"/>
  </div>
</template>

<script>
import IconButton from '@/components/atoms/IconButton'
import burgerSVG from '@/assets/burger.svg'

export default {
  name: 'app',
  data () {
    return {
      iconImage: burgerSVG
    }
  },
  components: {
    IconButton
  }
}
</script>

<style lang="scss">
@import 'theme/variable.scss';
  #app {
    width: 100%;
    height: 100vh;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .app {
    &__menuButton {
      top: 3%;
      left: 3%;
      height: 40px;
      width: 40px;
    }
  }
  body {
    margin: 0;
  }
</style>
