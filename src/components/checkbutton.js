import React, { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

function CheckButton(props) {
  const { getResourceText } = useContext(LanguageContext)
  return (
    <>
      <input
        className="LinkButton"
        type="button"
        value={getResourceText("Next")}
        onClick={e =>
          props.checkQuestion(
            props.answer,
            props.answerCorrect,
            props.questionType
          )
        }
      />
    </>
  )
}

export default CheckButton
