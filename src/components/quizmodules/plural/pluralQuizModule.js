import React, { useContext, useState } from "react"
import NextButton from "../../shared/nextbutton"
import QuizScore from "../../shared/quizscore"
import WordInput from "../../shared/wordinput"
import Grid from "@material-ui/core/Grid"
import { BaseQuizSessionContext } from "../../../context/BaseQuizSessionProvider"
import { navigate } from "gatsby"

export default function PluralQuiz() {
  const {
    checkQuestion,
    getDisplayedQuestions,
    getCurrentAnswer,
    getCurrentWord,
    getWordsSource,
    getArticleText,
  } = useContext(BaseQuizSessionContext)

  const questionType = 1

  function chekQuestionWrapper(answer, answerCorrect, questionType) {
    // if true then end of quiz
    if (checkQuestion(answer, answerCorrect, questionType)) {
      navigate("/quizCompletionPage")
    }

    if (getCurrentAnswer().answer === "") {
      wordInput.model.onReset()
    }
  }

  const wordInput = useFormInput("")
  function useFormInput(initialValue) {
    const { setAnswer, getIsWrongText } = useContext(BaseQuizSessionContext)
    const [value, setValue] = useState(initialValue)

    const handleChange = e => {
      setAnswer(e.target.value)
      setValue(e.target.value)
    }

    const handleReset = () => {
      setValue("")
    }

    return {
      model: {
        value,
        onChange: handleChange,
        onReset: handleReset,
      },
      view: (
        <>
          <p style={{ color: "red" }}>{getIsWrongText()}</p>
        </>
      ),
      textToRead: `${getArticleText(getCurrentWord().article)} ${
        getCurrentWord().word
      }`,
    }
  }

  return (
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
      <Grid container spacing={0}>
        <Grid item xs={11} style={{ height: "40px", textAlign: "center" }}>
          <h3>
            {getArticleText(getCurrentWord().article)} {getCurrentWord().word}
          </h3>
        </Grid>
      </Grid>
      <br />
      <WordInput wordInputControl={wordInput} />
      <br /> <br /> <br />
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
  )
}
