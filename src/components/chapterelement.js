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

function ChapterElement(props) {
  const { getResourceText } = useContext(LanguageContext)

  const [chapter, setChapter] = React.useState(null)

  const handleChange = (event, newChapter) => {
    setChapter(newChapter)
  }

  const handleNavigation = () => {
    if (chapter !== null) navigate(props.goto, { state: { chapter: chapter } })
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
            value={chapter}
            exclusive
            size="large"
            onChange={handleChange}
          >
            {[0, 1, 2, 3, 4, 5, 6].map((chp, index) => (
              <ToggleButton style={{ width: "100%" }} key={index} value={chp}>
                {`${getResourceText("Chapter")} ${chp + 1}`}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleNavigation()} color="primary">
          {getResourceText("Start")}
        </Button>
      </CardActions>
    </Card>
  )
}

export default ChapterElement
