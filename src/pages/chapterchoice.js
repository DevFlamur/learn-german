import React from "react"

import Layout from "../components/layout"
import ChapterElement from "../components/chapterelement"
import { globalHistory } from "@reach/router"
import { navigate } from "gatsby"

function Chapters({ location }) {
  let goto = "/quiz/"
  let titleKey = ""
  let sublineKey = ""
  if (typeof location.state !== "undefined" && location.state) {
    goto = globalHistory.location.state.goto
    titleKey = globalHistory.location.state.titleKey
    sublineKey = globalHistory.location.state.sublineKey
  }

  if (titleKey === "") {
    navigate("/home")
  }

  return (
    <Layout>
      <ChapterElement goto={goto} titleKey={titleKey} sublineKey={sublineKey} />
    </Layout>
  )
}

export default Chapters
