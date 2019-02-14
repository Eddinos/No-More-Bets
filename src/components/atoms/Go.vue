<template>
  <div class="go" v-on:click="handleClick">
    <div v-if="choupi" class="far fa-heart go__heart" :class="{expand: clicked}"></div>
    <div v-else class="go__circle" v-bind:class="{ expand: clicked }"></div>
    <div class="go__text" v-html="result"></div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'Go',
  props: ['answer', 'choupi'],
  data () {
    return {
      text: this.choupi ? '' : 'Go !',
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
    line-height: 1em;
    border-radius: 50%;
    font-family: 'century gothic', Helvetica, Arial, sans-serif;
    font-weight: bold;
    font-size: 90em;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    position: relative;
    &__text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }
    &__circle {
      border: 0.5em solid;
      border-radius: 50%;
      width: 2.5em;
      height: 2.5em;
      margin: auto;
      z-index: 9;
    }
    &__heart {
      z-index: 9;
      font-size: 3.5em;
    }
  }

  .expand {
    animation: expand .5s forwards;
  }


</style>
