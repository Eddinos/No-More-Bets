<template lang="html">
  <div class="counter">
    <input @click="reset" type="text" readonly name="optionsNb" v-model="count" class="counter__input" value="" placeholder="?">
    <div class="counter__buttons">
      <div class="counter__button counter__button--up"
      @mouseover="mouseOver" @mouseleave="mouseLeave"
      @mousedown="handleHold($event, ()=>count++)" @mouseup="handleHold" @touchstart="handleHold($event, ()=>count++)" @touchend="handleHold">&#x25B2;</div>
      <div class="counter__button counter__button--down"
      @mouseover="mouseOver" @mouseleave="mouseLeave"
      @mousedown="handleHold($event, decrement)" @mouseup="handleHold" @touchstart="handleHold($event, decrement)" @touchend="handleHold">&#x25BC;</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Counter',
  data () {
    return {
      count: 0,
      intervalDown: {}
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
    decrement () {
      if (this.count > 0) {
        this.count--
      }
    },
    handleHold (e, f) {
      if (e.type === 'mousedown' || e.type === 'touchstart') {
        f()
        this.intervalDown = setInterval(() => {
          f()
        }, 200);
      } else if (e.type === 'mouseup' ||e.type === 'touchend') {
        this.setAnswers()
      }
    },
    reset () {
      this.count = 0
    },
    setAnswers () {
      clearInterval(this.intervalDown)
      this.currentQuestion.answers = []
      let i = 1
      while (this.currentQuestion.answers.length < this.count) {
        this.currentQuestion.answers.push(`${i} !`)
        i++
      }
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
    border-radius: 15em;
    border: 1em solid;
    border-color: inherit;
    max-width: 300em;
    display: table;
    user-select: none;
    height: 150em;
    &__input {
      height: 100%;
      display: table-cell;
      background-color: inherit;
      border: none;
      border-right: 0.01em solid;
      border-top-left-radius: inherit;
      border-bottom-left-radius: inherit;
      font-family: 'Century gothic';
      font-size: 100em;
      font-weight: bold;
      max-width: 1.5em;
      color: inherit;
      text-align: end;
      padding-right: 15px;
      &:focus {
        outline: none
      }
    }
    &__buttons {
      display: table-cell;
      height: 100%;
      border: none;
      border-top-right-radius: inherit;
      border-bottom-right-radius: inherit;
      vertical-align: middle;
    }
    &__button {
      font-size: 50em;
      line-height: 1.4em;
      height: 50%;
      padding: 0.5rem;
      cursor: pointer;
      user-select: none;
      &--up {
        border-bottom: 0.02em solid;
        border-top-right-radius: inherit;
      }
      &--down {
        border-bottom-right-radius: inherit;
      }
    }
  }
</style>
