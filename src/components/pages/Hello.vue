<template>
  <div class="hello" v-bind:style="currentQuestion.theme">
    <Go class="hello__button" :answer="answer" :choupi="currentQuestion.choupi" @click.native="handleClick"></Go>
    <Counter v-if="this.currentQuestion.count" class="hello__counter" />
  </div>
</template>

<script>
import Go from '@/components/atoms/Go'
import Counter from '@/components/atoms/Counter'

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
      return this.currentQuestion.theme
    },
    ...mapState(['count', 'questionColor']),
    ...mapGetters(['currentQuestion'])
  },
  components: {
    Go, Counter
  },
  methods: {
    handleClick () {
      var possibleAnswers = this.currentQuestion.answers
      this.answer = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../theme/variable.scss';
.hello {
  height: 100%;
  width: 100%;
  &__message {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 34em;
  }
  &__button {
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &__counter {
    position: absolute;
    top: 76%;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
