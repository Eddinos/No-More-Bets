<template>
  <div class="go" v-on:click="handleClick">
    <div class="go__circle" v-bind:class="{ expand: clicked }"></div>
    <div class="go__text">
      {{ result }}
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'Go',
  props: ['answer'],
  data () {
    return {
      text: 'Go !',
      clicked: false
    }
  },
  methods: {
    handleClick () {
      this.clicked = !this.clicked
    }
  },
  computed: {
    result () {
      if (this.clicked) {
        return this.answer
      } else {
        return this.text
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../theme/variable.scss";
  .go {
    line-height: 100px;
    max-width: 350px;
    border-radius: 50%;
    font-family: 'century gothic', Helvetica, Arial, sans-serif;
    font-weight: bold;
    font-size: 100px;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    &__text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      color: $lightBlue;
    }
    &__circle {
      border: 48px solid $lightBlue;
      border-radius: 50%;
      width: 250px;
      height: 250px;
      margin: auto;
      z-index: 9;
    }
  }

  .expand {
    animation: expand .5s forwards;
  }

  
</style>
