import React, { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"
import ToggleButton from "@material-ui/lab/ToggleButton"

import { navigate } from "gatsby"

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

import Grid from "@material-ui/core/Grid"
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup"

import { QuizSessionContext } from "../context/QuizSessionContext"

function ChapterElement(props) {
  const { getResourceText } = useContext(LanguageContext)

  const { setCurrentQuizSettings, getCurrentSettings } = useContext(
    QuizSessionContext
  )

  const handleChapterChange = chp => {
    const source = require("../data/articles/allchapters.json")

    const settings = {
      words: source[chp],
      chapter: chp,
    }

    setCurrentQuizSettings(settings)
    handleNavigation(chp)
  }

  const handleNavigation = chp => {
    if (getCurrentSettings().chapter !== null) {
      navigate(props.goto, { state: { chapter: chp } })
    }
  }

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {getResourceText(props.titleKey)}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {getResourceText(props.sublineKey)}
        </Typography>
        <Grid item>
          <ToggleButtonGroup
            style={{ display: "block" }}
            exclusive
            size="large"
          >
            {[0, 1, 2, 3, 4, 5, 6].map((chp, index) => (
              <ToggleButton
                onClick={() => handleChapterChange(chp)}
                style={{ width: "100%" }}
                key={index}
                value={chp}
              >
                {`${getResourceText("Chapter")} ${chp + 1}`}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ChapterElement
