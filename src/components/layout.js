import React from "react"
import PropTypes from "prop-types"
import { LanguageProvider } from "../context/LanguageContext"
import { QuizSessionProvider } from "../context/QuizSessionContext"
import "./layout.css"
import MenuItems from "../components/MenuItems"

const Layout = ({ children }) => {
  return (
    <>
      <LanguageProvider>
        <QuizSessionProvider>
          <MenuItems children={children} />
        </QuizSessionProvider>
      </LanguageProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
