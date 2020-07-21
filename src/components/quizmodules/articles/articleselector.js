import React, { useContext } from "react"
import { LanguageContext } from "../../../context/LanguageContext"
import Grid from "@material-ui/core/Grid"
import ToggleButton from "@material-ui/lab/ToggleButton"
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup"

function ArticleSelector(props) {
  const { getResourceText } = useContext(LanguageContext)

  const handleValueChange = (event, articleVal) => {
    props.setAnswer({ articleId: articleVal, indexValue: props.index })
  }

  return (
    <>
      <Grid item>
        <ToggleButtonGroup
          value={props.articleId}
          onChange={handleValueChange}
          exclusive
          size="large"
        >
          <ToggleButton key={1} value={1}>
            {getResourceText("Der")}
          </ToggleButton>
          <ToggleButton key={2} value={2}>
            {getResourceText("Die")}
          </ToggleButton>
          <ToggleButton key={3} value={3}>
            {getResourceText("Das")}
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </>
  )
}

export default ArticleSelector
