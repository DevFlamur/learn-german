import React from "react"
import PropTypes from "prop-types"
import { LanguageProvider } from "../../context/LanguageContext"
import { BaseQuizSessionProvider } from "../../context/BaseQuizSessionProvider"
import "./layout.css"
import MenuItems from "./MenuItems"

const Layout = ({ children }) => {
  return (
    <>
      <LanguageProvider>
        <BaseQuizSessionProvider>
          <MenuItems children={children} />
        </BaseQuizSessionProvider>
      </LanguageProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
