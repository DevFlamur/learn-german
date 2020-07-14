import React, { useContext } from "react"
import CheckButton from "../components/checkbutton"
import ArticleSelector from "../components/articleselector"
import Points from "../components/points"
import Word from "../components/word"
import { navigate } from "gatsby"

import { QuizSessionContext } from "../context/QuizSessionContext"

function ArticlesQuiz() {
  const {
    checkQuestion,
    setAnswer,
    getIsWrongText,
    getDisplayedQuestions,
    getCurrentAnswer,
    getCurrentWord,
    getWordsSource,
  } = useContext(QuizSessionContext)

  const questionType = 1

  function chekQuestionWrapper(answer, answerCorrect, questionType) {
    // if true then end of quiz
    if (checkQuestion(answer, answerCorrect, questionType)) {
      navigate("/quizCompletionPage")
    }
  }

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Points
          correctPoints={getCurrentAnswer().correctAnswerCount}
          wrongPoints={getCurrentAnswer().wrongAnswerCount}
        />
        <br />
        <ArticleSelector
          articleId={getCurrentAnswer().answer}
          setAnswer={setAnswer}
          index={getCurrentAnswer().index}
          currentAnswer={getCurrentAnswer().answer}
        />
        <p style={{ color: "red" }}>{getIsWrongText()}</p>
        <Word word={getCurrentWord().word} />
        <br />
        <br />
        <CheckButton
          checkQuestion={chekQuestionWrapper}
          answer={getCurrentAnswer().answer}
          answerCorrect={getCurrentWord().correct}
          questionType={questionType}
        />
        <br />
        <p>
          {getDisplayedQuestions().length}/{getWordsSource().length}
        </p>
        <br />
      </div>
    </>
  )
}

export default ArticlesQuiz
