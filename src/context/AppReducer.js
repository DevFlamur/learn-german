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

    case "APPLICATION_GET_RESOURCE_TEXT":
      return state

    case "QUIZSESSION_SET_CURRENT_QUIZ_SETTINGS":
      var newState = { ...state, currentSettings: action.payload }

      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem(
          "currentQuizSettings",
          JSON.stringify(newState.currentSettings)
        )
      }
      return newState
    case "QUIZSESSION_SET_QUIZSESSION":
      state.quizSession.push(action.payload)
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem("jsonObject", JSON.stringify(state.quizSession))
      }
      return state
    case "QUIZSESSION_SET_CURRENTANSWERS":
      return { ...state, currentQuestion: action.payload }

    default:
      return state
  }
}
