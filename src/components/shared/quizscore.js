import React, { useContext } from "react"
import { LanguageContext } from "../../context/LanguageContext"
import { makeStyles } from "@material-ui/core/styles"
import Chip from "@material-ui/core/Chip"
import FaceIcon from "@material-ui/icons/Face"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}))

function QuizScore(props) {
  const classes = useStyles()

  const { getResourceText } = useContext(LanguageContext)

  return (
    <div className={classes.root}>
      <Chip
        variant="outlined"
        size="medium"
        icon={<FaceIcon />}
        label={`${getResourceText("Correct")}  ${props.correctPoints}`}
        clickable
        color="primary"
      />
      <Chip
        variant="outlined"
        size="medium"
        icon={<FaceIcon />}
        label={`${getResourceText("Wrong")}  ${props.wrongPoints}`}
        color="secondary"
      />
    </div>
  )
}

export default QuizScore
