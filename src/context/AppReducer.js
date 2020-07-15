const resetCurrentAnswer = state => {
  state.currentAnswer = {
    index: 0,
    correctAnswerCount: 0,
    wrongAnswerCount: 0,
    answer: 0,
  }
}

export default (state, action) => {
  switch (action.type) {
    case "APPLICATION_SWITCH_LANGUAGE":
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem("lng", action.payload)
      }
      return {
        ...state,
        language: action.payload,
      }
    case "APPLICATION_SYNC_AUTH":
      let authentication = {
        isAuthenticated: state.authentication.isAuthenticated,
        userName: state.authentication.userName,
      }

      if (typeof window !== "undefined" && window.localStorage) {
        authentication = JSON.parse(localStorage.getItem("authInfo"))
      }

      if (authentication !== null) {
        try {
          state.authentication = JSON.parse(state.authentication)
        } catch (error) {}
        state.authentication.isAuthenticated = authentication.isAuthenticated
        state.authentication.userName = authentication.userName
      }
      return state
    case "APPLICATION_GET_RESOURCE_TEXT":
      return state
    case "APPLICATION_SIGN_IN":
      state.authentication.isAuthenticated = true
      state.authentication.userName = action.payload

      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem("authInfo", JSON.stringify(state.authentication))
      }

      return state
    case "APPLICATION_SIGN_OUT":
      state.authentication.isAuthenticated = false
      state.authentication.userName = null
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem("authInfo", JSON.stringify(state.authentication))
      }
      return {
        ...state,
        state,
      }

    case "QUIZSESSION_SET_CURRENT_QUIZ_SETTINGS":
      state.currentSettings = action.payload
      resetCurrentAnswer(state)
      console.log(state)

      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem(
          "currentQuizSettings",
          JSON.stringify(state.currentSettings)
        )
      }
      return {
        ...state,
        state,
      }
    case "QUIZSESSION_SET_QUIZSESSION":
      state.quizSession.push(action.payload)
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem("jsonObject", JSON.stringify(state.quizSession))
      }
      return state
    case "QUIZSESSION_DELETE_FROM_STATE":
      state.quizSession = []
      return {
        ...state,
        state,
      }
    case "QUIZSESSION_SET_CURRENTANSWERS":
      return { ...state, currentQuestion: action.payload }

    default:
      return state
  }
}
