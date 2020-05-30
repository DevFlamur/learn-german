import React, { useContext, useState } from "react"
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
import { LanguageContext } from "../context/LanguageContext"
import fire from "../config/fire"
import CircularProgress from "@material-ui/core/CircularProgress"

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: `#2083c5`,
    color: "white",
  },
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}))

export default function SignUp(props) {
  const classes = useStyles()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const [errorText, setErrorText] = useState("")

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

  const signUp = () => {
    setIsLoading(true)
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(u => {
        setTimeout(() => {
          props.switchView(true)
          setIsLoading(false)
        }, 5000)
      })
      .catch(error => {
        setIsLoading(false)
        console.log(error)

        var errorCode = error.code
        var errorMessage = error.message
        if (errorCode == "auth/weak-password") {
          setErrorText(getResourceText("WeakPasswordMessage"))
        } else if (errorCode == "auth/email-already-in-use") {
          setErrorText(getResourceText("EmailAlreadyInUseMessage"))
        } else if (errorCode == "auth/invalid-email") {
          setErrorText(getResourceText("InvalidEmailMessage"))
        } else if (errorCode == "auth/operation-not-allowed") {
          setErrorText(getResourceText("OperationNotAllowedMessage"))
        }
      })
  }

  const { getResourceText } = useContext(LanguageContext)

  return isLoading ? (
    <Container component="main" maxWidth="xs">
      <CircularProgress />
    </Container>
  ) : (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <SchoolIcon size="large" />
        </Avatar>
        <Typography component="h1" variant="h5">
          {getResourceText("SignUp")}
        </Typography>
        <form className={classes.form} autoComplete="off" noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                onChange={e => handleEmailChange(e)}
                required
                fullWidth
                id="email"
                label={getResourceText("EmailAddress")}
                name="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                onChange={e => handlePasswordChange(e)}
                required
                fullWidth
                name="password"
                label={getResourceText("Password")}
                type="password"
                id="password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={() => {
              signUp()
            }}
            className={classes.submit}
          >
            {getResourceText("SignUp")}
          </Button>
          {errorText !== "" ? (
            <p style={{ color: "red" }}>{errorText}</p>
          ) : (
            <></>
          )}
          <Grid container justify="flex-end">
            <Grid item>
              <Link
                href="#"
                onClick={() => {
                  props.switchView(true)
                }}
                variant="body2"
              >
                {getResourceText("SignIn")}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}
