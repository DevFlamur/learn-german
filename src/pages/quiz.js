import React, { useState } from "react"
import CheckButton from "../components/checkbutton"
import ArticleSelector from "../components/articleselector"
import Points from "../components/points"
import Word from "../components/word"
import Layout from "../components/layout"
import words from "../data/articles/allchapters.json"

function Quiz({ location }) {
  let chapter = 0
  if (typeof location.state !== "undefined" && location.state) {
    chapter = location.state.chapter
  }

  var store = undefined
  if (typeof window !== "undefined" && window.localStorage)
    store = JSON.parse(localStorage.getItem("jsonObject"))
  var storedData = []
  if (store !== undefined && store !== null) {
    storedData = store
    storedData.answeredQuestion = null
  }

  const [quizSession, setQuizSession] = useState(storedData)
  const [isWrongText, setIsWrongText] = useState("")
  const [answeredQuestion, setAnsweredQuestion] = useState([])
  const [displayedWords, setDisplayedWords] = useState([0])
  const [currentQuestion, setCurrentQuestion] = useState([
    {
      index: 0,
      correctAnswerCount: 0,
      wrongAnswerCount: 0,
      answer: 0,
    },
  ])

  const getArticleText = articleId => {
    return articleId === 1 ? "Der" : articleId === 2 ? "Die" : "Das"
  }

  const checkQuestion = (answer, answerCorrect) => {
    const ca = [...currentQuestion]
    var aq = [...answeredQuestion]

    var wasWrongBefore = isWrongText !== ""
    setIsWrongText("")
    if (answer === answerCorrect && !wasWrongBefore) {
      ca[0].correctAnswerCount = ca[0].correctAnswerCount + 1
      aq.push({
        answered:
          getArticleText(answer) + " " + words[chapter][ca[0].index].word,
        correct:
          getArticleText(answerCorrect) +
          " " +
          words[chapter][ca[0].index].word,
        isCorrect: true,
        questionIndex: ca[0].index,
      })
      setAnsweredQuestion(aq)
    } else if (
      !wasWrongBefore ||
      (answer !== answerCorrect && wasWrongBefore)
    ) {
      if (!wasWrongBefore) ca[0].wrongAnswerCount = ca[0].wrongAnswerCount + 1

      var articleText =
        answerCorrect === 1 ? "Der" : answerCorrect === 2 ? "Die" : "Das"
      setIsWrongText(articleText + " " + words[chapter][ca[0].index].word)
      if (!wasWrongBefore) {
        aq.push({
          answered:
            getArticleText(answer) + " " + words[chapter][ca[0].index].word,
          correct:
            getArticleText(answerCorrect) +
            " " +
            words[chapter][ca[0].index].word,
          isCorrect: false,
          questionIndex: ca[0].index,
        })
        setAnsweredQuestion(aq)
      }

      return
    } else if (answer === answerCorrect && wasWrongBefore) {
    }
    var number = getRandomInt(0, words[chapter].length)
    if (displayedWords.length < words[chapter].length && number !== -1)
      ca[0].index = number
    else {
      var answers = [...answeredQuestion]

      if (!wasWrongBefore) {
        answers.push({
          answered:
            getArticleText(answer) + " " + words[chapter][ca[0].index].word,
          correct:
            getArticleText(answerCorrect) +
            " " +
            words[chapter][ca[0].index].word,
          isCorrect: answer === answerCorrect,
          questionIndex: ca[0].index,
        })
      }

      var sessionList = [...quizSession]
      sessionList.push({
        wrongPoints: ca[0].wrongAnswerCount,
        correctPoints: ca[0].correctAnswerCount,
        sessionId: quizSession.length + 1,
        startTime: dateToDMY() + " " + dateToTime(),
        answeredQuestion: answers,
      })

      localStorage.setItem("jsonObject", JSON.stringify(sessionList))

      setQuizSession(sessionList)

      ca[0].correctAnswerCount = 0
      ca[0].wrongAnswerCount = 0
      aq.length = 0
      setAnsweredQuestion(aq)

      var dc = [...displayedWords]
      ca[0].index = dc[displayedWords.length - 1]

      var dcFound = [...displayedWords]
      dcFound.push(ca[0].index)
      setDisplayedWords(dcFound)

      dc.length = 1
      dc[0] = ca[0].index
      setDisplayedWords(dc)
    }

    ca[0].answer = null
    setAnswer({ articleId: null })
    setCurrentQuestion(ca)
  }

  const getRandomInt = (min, max) => {
    var found = false
    var number = -1
    var dw = [...displayedWords]

    do {
      if (dw.length >= words[chapter].length) {
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

  const setAnswer = data => {
    const ca = [...currentQuestion]
    ca[0].answer = data.articleId
    setCurrentQuestion(ca)
  }

  if (typeof location.state !== "undefined" && location.state) {
    return (
      <Layout>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <Points
            correctPoints={currentQuestion[0].correctAnswerCount}
            wrongPoints={currentQuestion[0].wrongAnswerCount}
          />
          <br />
          <ArticleSelector
            articleId={currentQuestion[0].answer}
            setAnswer={setAnswer}
            index={currentQuestion[0].index}
            currentAnswer={currentQuestion[0].answer}
          />
          <p style={{ color: "red" }}>{isWrongText}</p>
          <Word word={words[chapter][currentQuestion[0].index].word} />
          <br />
          <br />
          <CheckButton
            checkQuestion={checkQuestion}
            answer={currentQuestion[0].answer}
            answerCorrect={words[chapter][currentQuestion[0].index].correct}
          />
          <br />
          <p>
            {displayedWords.length}/{words[chapter].length}
          </p>
          <br />
        </div>
      </Layout>
    )
  } else {
    return (
      <>
        <p>Gehe zurück oder starte die App neu!</p>
      </>
    )
  }
}

export default Quiz
