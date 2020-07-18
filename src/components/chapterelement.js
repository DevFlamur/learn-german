import React, { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"
import ToggleButton from "@material-ui/lab/ToggleButton"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"

import { navigate } from "gatsby"

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

import Grid from "@material-ui/core/Grid"

import { QuizSessionContext } from "../context/QuizSessionContext"

function ChapterElement(props) {
  const { getResourceText } = useContext(LanguageContext)

  const {
    setCurrentQuizSettings,
    getCurrentSettings,
    setWordListSource,
  } = useContext(QuizSessionContext)

  const getQuestionType = () => {
    var questionType = -1
    if (props.goto === "/quizPage/") {
      questionType = 1
    } else if (props.goto === "/plural/") {
      questionType = 2
    } else if (props.goto === "/opposites/") {
      questionType = 3
    }
    return questionType
  }

  const getQuestionSource = () => {
    var source = require("../data/articles/allchapters.json")
    var questionType = getQuestionType()
    switch (questionType) {
      case 2:
        source = require("../data/plural/allchapters.json")
        break
      case 3:
        source = require("../data/opposites/allchapters.json")
        break
    }
    return source
  }

  const saveQuestionSettings = chp => {
    let questionType = getQuestionType()

    const source = getQuestionSource()

    const settings = {
      words: source[chp],
      chapter: chp,
      questionType: questionType,
    }

    setCurrentQuizSettings(settings)
  }

  const handleChapterChange = chp => {
    saveQuestionSettings(chp)
    handleNavigation(chp)
  }

  const handleOpenWordList = chp => {
    if (chp === null) return

    var source = getQuestionSource()

    const wordListSource = source[chp]
    setWordListSource(wordListSource)
    navigate("/wordspage/")
  }

  const handleNavigation = chp => {
    if (getCurrentSettings().chapter !== null) {
      navigate(props.goto, { state: { chapter: chp } })
    }
  }

  return (
    <>
      <Typography gutterBottom variant="h5" component="h2">
        {getResourceText(props.titleKey)}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {getResourceText(props.sublineKey)}
      </Typography>
      <Grid item>
        {[0, 1, 2, 3, 4, 5, 6].map((chp, index) => (
          // <ToggleButton
          //   onClick={() => handleChapterChange(chp)}
          //   style={{ width: "100%" }}
          //   key={index}
          //   value={chp}
          // >

          // </ToggleButton>
          <Card style={{ width: "100%" }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {`${getResourceText("Chapter")} ${chp + 1}`}
              </Typography>
              <Grid item></Grid>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => handleChapterChange(chp)}
                color="primary"
              >
                {getResourceText("Start")}
              </Button>

              <Button
                size="small"
                onClick={() => handleOpenWordList(chp)}
                color="primary"
              >
                {getResourceText("WordList")}
              </Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </>
  )
}

export default ChapterElement
