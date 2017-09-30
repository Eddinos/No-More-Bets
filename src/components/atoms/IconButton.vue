<template lang="html">
  <div class="iconButton" @click="handleClick">
    <img :src="iconSrc || defaultSrc" class="iconButton__image"/>
    <div class="iconButton__aura" :class="{expand: clicked}"></div>
  </div>
</template>

<script>
export default {
  name: 'IconButton',
  props: ['iconSrc', 'mutation'],
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
      this.$store.commit(this.mutation)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../theme/variable.scss";

  .iconButton {
    cursor: pointer;
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
    &__image {
      height: 100%;
      width: 100%;
    }
  }

  .expand {
    display: block;
    animation: expand .5s forwards;
  }
</style>
