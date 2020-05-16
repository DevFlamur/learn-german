import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

function Home() {
  return (
    <Layout>
      <SEO title="Hauptseite" />
      <div style={{ maxWidth: `200px`, margin: `0 auto` }}>
        <Image />
      </div>
    </Layout>
  )
}

export default Home
