import React from "react"
import HomeElement from "../components/general/homeElements"

import Layout from "../components/general/layout"

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
