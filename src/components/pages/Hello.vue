<template>
  <div class="hello" v-bind:class="setTheme">
    <h1 class="hello__message">{{ msg }}</h1>
    <Go class="hello__button" :answer="answer" @click.native="handleClick"></Go>
  </div>
</template>

<script>
import Go from '@/components/atoms/Go'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'No more bets !',
      answer: ''
    }
  },
  computed: {
    setTheme () {
      return `hello--${this.currentQuestion.color}`
    },
    ...mapState(['count', 'questionColor']),
    ...mapGetters(['currentQuestion'])
  },
  components: {
    Go
  },
  methods: {
    handleClick () {
      this.answer = Math.floor(Math.random() * 2) === 0 ? this.currentQuestion.answers[0] : this.currentQuestion.answers[1]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../theme/variable.scss';
.hello {
  // background-color: $blue;
  height: 100%;
  width: 100%;
  &__message {
    // color: $lightBlue;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
  }
  &__button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* Blue */
  &--blue {
    background-color: $blue;
    .hello {
      &__message {
        color: $lightBlue;
      }
      &__button {
        color: $lightBlue;
      }
    }
  }

  /* Red */
  &--red {
    background-color: $red;
    .hello {
      &__message {
        color: $lightRed;
      }
      &__button {
        color: $lightRed;
      }
    }
  }
}
</style>
