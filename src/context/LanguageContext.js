import React, { createContext, useReducer } from "react"
import AppReducer from "./AppReducer"
import textResources from "../data/textresources.json"

var defaultLanguage = "de"
var isAuthenticated = false
if (typeof window !== "undefined" && window.localStorage) {
  defaultLanguage = localStorage.getItem("lng")
  if (defaultLanguage === undefined || defaultLanguage === null) {
    defaultLanguage = "de"
    localStorage.setItem("lng", "de")
  }

  isAuthenticated = localStorage.getItem("isAuthenticated")
  if (isAuthenticated === undefined || isAuthenticated === null) {
    isAuthenticated = false
    localStorage.setItem("isAuthenticated", false)
  }
}

// initial State
const intialState = {
  language: defaultLanguage,
  authentication: {
    isAuthenticated: isAuthenticated,
    email: "",
  },
}

// Create Context
export const LanguageContext = createContext(intialState)

// Provider
export const LanguageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, intialState)

  function switchLanguage(lng) {
    dispatch({
      type: "APPLICATION_SWITCH_LANGUAGE",
      payload: lng,
    })
  }

  function getResourceText(key) {
    if (textResources === undefined) return "Not Found"

    if (textResources[key] === undefined) return `${key} not found!`

    if (textResources[key][state.language] === undefined)
      return `${key} for Language ${state.language} not Found!`

    return textResources[key][state.language]
  }

  function getAuthentication() {
    return state.authentication
  }

  function getCurrentLanguage() {
    return state.language
  }

  return (
    <LanguageContext.Provider
      value={{
        switchLanguage,
        getResourceText,
        getAuthentication,
        getCurrentLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
