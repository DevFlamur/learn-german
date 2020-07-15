import React, { useContext, useState } from "react"
import { Link } from "gatsby"
import { withStyles, makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import { LanguageContext } from "../context/LanguageContext"
import DescriptionIcon from "@material-ui/icons/Description"

import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Button from "@material-ui/core/Button"
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline"
import Grid from "@material-ui/core/Grid"
import HomeIcon from "@material-ui/icons/Home"
import { navigate } from "gatsby"
import { QuizSessionContext } from "../context/QuizSessionContext"

import ButtonGroup from "@material-ui/core/ButtonGroup"

function ResultList() {
  const { getResourceText } = useContext(LanguageContext)
  const {
    getQuizSessionFromStorage,
    deleteQuizSessionFromStorage,
  } = useContext(QuizSessionContext)

  const [quizSession, setQuizSession] = useState(getQuizSessionFromStorage())

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const deleteResultList = () => {
    // Save it!
    var sessionList = [...quizSession]
    sessionList.length = 0
    setQuizSession(sessionList)

    deleteQuizSessionFromStorage(sessionList)

    handleClose()
  }

  const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: "#2083c5",
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell)

  const StyledTableRow = withStyles(theme => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow)

  const useStyles = makeStyles({
    table: {
      minWidth: 240,
    },
  })

  const classes = useStyles()

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {getResourceText("DeleteDialogTitle")}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {getResourceText("DeleteDialogQuestion")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {getResourceText("No")}
          </Button>
          <Button onClick={deleteResultList} color="primary">
            {getResourceText("Yes")}
          </Button>
        </DialogActions>
      </Dialog>

      <TableContainer component={Paper}>
        <Grid align="center">
          <br />
          <h1>{getResourceText("Results")}</h1>
        </Grid>
        <Grid>
          <Grid align="right">
            <ButtonGroup
              size="small"
              color="primary"
              aria-label="small outlined primary button group"
            >
              <Button>
                {" "}
                <HomeIcon fontSize="large" onClick={() => navigate("/home")} />
              </Button>
              <Button> </Button>
              <Button>
                {" "}
                <DeleteOutlineIcon fontSize="large" onClick={handleClickOpen} />
              </Button>
            </ButtonGroup>
          </Grid>
          <br />
        </Grid>

        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">
                {getResourceText("ResultList_Date_Column")}
              </StyledTableCell>
              <StyledTableCell align="center">
                {getResourceText("ResultList_Correct_Column")}
              </StyledTableCell>
              <StyledTableCell align="center">
                {getResourceText("ResultList_Incorrect_Column")}
              </StyledTableCell>
              <StyledTableCell align="left">#</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {quizSession.map((nd, index) => (
              <StyledTableRow key={nd.sessionId}>
                <StyledTableCell align="center" component="th" scope="row">
                  {nd.startTime}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {nd.correctPoints}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {nd.wrongPoints}
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Link
                    to="/detailedResult"
                    state={{ quizSessionId: nd.sessionId, qzIndex: index }}
                  >
                    <DescriptionIcon />
                  </Link>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default ResultList
