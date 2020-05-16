import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

function DetailedResult({ location }) {
  var store = undefined

  if (typeof window !== "undefined" && window.localStorage)
    store = JSON.parse(localStorage.getItem("jsonObject"))

  var storedData = []
  if (store !== undefined && store !== null) storedData = store

  const [quizSession] = useState(storedData)
  console.log(quizSession)
  if (typeof location.state !== "undefined" && location.state) {
    return (
      <Layout>
        <SEO title="Detailierte Ergebnisse" />
        <h1>Detailierte Ergebnisse</h1>
        <br />
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Richtig</th>
              <th>Deine Antwort</th>
            </tr>
          </thead>
          <tbody>
            {quizSession[location.state.qzIndex].answeredQuestion.map(
              (nd, index) => (
                <tr
                  style={{ color: nd.isCorrect ? "green" : "red" }}
                  key={nd.questionIndex}
                >
                  <td>{index + 1}</td>
                  <td>{nd.correct}</td>
                  <td>{nd.answered}</td>
                </tr>
              )
            )}
            <tr style={{ fontWeight: "bold" }}>
              <td>Ergebniss</td>
              <td>
                Richtig {quizSession[location.state.qzIndex].correctPoints}{" "}
              </td>
              <td>Fehler {quizSession[location.state.qzIndex].wrongPoints} </td>
            </tr>
          </tbody>
        </table>

        <Link to="/results/">
          <input className="BackButton" type="button" value="Zurück" />
        </Link>
      </Layout>
    )
  } else {
    return <p>zur zeit gibt es keine Ergebnisse</p>
  }
}

export default DetailedResult
