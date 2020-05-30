import React, { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"
import ToggleButton from "@material-ui/lab/ToggleButton"

import { navigate } from "gatsby"

import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import Grid from "@material-ui/core/Grid"
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup"

import { QuizSessionContext } from "../context/QuizSessionContext"

function HomeElement(props) {
  const { getResourceText } = useContext(LanguageContext)

  const handleNavigation = (to, goto, titleKey, sublineKey) => {
    navigate(to, { state: { goto, titleKey, sublineKey } })
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
        <Grid item></Grid>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() =>
            handleNavigation(
              "/chapterchoice/",
              props.gotopage,
              props.titleKey,
              props.sublineKey
            )
          }
          color="primary"
        >
          {getResourceText("Start")}
        </Button>
      </CardActions>
    </Card>
  )
}

export default HomeElement
