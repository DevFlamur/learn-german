import React, { useState } from "react"
import SignIn from "../components/general/signin"
import SignUp from "../components/general/signup"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import clsx from "clsx"

import { LanguageProvider } from "../context/LanguageContext"
import { BaseQuizSessionProvider } from "../context/BaseQuizSessionProvider"

import { ThemeProvider } from "@material-ui/core/styles"

import theme from "../theme"

import { makeStyles } from "@material-ui/core/styles"

const drawerWidth = 240
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#2083c5",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}))

function IndexPage() {
  const [isSignIn, setIsSignIn] = useState(true)

  const classes = useStyles()
  const changeView = toSignIn => {
    setIsSignIn(toSignIn)
  }
  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const db = firebase.firestore()
  //     const fromDb = await db.collection("data").get()
  //     console.log(fromDb.docs.map(doc => ({ ...doc.data(), id: doc.id })))
  //     setDbData(fromDb.docs.map(doc => ({ ...doc.data(), id: doc.id })))
  //   }
  //   fetchData()
  // }, [])

  return (
    <>
      <link rel="manifest" href="/manifest.webmanifest"></link>
      <ThemeProvider theme={theme}>
        <LanguageProvider>
          <BaseQuizSessionProvider>
            <AppBar position="fixed" className={clsx(classes.appBar)}>
              <Toolbar>
                <Typography variant="h6" noWrap>
                  Deutsch Lernen
                </Typography>
              </Toolbar>
            </AppBar>

            {isSignIn ? (
              <SignIn switchView={changeView} />
            ) : (
              <SignUp switchView={changeView} />
            )}
          </BaseQuizSessionProvider>
        </LanguageProvider>
      </ThemeProvider>
    </>
  )
}

export default IndexPage
