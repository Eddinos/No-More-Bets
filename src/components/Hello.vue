<template>
  <div class="hello">
    <h1 class="hello__message">{{ msg }}</h1>
    <h2>Essential Links</h2>
    <go></go>
    <h2>Ecosystem</h2>

  </div>
</template>

<script>
import Go from '@/components/Go'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Less chitchat more taptap'
    }
  },
  components: {
    Go
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
  &__message {
    color: darkSalmon;
  }
}
</style>
