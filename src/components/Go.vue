<template>
  <div class="go" v-on:click="handleClick">
    <div class="go__circle" v-bind:class="{ expand: clicked }"></div>
    <div class="go__text">
      {{ text }}
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'go',
  data () {
    return {
      text: 'Go !',
      clicked: false
    }
  },
  methods: {
    handleClick () {
      this.clicked = true
    }
  }
}
</script>

<style lang="scss" scoped>
  .go {
    line-height: 100px;
    max-width: 148px;
    border-radius: 50%;
    margin: auto;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-weight: bold;
    font-size: 32px;
    position: relative;
    border-radius: 50%;
    cursor: pointer;
    &__text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }
    &__circle {
      border: 24px solid #72c6e0;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      margin: auto;
      z-index: 9;
      &:hover {

      }
    }
  }

  .expand {
    animation: expand 1s forwards;
  }

  @keyframes expand {
    from {
      opacity: 1
    }
    to {
      transform: scale(5);
      opacity: 0;
      visibility: hidden;
    }
  }
</style>
