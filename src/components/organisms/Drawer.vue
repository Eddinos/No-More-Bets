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
      this.$store.commit('changeQuestion', { question })
    },
    ...mapMutations([''])
  }
}
</script>

<style lang="scss" scoped>
@import "../../theme/variable.scss";
  .drawer {
    height: 100%;
    width: 240px;
    position: fixed;
    top: 0;
    left: -25%;
    background-color: crimson;
    transition: left .5s ease-out;
    &__title {
      margin-top: 100px;
      font-family: 'Century gothic';
      color: #ddd;
      font-size: 18px;
      font-weight: bold;
    }
    &__items {
      padding: 0;
    }
    &__item {
      color: #ddd;
      font-size: 23px;
      font-weight: bold;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      border-bottom: 1px solid $red;
      padding: 10px 0;
      &:hover {
        background-color: $red;
      }
    }
    &--open {
      left: 0;
    }
  }
</style>
