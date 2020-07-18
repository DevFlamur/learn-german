import React, { useContext } from "react"
import Paper from "@material-ui/core/Paper"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import { withStyles, makeStyles } from "@material-ui/core/styles"
import { LanguageContext } from "../context/LanguageContext"
import { QuizSessionContext } from "../context/QuizSessionContext"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import InputLabel from "@material-ui/core/InputLabel"

const Wordslist = () => {
  const { getResourceText } = useContext(LanguageContext)
  const { getWordListSource } = useContext(QuizSessionContext)

  const [lng, setLanguage] = React.useState("sq")
  const useStyles = makeStyles({
    table: {
      minWidth: 240,
    },
  })
  const classes = useStyles()

  const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: "#2083c5",
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell)

  function getArticleText(articleId) {
    return articleId === 1
      ? "Der"
      : articleId === 2
      ? "Die"
      : articleId === 3
      ? "Das"
      : ""
  }

  const StyledTableRow = withStyles(theme => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow)

  const handleChange = event => {
    setLanguage(event.target.value)
  }
  console.log(getWordListSource())

  return (
    <>
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
        <MenuItem value="en">{getResourceText("English")}</MenuItem>
        <MenuItem value="sq">{getResourceText("Albanian")}</MenuItem>
      </Select>
      <br />
      <br />
      <br />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">
                {getResourceText("ResultList_Correct_Column")}
              </StyledTableCell>
              <StyledTableCell align="center">
                {getResourceText("WordList_Word_Column")}
              </StyledTableCell>
              <StyledTableCell align="center">
                {getResourceText("WordList_Translation_Column")}
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getWordListSource().map((nd, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell align="center" component="th" scope="row">
                  {getArticleText(nd.correct) === ""
                    ? nd.correct
                    : getArticleText(nd.correct)}
                </StyledTableCell>
                <StyledTableCell align="center" component="th" scope="row">
                  {nd.word}
                </StyledTableCell>
                <StyledTableCell align="center" component="th" scope="row">
                  {nd.translation !== undefined ? nd.translation[lng] : "N/A"}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Wordslist
