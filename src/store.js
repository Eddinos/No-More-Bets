export default {
  state: {
    questionColor: 'blue',
    questions: [
      {
        name: 'Yes / No',
        color: 'blue',
        answers: ['Yes !', 'No !'],
        selected: true
      },
      {
        name: 'Left / Right',
        color: 'red',
        answers: ['Left !', 'Right !'],
        selected: false
      }
    ],
    drawer: {
      open: false
    }
  },
  getters: {
    currentQuestion: state => {
      return state.questions.find( question => question.selected )
    }
  },
  mutations: {
    colorize (state, payload) {
      state.questionColor = payload.color
    },
    toggleDrawer (state) {
      state.drawer.open = !state.drawer.open
    },
    changeQuestion (state, payload) {
      state.questions.forEach( (question) => {
        question == payload.question ? question.selected = true : question.selected = false
      })
    }
  }
}
