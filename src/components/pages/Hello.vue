<template>
  <div class="hello">
    <h1 class="hello__message">{{ msg }}</h1>
    <go class="hello__button" :answer="answer" @click.native="handleClick"></go>
    <h1 class="hello__message" style="top: 75%"> Click that shit boy: {{ count }}</h1>
  </div>
</template>

<script>
import Go from '@/components/atoms/Go'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'No more bets !',
      answer: ''
    }
  },
  computed: {
    ...mapState(['count'])
  },
  components: {
    Go
  },
  methods: {
    handleClick () {
      this.answer = Math.floor(Math.random() * 2) === 0 ? 'Yes !' : 'No !'
      this.$store.commit('increment')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../theme/variable.scss';
.hello {
  background-color: $blue;
  height: 100%;
  width: 100%;
  &__message {
    color: $lightBlue;
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
}
</style>
