import React, { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"
import CompletedImage from "../components/completedImage"
import { Link } from "gatsby"

function Congratulation(props) {
  const { getResourceText } = useContext(LanguageContext)

  return (
    <>
      <h1>{getResourceText("CongratulationText")}</h1>
      <div style={{ maxWidth: `200px`, margin: `0 auto` }}>
        <CompletedImage />
      </div>

      <Link to="/results/">
        <input
          className="LinkButton"
          type="button"
          value={getResourceText("Results")}
        />
      </Link>

      <Link to="/home/">
        <input
          className="LinkButton"
          type="button"
          value={getResourceText("Home")}
        />
      </Link>
    </>
  )
}

export default Congratulation
