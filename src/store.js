export default {
  state: {
    count: 0,
    questionColor: 'blue',
    questions: [
      {
        name: 'YesNo',
        color: 'blue'
      },
      {
        name: 'LeftRight',
        color: 'red'
      }
    ],
    drawer: {
      open: false
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    colorize(state, payload) {
      state.questionColor = payload.color;
    },
    toggleDrawer(state) {
      state.drawer.open = !state.drawer.open;
    }
  }
}
