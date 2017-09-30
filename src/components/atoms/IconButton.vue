<template lang="html">
  <div class="IconButton" @click="handleClick">
    <img :src="iconSrc || defaultSrc" />
    <div class="IconButton__aura" :class="{expand: clicked}"></div>
  </div>
</template>

<script>
export default {
  name: 'IconButton',
  props: ['iconSrc'],
  data () {
    return {
      defaultSrc: null,
      clicked: false
    }
  },
  methods: {
    handleClick () {
      if (this.clicked) {
        this.clicked = false
      }
      this.clicked = true
      setTimeout(() => { this.clicked = false }, 500)
      this.$store.commit('increment')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../theme/variable.scss";

  .IconButton {
    cursor: pointer;
    position: relative;
    height: 32px;
    width: 32px;
    z-index: 10;
    &__aura {
      border-radius: 50%;
      background-color: #ccc;
      opacity: .8;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      display: none;
    }
  }

  .expand {
    display: block;
    animation: expand .5s forwards;
  }
</style>
