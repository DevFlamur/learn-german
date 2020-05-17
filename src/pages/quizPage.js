import React from "react"
import ArticlesQuiz from "../components/articlesQuiz"
import Layout from "../components/layout"

function QuizPage({ location }) {
  let chapter = 0
  if (typeof location.state !== "undefined" && location.state) {
    chapter = location.state.chapter
  }

  if (typeof location.state !== "undefined" && location.state) {
    return (
      <Layout>
        <ArticlesQuiz chapter={chapter} />
      </Layout>
    )
  } else {
    return (
      <>
        <p>Gehe zurück oder starte die App neu!</p>
      </>
    )
  }
}

export default QuizPage
