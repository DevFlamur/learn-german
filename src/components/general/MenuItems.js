import React, { useContext } from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import "./layout.css"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import AssessmentIcon from "@material-ui/icons/Assessment"
import HomeIcon from "@material-ui/icons/Home"
import SchoolIcon from "@material-ui/icons/School"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import InfoIcon from "@material-ui/icons/Info"
import SettingsIcon from "@material-ui/icons/Settings"
import { LanguageContext } from "../../context/LanguageContext"

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

const MenuItems = ({ children }) => {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const { getAuthentication, getResourceText, signOut } = useContext(
    LanguageContext
  )

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleSignOut = () => {
    signOut()
    navigate("/")
  }
  const navigateTo = (to, goto, titleKey, sublineKey) => {
    setOpen(false)
    navigate(to, { state: { goto, titleKey, sublineKey } })
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <>
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Deutsch Lernen
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            {`${getResourceText("Hello")} ${getAuthentication().userName}`}
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button onClick={() => navigate("/home/")}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={getResourceText("Home")} />
            </ListItem>

            <Divider />
            {[
              {
                text: getResourceText("DerDieDasTitle"),
                gotopage: "/quizPage/",
                titleKey: "DerDieDasTitle",
                sublineKey: "DerDieDasSubline",
              },
              {
                text: getResourceText("PluralTitle"),
                gotopage: "/plural/",
                titleKey: "PluralTitle",
                sublineKey: "PluralSubline",
              },
              {
                text: getResourceText("OppositeTitle"),
                gotopage: "/opposites/",
                titleKey: "OppositeTitle",
                sublineKey: "OppositeSubline",
              },
              {
                text: getResourceText("NumbersTitle"),
                gotopage: "/quizPage/",
                titleKey: "NumbersTitle",
                sublineKey: "NumbersSubline",
              },
            ].map((item, index) => (
              <ListItem
                button
                onClick={() =>
                  navigateTo(
                    "/chapterchoice/",
                    item.gotopage,
                    item.titleKey,
                    item.sublineKey
                  )
                }
                key={item.text}
              >
                <ListItemIcon>
                  <SchoolIcon />
                </ListItemIcon>
                <label>{item.text}</label>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {[
              { text: getResourceText("Results"), gotopage: "/results/" },
              {
                text: getResourceText("Settings"),
                gotopage: "/settings/",
              },
            ].map((item, index) => (
              <ListItem
                button
                onClick={() => navigateTo(item.gotopage, item.gotopage)}
                key={item.text}
              >
                <ListItemIcon>
                  {index === 0 ? <AssessmentIcon /> : <SettingsIcon />}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem button key={getResourceText("AboutUs")}>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary={getResourceText("AboutUs")} />
            </ListItem>

            <ListItem
              onClick={() => handleSignOut()}
              button
              key={getResourceText("SignOut")}
            >
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary={getResourceText("SignOut")} />
            </ListItem>
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          {children}
        </main>
      </div>
    </>
  )
}

MenuItems.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MenuItems
