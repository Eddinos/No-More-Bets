<template lang="html">
  <div class="drawer" :class="{ 'drawer--open': drawer.open }">
    <div class="drawer__title">
      Change question
    </div>
    <ul class="drawer__items">
      <li class="drawer__item" v-for="question in questions" @click="handlePick(question)">
        {{ question.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Drawer',
  computed: {
    ...mapState(['questions', 'drawer'])
  },
  methods: {
    handlePick (question) {
      this.$store.commit('colorize', { color: question.color })
    },
    ...mapMutations([''])
  }
}
</script>

<style lang="scss" scoped>
  .drawer {
    height: 100%;
    width: 240px;
    position: fixed;
    top: 0;
    left: -20%;
    background-color: crimson;
    transition: left .5s ease-out;
    &__title {
      margin-top: 100px;
    }
    &--open {
      left: 0;
    }
  }
</style>
