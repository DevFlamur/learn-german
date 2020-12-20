import React, { useContext, useState } from "react"
import NextButton from "../../shared/nextbutton"
import QuizScore from "../../shared/quizscore"
import WordInput from "../../shared/wordinput"
import { navigate } from "gatsby"
import { BaseQuizSessionContext } from "../../../context/BaseQuizSessionProvider"

const OppositesQuizModule = () => {
  const questionType = 3
  const {
    checkQuestion,
    getDisplayedQuestions,
    getCurrentAnswer,
    getCurrentWord,
    getWordsSource,
  } = useContext(BaseQuizSessionContext)

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
      textToRead: `${getCurrentWord().word}`,
    }
  }

  return (
    <>
      <QuizScore
        correctPoints={getCurrentAnswer().correctAnswerCount}
        wrongPoints={getCurrentAnswer().wrongAnswerCount}
      />
      <br />
      <h3>{getCurrentWord().word}</h3>
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
    </>
  )
}

export default OppositesQuizModule
