<template lang="html">
  <div class="counter">
    <input type="text" name="optionsNb" v-model="count" class="counter__input" value="" placeholder="wesh">
    <div class="counter__buttons">
      <div class="counter__button counter__button--up"
      @mouseover="mouseOver" @mouseleave="mouseLeave" @click="increment">&#x25B2;</div>
      <div class="counter__button counter__button--down"
      @mouseover="mouseOver" @mouseleave="mouseLeave" @click="decrement">&#x25BC;</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Counter',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    mouseOver (e) {
      e.target.style.color = this.currentQuestion.theme.backgroundColor
      e.target.style.backgroundColor = this.currentQuestion.theme.color
    },
    mouseLeave (e) {
      e.target.style.color = ''
      e.target.style.backgroundColor = ''
    },
    increment () {
      this.count++
    },
    decrement () {
      this.count--
    }
  },
  computed: {
    ...mapGetters(['currentQuestion'])
  }
}
</script>

<style lang="scss">
@import '../../theme/variable.scss';
  .counter {
    border-radius: 15px;
    max-width: 300px;
    display: table;
    user-select: none;
    &__input {
      height: 140px;
      background-color: inherit;
      border: 1px solid;
      border-top-left-radius: inherit;
      border-bottom-left-radius: inherit;
      font-family: 'Century gothic';
      font-size: 100px;
      font-weight: bold;
      max-width: 150px;
      color: inherit;
      text-align: end;
      padding-right: 15px;
      &:focus {
        outline: none
      }
    }
    &__buttons {
      display: table-cell;
      border-style: solid;
      border-width: 1px 1px 1px 0;
      border-top-right-radius: inherit;
      border-bottom-right-radius: inherit;
      vertical-align: middle;
    }
    &__button {
      font-size: 50px;
      padding: 6px;
      cursor: pointer;
      user-select: none;
      &--up {
        border-bottom: 1px solid;
        border-top-right-radius: inherit;
      }
      &--down {
        border-bottom-right-radius: inherit;
      }
    }
  }
</style>
