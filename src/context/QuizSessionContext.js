import React, { createContext, useReducer, useState } from "react"
import AppReducer from "./AppReducer"
import { navigate } from "gatsby"

var quizSessionStore = undefined
var currentSettingsStore = undefined
if (typeof window !== "undefined" && window.localStorage) {
  quizSessionStore = JSON.parse(localStorage.getItem("jsonObject"))
  currentSettingsStore = JSON.parse(localStorage.getItem("currentQuizSettings"))
}
var quizSessionData = []
if (quizSessionStore !== undefined && quizSessionStore !== null) {
  quizSessionData = [...quizSessionStore]
  quizSessionData.answeredQuestion = null
}

var currentSettingsData = {}
if (currentSettingsStore !== undefined && currentSettingsStore !== null) {
  currentSettingsData = currentSettingsStore
}

// initial State
const intialState = {
  quizSession: quizSessionData,
  currentAnswer: {
    index: 0,
    correctAnswerCount: 0,
    wrongAnswerCount: 0,
    answer: 0,
  },
  currentSettings: currentSettingsData,
}

// Create Context
export const QuizSessionContext = createContext(intialState)

// Provider
export const QuizSessionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, intialState)

  function refreshSettings() {}

  function setCurrentQuizSettings(settings) {
    dispatch({
      type: "QUIZSESSION_SET_CURRENT_QUIZ_SETTINGS",
      payload: settings,
    })
  }

  function saveQuizSession(session) {
    dispatch({
      type: "QUIZSESSION_SET_QUIZSESSION",
      payload: session,
    })
  }

  function saveCurrentAnswers(currentAnswers) {
    dispatch({
      type: "QUIZSESSION_SET_CURRENTANSWERS",
      payload: currentAnswers,
    })
  }

  function getArticleText(articleId) {
    return articleId === 1 ? "Der" : articleId === 2 ? "Die" : "Das"
  }

  function dateToTime() {
    var date = new Date()
    var h = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()
    return (
      (h <= 9 ? "0" + h : h) +
      ":" +
      (m <= 9 ? "0" + m : m) +
      ":" +
      (s <= 9 ? "0" + s : s)
    )
  }

  function dateToDMY() {
    var date = new Date()
    var d = date.getDate()
    var m = date.getMonth() + 1
    var y = date.getFullYear()
    return `${d <= 9 ? "0" + d : d}.${m <= 9 ? "0" + m : m}.${y}`
  }

  const [isWrongText, setIsWrongText] = useState("")
  const [answeredQuestion, setAnsweredQuestion] = useState([])
  const [displayedWords, setDisplayedWords] = useState([0])

  function checkQuestion(answer, answerCorrect) {
    const currentAnswer = state.currentAnswer
    var aq = [...answeredQuestion]

    var wasWrongBefore = isWrongText !== ""
    setIsWrongText("")
    if (answer === answerCorrect && !wasWrongBefore) {
      currentAnswer.correctAnswerCount = currentAnswer.correctAnswerCount + 1
      aq.push({
        answered:
          getArticleText(answer) +
          " " +
          state.currentSettings.words[currentAnswer.index].word,
        correct:
          getArticleText(answerCorrect) +
          " " +
          state.currentSettings.words[currentAnswer.index].word,
        isCorrect: true,
        questionIndex: currentAnswer.index,
      })
      setAnsweredQuestion(aq)
    } else if (
      !wasWrongBefore ||
      (answer !== answerCorrect && wasWrongBefore)
    ) {
      if (!wasWrongBefore)
        currentAnswer.wrongAnswerCount = currentAnswer.wrongAnswerCount + 1

      var articleText =
        answerCorrect === 1 ? "Der" : answerCorrect === 2 ? "Die" : "Das"
      setIsWrongText(
        articleText +
          " " +
          state.currentSettings.words[currentAnswer.index].word
      )
      if (!wasWrongBefore) {
        aq.push({
          answered:
            getArticleText(answer) +
            " " +
            state.currentSettings.words[currentAnswer.index].word,
          correct:
            getArticleText(answerCorrect) +
            " " +
            state.currentSettings.words[currentAnswer.index].word,
          isCorrect: false,
          questionIndex: currentAnswer.index,
        })
        setAnsweredQuestion(aq)
      }

      return
    } else if (answer === answerCorrect && wasWrongBefore) {
    }
    var number = getRandomInt(0, state.currentSettings.words.length)
    if (
      displayedWords.length < state.currentSettings.words.length &&
      number !== -1
    )
      currentAnswer.index = number
    else {
      var answers = [...answeredQuestion]

      if (!wasWrongBefore) {
        answers.push({
          answered:
            getArticleText(answer) +
            " " +
            state.currentSettings.words[currentAnswer.index].word,
          correct:
            getArticleText(answerCorrect) +
            " " +
            state.currentSettings.words[currentAnswer.index].word,
          isCorrect: answer === answerCorrect,
          questionIndex: currentAnswer.index,
        })
      }

      saveQuizSession({
        wrongPoints: currentAnswer.wrongAnswerCount,
        correctPoints: currentAnswer.correctAnswerCount,
        sessionId: state.quizSession.length + 1,
        startTime: dateToDMY() + " " + dateToTime(),
        answeredQuestion: answers,
      })

      currentAnswer.correctAnswerCount = 0
      currentAnswer.wrongAnswerCount = 0
      aq.length = 0
      setAnsweredQuestion(aq)

      var dc = [...displayedWords]
      currentAnswer.index = dc[displayedWords.length - 1]

      var dcFound = [...displayedWords]
      dcFound.push(currentAnswer.index)
      setDisplayedWords(dcFound)

      dc.length = 1
      dc[0] = currentAnswer.index
      setDisplayedWords(dc)

      //show confirmation screen
      navigate("/quizCompletionPage")
    }

    currentAnswer.answer = null
    setAnswer({ articleId: null })
    saveCurrentAnswers(currentAnswer)
  }

  function getRandomInt(min, max) {
    var found = false
    var number = -1
    var dw = [...displayedWords]

    do {
      if (dw.length >= state.currentSettings.words.length) {
        break
      }

      min = Math.ceil(min)
      max = Math.floor(max)
      number = Math.floor(Math.random() * (max - min)) + min

      if (!dw.includes(number)) {
        found = true
        var dcFound = [...displayedWords]
        dcFound.push(number)
        setDisplayedWords(dcFound)
      }
    } while (found === false)

    return number
  }

  function setAnswer(data) {
    const ca = state.currentAnswer
    ca.answer = data.articleId
    saveCurrentAnswers(ca)
  }

  function getCurrentSettings() {
    return state.currentSettings
  }
  function getWordsSource() {
    return state.currentSettings.words
  }

  function getCurrentAnswer() {
    return state.currentAnswer
  }
  function getDisplayedWords() {
    return displayedWords
  }

  function getIsWrongText() {
    return isWrongText
  }

  function getCurrentWord() {
    console.log(state)
    return state.currentSettings.words[state.currentAnswer.index]
  }

  return (
    <QuizSessionContext.Provider
      value={{
        setAnswer,
        checkQuestion,
        setCurrentQuizSettings,
        getCurrentSettings,
        getIsWrongText,
        getCurrentAnswer,
        getDisplayedWords,
        getWordsSource,
        getCurrentWord,
      }}
    >
      {children}
    </QuizSessionContext.Provider>
  )
}
