import React, { useContext } from "react"
import { LanguageContext } from "../../context/LanguageContext"
import TextField from "@material-ui/core/TextField"
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline"
import Grid from "@material-ui/core/Grid"

function WordInput(props) {
  const { getResourceText } = useContext(LanguageContext)
  // const speech = new Speech()
  // speech
  //   .init({
  //     volume: 1,
  //     lang: "de-DE",
  //     rate: 1,
  //     pitch: 0.9,
  //     voice: "Google Deutsch",
  //     //splitSentences: false,
  //     listeners: {},
  //   })
  //   .then(data => {})
  //   .catch(e => {
  //     console.error("An error occured while initializing : ", e)
  //   })

  const handleClick = () => {
    // speech
    //   .speak({
    //     text: props.wordInputControl.textToRead,
    //   })
    //   .then(() => {})
    //   .catch(e => {})
  }

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={11} style={{ height: "40px", textAlign: "center" }}>
          <TextField
            label={getResourceText("WordInput")}
            {...props.wordInputControl.model}
          />
          {props.wordInputControl.view}
        </Grid>
        <Grid item xs={1} style={{ height: "40px", textAlign: "center" }}>
          <PlayCircleOutlineIcon
            style={{ height: "40px", width: "35px" }}
            onClick={() => handleClick()}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default WordInput
