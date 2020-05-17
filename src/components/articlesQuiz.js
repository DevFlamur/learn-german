import React, { useContext } from "react"
import CheckButton from "../components/checkbutton"
import ArticleSelector from "../components/articleselector"
import Points from "../components/points"
import Word from "../components/word"

import { QuizSessionContext } from "../context/QuizSessionContext"

function ArticlesQuiz(props) {
  const {
    checkQuestion,
    setAnswer,
    getIsWrongText,
    getDisplayedWords,
    getCurrentAnswer,
    getCurrentWord,
    getWordsSource,
  } = useContext(QuizSessionContext)

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
          checkQuestion={checkQuestion}
          answer={getCurrentAnswer().answer}
          answerCorrect={getCurrentWord().correct}
        />
        <br />
        <p>
          {getDisplayedWords().length}/{getWordsSource().length}
        </p>
        <br />
      </div>
    </>
  )
}

export default ArticlesQuiz
