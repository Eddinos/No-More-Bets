<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view @click.native="focus"></router-view>
    <IconButton v-bind:iconSrc="iconImage" v-bind:mutation="'toggleDrawer'" class="app__menuButton"/>
    <Drawer />
  </div>
</template>

<script>
import IconButton from '@/components/atoms/IconButton'
import Drawer from '@/components/organisms/Drawer'
import burgerSVG from '@/assets/burger.svg'

import { mapMutations, mapState } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      iconImage: burgerSVG
    }
  },
  methods: {
    focus () {
      if (this.drawer.open) {
        this.closeDrawer()
      }
    },
    ...mapMutations(['closeDrawer'])
  },
  computed: {
    ...mapState(['drawer'])
  },
  components: {
    IconButton, Drawer
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
    overflow: hidden;
    font-size: 1px;
    @media all and (max-width: 1600px) and (min-width: 981px) {
      font-size: 1.5px;
    }
    @media all and (max-width: 1600px) and (min-width: 981px) and (orientation: landscape) {
      font-size: 1px;
    }
    @media all and (max-width: 980px) {
      font-size: 2px;
    }
    @media all and (max-width: 980px) and (orientation: landscape) {
      font-size: 0.6px;
    }
  }
  .app {
    &__menuButton {
      top: 3%;
      left: 3%;
      height: 50em;
      width: 50em;
      position: absolute;
    }
  }
  body {
    margin: 0;
  }
</style>
