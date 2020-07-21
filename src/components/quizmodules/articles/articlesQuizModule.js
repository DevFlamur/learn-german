import React, { useContext } from "react"
import NextButton from "../../shared/nextbutton"
import ArticleSelector from "./articleselector"
import QuizScore from "../../shared/quizscore"
import Word from "../../shared/word"
import { navigate } from "gatsby"

import { BaseQuizSessionContext } from "../../../context/BaseQuizSessionProvider"

function ArticlesQuiz() {
  const {
    checkQuestion,
    setAnswer,
    getIsWrongText,
    getDisplayedQuestions,
    getCurrentAnswer,
    getCurrentWord,
    getWordsSource,
  } = useContext(BaseQuizSessionContext)

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
        <QuizScore
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
        <br />
        <Word word={getCurrentWord().word} />
        <p style={{ color: "red", textAlign: "center" }}>{getIsWrongText()}</p>
        <br />
        <br />
        <NextButton
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
