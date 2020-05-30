import React from "react"

import { makeStyles } from "@material-ui/core/styles"

import clsx from "clsx"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import HomeElement from "../components/homeElements"
import Typography from "@material-ui/core/Typography"

import Layout from "../components/layout"

function Home() {
  return (
    <Layout>
      {[
        {
          gotopage: "/quizPage/",
          titleKey: "DerDieDasTitle",
          sublineKey: "DerDieDasSubline",
        },
        {
          gotopage: "/plural/",
          titleKey: "PluralTitle",
          sublineKey: "PluralSubline",
        },
        {
          gotopage: "/opposites/",
          titleKey: "OppositeTitle",
          sublineKey: "OppositeSubline",
        },
        {
          gotopage: "/quizPage/",
          titleKey: "NumbersTitle",
          sublineKey: "NumbersSubline",
        },
      ].map((item, index) => (
        <div key={index}>
          <HomeElement
            gotopage={item.gotopage}
            titleKey={item.titleKey}
            sublineKey={item.sublineKey}
          />
          <br />
        </div>
      ))}
    </Layout>
  )
}

export default Home
