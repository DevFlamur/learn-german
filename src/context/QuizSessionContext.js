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
const intialState = {}

// Create Context
export const QuizSessionContext = createContext(intialState)

// Provider
export const QuizSessionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, intialState)

  function switchLanguage(lng) {
    dispatch({
      type: "APPLICATION_SWITCH_LANGUAGE",
      payload: lng,
    })
  }

  function dateToTime() {
    var date = new Date()
    var h = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()
    return (
      (h <= 9 ? "0" + h : h) +
      ":" +
      (m <= 9 ? "0" + m : m) +
      ":" +
      (s <= 9 ? "0" + s : s)
    )
  }

  function dateToDMY() {
    var date = new Date()
    var d = date.getDate()
    var m = date.getMonth() + 1
    var y = date.getFullYear()
    return `${d <= 9 ? "0" + d : d}.${m <= 9 ? "0" + m : m}.${y}`
  }

  return (
    <QuizSessionContext.Provider
      value={{
        switchLanguage,
        getResourceText,
        getAuthentication,
        getCurrentLanguage,
      }}
    >
      {children}
    </QuizSessionContext.Provider>
  )
}
