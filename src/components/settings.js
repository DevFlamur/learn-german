import React, { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import InputLabel from "@material-ui/core/InputLabel"
import { Divider } from "@material-ui/core"

import Backdrop from "@material-ui/core/Backdrop"
import CircularProgress from "@material-ui/core/CircularProgress"
import { makeStyles } from "@material-ui/core/styles"

function Settings(props) {
  const useStyles = makeStyles(theme => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  }))

  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const { getCurrentLanguage, switchLanguage, getResourceText } = useContext(
    LanguageContext
  )
  const [lng, setAge] = React.useState(getCurrentLanguage())

  const handleChange = event => {
    setOpen(true)
    switchLanguage(event.target.value)
    setAge(event.target.value)
    window.location.reload()
  }
  return (
    <>
      <label>{getResourceText("Settings")}</label>

      <Divider />
      <br />
      <InputLabel id="demo-simple-select-label">
        {getResourceText("Language")}
      </InputLabel>
      <Select
        style={{ width: "100%" }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={lng}
        onChange={handleChange}
      >
        <MenuItem value="de">{getResourceText("German")}</MenuItem>
        <MenuItem value="en">{getResourceText("English")}</MenuItem>
        <MenuItem value="sq">{getResourceText("Albanian")}</MenuItem>
      </Select>

      <Divider />
      <br />
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}

export default Settings
