import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CompletedImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderCompletedImage: file(
        relativePath: { eq: "completed_image.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderCompletedImage.childImageSharp.fluid} />
}

export default CompletedImage
