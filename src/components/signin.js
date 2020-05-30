import React, { useContext, useState, useEffect } from "react"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import Link from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid"
import SchoolIcon from "@material-ui/icons/School"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import fire from "../config/fire"
import { navigate } from "gatsby"
import { LanguageContext } from "../context/LanguageContext"

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: `#2083c5`,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: `#2083c5`,
    color: "white",
  },
}))

export default function SignIn(props) {
  const classes = useStyles()
  const { setLogIn, getResourceText } = useContext(LanguageContext)

  useEffect(() => {
    props.switchView(true)
  }, [])

  const [errorText, setErrorText] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmailChange = e => {
    e.preventDefault()
    setEmail(e.target.value)
    setErrorText("")
  }

  const handlePasswordChange = e => {
    e.preventDefault()
    setPassword(e.target.value)
    setErrorText("")
  }

  const login = e => {
    e.preventDefault()
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(u => {
        setLogIn(email)
        navigate("/home/")
      })
      .catch(error => {
        console.log(error)
        var errorCode = error.code
        var errorMessage = error.message
        if (errorCode == "auth/invalid-email") {
          setErrorText(getResourceText("EmailNotFoundMessage"))
        } else if (errorCode == "auth/user-disabled") {
          setErrorText(getResourceText("UserDisabledMessage"))
        } else if (errorCode == "auth/user-not-found") {
          setErrorText(getResourceText("UserNotFoundMessae"))
        } else if (errorCode == "auth/wrong-password") {
          setErrorText(getResourceText("WrongPasswordMessage"))
        }
      })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <SchoolIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {getResourceText("SignIn")}
        </Typography>
        <form className={classes.form} autoComplete="off" noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            onChange={e => handleEmailChange(e)}
            required
            fullWidth
            id="email"
            label={getResourceText("EmailAddress")}
            name="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            onChange={e => handlePasswordChange(e)}
            required
            fullWidth
            name="password"
            label={getResourceText("Password")}
            type="password"
            id="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={e => login(e)}
            className={classes.submit}
          >
            {getResourceText("SignIn")}
          </Button>
          {errorText !== "" ? (
            <p style={{ color: "red" }}>{errorText}</p>
          ) : (
            <></>
          )}

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                {getResourceText("ForgotPassword")}
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="#"
                onClick={() => props.switchView(false)}
                variant="body2"
              >
                {getResourceText("SignUp")}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}
