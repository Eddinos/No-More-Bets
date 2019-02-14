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
        selected: false
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
      },
      {
        name: 'Choupinette',
        choupi: true,
        color: 'pink',
        theme: {
          background: 'linear-gradient(#8A2387, #E94057, #F27121)',
          color: 'midnightBlue'
        },
        answers: ['我愛你', 'luv u bae', 'Manue > all', 'la meilleure', 'la plus belle', 'Je t\'aime !', '#1 sur la peau douce', 'jolie même avec de la paille grasse sur la tête',
          'trop choupinette', 'legendary blocker', 'Hall of Fame roller derby', 'la plus drôle', 'le monde entier m\'envie',
          'copine de l\'année', '❤', 'même tes sœurs sont sympas', 'si je devais partir sur un île déserte je prendrais toi avant une tarte au citron', 'gentille et badass à la fois',
          'la plus Manuefique', 'Je suis Emmarveillé devant toi', 'tu sens très bon', 'ma meilleure élève', 'lune de mes nuits', 'phare de mes tempêtes', 'Amy de mon Jake',
          'Je pourrais manger des artichauts pour toi', 'meilleure partenaire de danse', 'championne du monde de beaux yeux'],
        selected: true
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
      var currentQuestion = state.questions.find(question => payload.question === question)
      currentQuestion.answers = []
      let i = 1
      while (currentQuestion.answers.length < payload.answersNb) {
        currentQuestion.answers.push(`${i} !`)
        i++
      }
    }
  }
}
