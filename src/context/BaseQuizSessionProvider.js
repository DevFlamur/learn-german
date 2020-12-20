import React, { createContext, useReducer, useState } from "react"
import AppReducer from "./AppReducer"

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
  wordListSource: [],
}

// Create Context
export const BaseQuizSessionContext = createContext(intialState)

// Provider
export const BaseQuizSessionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, intialState)

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
  const [displayedQuestions, setDisplayedQuestions] = useState([0])

  function isCorrect(answer, answerCorrect) {
    var questionType = getCurrentQuestionType()
    /*
    QuestionType 1* : Der, Die, Das Module
    QuestionType 2* : Plural
    QuestionType 3* : Opposites
    QuestionType 4* : Numbers
    */
    if (questionType === 1) {
      return answer === answerCorrect
    } else if (questionType === 2 || questionType === 3) {
      return answer.toString().toUpperCase() === answerCorrect.toUpperCase()
    }

    return false
  }

  function changeQuestion() {
    const currentAnswer = state.currentAnswer
    var availableQuestionLength = state.currentSettings.words.length
    var questionIndex = getNextRandomQuestionIndex(
      0,
      availableQuestionLength,
      false
    )
    if (
      displayedQuestions.length < availableQuestionLength &&
      questionIndex !== -1
    ) {
      currentAnswer.index = questionIndex
      saveCurrentAnswers(currentAnswer)
      return true
    }

    var dc = [...displayedQuestions]
    currentAnswer.index = dc[displayedQuestions.length - 1]

    var dcFound = [...displayedQuestions]
    dcFound.push(currentAnswer.index)
    setDisplayedQuestions(dcFound)

    return false
  }

  function increaseCorrectAnswerCount() {
    const currentAnswer = state.currentAnswer
    currentAnswer.correctAnswerCount = currentAnswer.correctAnswerCount + 1
    saveCurrentAnswers(currentAnswer)
  }

  function increaseWrongAnswerCount() {
    const currentAnswer = state.currentAnswer
    currentAnswer.wrongAnswerCount = currentAnswer.wrongAnswerCount + 1
    saveCurrentAnswers(currentAnswer)
  }

  function pushToAnsweredQuestion(answer, answerCorrect) {
    const currentAnswer = state.currentAnswer
    var questionText = state.currentSettings.words[currentAnswer.index].word
    var givenAnswerText = `${getArticleText(answer)} ${questionText}`
    var correctAnswerText = `${getArticleText(answerCorrect)} ${questionText}`

    var answeredQuestionArray = [...answeredQuestion]
    answeredQuestionArray.push({
      answered: givenAnswerText,
      correct: correctAnswerText,
      isCorrect: isCorrect(answer, answerCorrect),
      questionIndex: currentAnswer.index,
    })
    setAnsweredQuestion(answeredQuestionArray)
  }

  function clearWrongText() {
    setIsWrongText("")
  }

  function displayWrongText(answerCorrect) {
    const currentAnswer = state.currentAnswer
    var questionText = state.currentSettings.words[currentAnswer.index].word

    var questionType = getCurrentQuestionType()

    if (questionType === 1) {
      setIsWrongText(`${getArticleText(answerCorrect)} ${questionText}`)
    } else if (questionType === 2) {
      setIsWrongText(`${questionText}`)
    } else if (questionType === 3) {
      setIsWrongText(`${answerCorrect}`)
    }
  }

  function checkQuestion(answer, answerCorrect) {
    var wasWrongAnswerBefore = isWrongText !== ""
    clearWrongText()

    if (wasWrongAnswerBefore) {
      if (!isCorrect(answer, answerCorrect)) {
        displayWrongText(answerCorrect)
        return
      }
    } else if (!wasWrongAnswerBefore) {
      if (isCorrect(answer, answerCorrect)) {
        increaseCorrectAnswerCount()
        pushToAnsweredQuestion(answer, answerCorrect)
      } else {
        increaseWrongAnswerCount()
        displayWrongText(answerCorrect)
        pushToAnsweredQuestion(answer, answerCorrect)
        return
      }
    }

    //checking if it is last question here
    if (!changeQuestion()) {
      var answers = [...answeredQuestion]
      const currentAnswer = state.currentAnswer
      var questionText = state.currentSettings.words[currentAnswer.index].word

      if (!wasWrongAnswerBefore) {
        answers.push({
          answered: getArticleText(answer) + " " + questionText,
          correct: getArticleText(answerCorrect) + " " + questionText,
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

      var aq = [...answeredQuestion]
      aq.length = 0
      setAnsweredQuestion(aq)

      //show confirmation screen
      return true
    }
    clearAnswer()
    return false
  }

  function clearAnswer() {
    const currentAnswer = state.currentAnswer
    var questionType = getCurrentQuestionType()
    if (questionType === 1) {
      currentAnswer.answer = null
    } else if (questionType === 2 || questionType === 3) {
      currentAnswer.answer = ""
    }
    saveCurrentAnswers(currentAnswer)
  }

  function getNextRandomQuestionIndex(min, max, isInit) {
    var found = false
    var number = -1
    var displayedQuestionList = [...displayedQuestions]

    do {
      if (displayedQuestionList.length >= state.currentSettings.words.length) {
        break
      }

      min = Math.ceil(min)
      max = Math.floor(max)
      number = Math.floor(Math.random() * (max - min)) + min

      if (!displayedQuestionList.includes(number)) {
        found = true
        if (!isInit) {
          var dcFound = [...displayedQuestions]
          dcFound.push(number)
          setDisplayedQuestions(dcFound)
        }
      }
    } while (found === false)

    return number
  }

  function getCurrentQuestionType() {
    var currentQuizSettings = getCurrentSettings()
    return currentQuizSettings.questionType
  }

  function setAnswer(data) {
    const ca = state.currentAnswer
    var questionType = getCurrentQuestionType()
    /*
    QuestionType 1* : Der, Die, Das Module
    QuestionType 2* : Plural
    QuestionType 3* : Opposites
    QuestionType 4* : Numbers
    */
    if (questionType === 1) {
      ca.answer = data.articleId
    } else if (questionType === 2 || questionType === 3) {
      ca.answer = data
    }
    saveCurrentAnswers(ca)
  }

  function getCurrentSettings() {
    return state.currentSettings
  }
  function getWordsSource() {
    try {
      if (state.currentSettings.words === undefined) return []
      return state.currentSettings.words
    } catch (error) {
      return []
    }
  }

  function getCurrentAnswer() {
    return state.currentAnswer
  }
  function getDisplayedQuestions() {
    return displayedQuestions
  }

  function getIsWrongText() {
    return isWrongText
  }

  function getCurrentWord() {
    try {
      return state.currentSettings.words[state.currentAnswer.index]
    } catch (error) {
      return ""
    }
  }

  function getQuizSessionFromStorage() {
    var store = undefined
    if (typeof window !== "undefined" && window.localStorage)
      store = JSON.parse(localStorage.getItem("jsonObject"))
    if (store !== undefined && store !== null) return store
    return []
  }

  function deleteQuizSessionFromStorage(sessionList) {
    var storeInDeleted = undefined
    if (typeof window !== "undefined" && window.localStorage)
      storeInDeleted = JSON.parse(localStorage.getItem("jsonObject"))

    if (storeInDeleted === undefined || storeInDeleted === null) {
      localStorage.setItem("jsonObject", JSON.stringify(sessionList))
    } else {
      localStorage.removeItem("jsonObject")
    }
    deleteQuizSession()
  }

  function deleteQuizSession() {
    dispatch({
      type: "QUIZSESSION_DELETE_FROM_STATE",
    })
  }

  function setWordListSource(wordListSource) {
    dispatch({
      type: "SET_WORD_LIST_SOURCE",
      payload: wordListSource,
    })
  }

  function getWordListSource() {
    return state.wordListSource
  }

  return (
    <BaseQuizSessionContext.Provider
      value={{
        setAnswer,
        checkQuestion,
        setCurrentQuizSettings,
        getCurrentSettings,
        getIsWrongText,
        getCurrentAnswer,
        getDisplayedQuestions,
        getWordsSource,
        getCurrentWord,
        getQuizSessionFromStorage,
        deleteQuizSessionFromStorage,
        setWordListSource,
        getWordListSource,
        getArticleText,
      }}
    >
      {children}
    </BaseQuizSessionContext.Provider>
  )
}
