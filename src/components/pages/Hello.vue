<template>
  <div class="hello">
    <h1 class="hello__message">{{ msg }}</h1>
    <go class="hello__button" :answer="answer" @click.native="handleClick"></go>
  </div>
</template>

<script>
import Go from '@/components/atoms/Go'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Less chitchat more taptap',
      answer: ''
    }
  },
  components: {
    Go
  },
  methods: {
    handleClick () {
      this.answer = Math.floor(Math.random()*2) == 0 ? 'Yes !' : 'No !';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
  height: 100%;
  width: 100%;
  &__message {
    color: darkSalmon;
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
