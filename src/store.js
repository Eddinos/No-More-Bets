export default {
  state: {
    questionColor: 'blue',
    questions: [
      {
        name: 'Yes / No',
        color: 'blue',
        theme: {
          backgroundColor: '#5dbfdd',
          color: '#8adaf3'
        },
        answers: ['Yes !', 'No !'],
        selected: true
      },
      {
        name: 'Left / Right',
        color: 'red',
        theme: {
          backgroundColor: '#f15b5b',
          color: '#e89696'
        },
        answers: ['&#8592;', '&#8594;'],
        selected: false
      },
      {
        name: 'Heads or Tails',
        color: 'green',
        theme: {
          backgroundColor: '#38c161',
          color: '#77dd77'
        },
        answers: ['Heads !', 'Tails !'],
        selected: false
      },
      {
        name: 'Multiple options',
        color: 'purple',
        theme: {
          backgroundColor: '#804d9a',
          color: '#b470ca'
        },
        answers: [],
        selected: false,
        count: true
      }
    ],
    drawer: {
      open: false
    }
  },
  getters: {
    currentQuestion: state => {
      return state.questions.find(question => question.selected)
    }
  },
  mutations: {
    colorize (state, payload) {
      state.questionColor = payload.color
    },
    toggleDrawer (state) {
      state.drawer.open = !state.drawer.open
    },
    closeDrawer (state) {
      state.drawer.open = false
    },
    changeQuestion (state, payload) {
      state.questions.forEach((question) => {
        question === payload.question ? question.selected = true : question.selected = false
      })
    },
    initAnswers (state, payload) {
      var currentQuestion = state.find(question => payload.question == question)
      currentQuestion.answers = []
      let i = 1
      while (currentQuestion.answers.length < payload.answersNb) {
        state.find(question => payload.question == question).answers.push(`${i} !`)
        i++
      }
    }
  }
}
