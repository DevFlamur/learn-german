import React, { createContext, useReducer, useEffect } from "react"
import AppReducer from "./AppReducer"
import textResources from "../data/textresources.json"
import { navigate } from "gatsby"

var defaultLanguage = "de"
var auth = {
  isAuthenticated: false,
  userName: null,
}
if (typeof window !== "undefined" && window.localStorage) {
  defaultLanguage = localStorage.getItem("lng")
  if (defaultLanguage === undefined || defaultLanguage === null) {
    defaultLanguage = "de"
    localStorage.setItem("lng", "de")
  }

  auth = localStorage.getItem("authInfo")
  if (auth === undefined || auth === null) {
    auth = {
      isAuthenticated: false,
      userName: null,
    }
    localStorage.setItem("authInfo", JSON.stringify(auth))
  }
}

// initial State
const intialState = {
  language: defaultLanguage,
  authentication: auth,
}

// Create Context
export const LanguageContext = createContext(intialState)

// Provider
export const LanguageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, intialState)

  useEffect(() => {
    dispatch({
      type: "APPLICATION_SYNC_AUTH",
    })
    if (state.authentication.isAuthenticated === false) {
      navigate("/")
    }
  }, [state.authentication.isAuthenticated])

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

  function setLogIn(userName) {
    dispatch({
      type: "APPLICATION_SIGN_IN",
      payload: userName,
    })
  }
  function signOut() {
    dispatch({
      type: "APPLICATION_SIGN_OUT",
    })
  }

  return (
    <LanguageContext.Provider
      value={{
        switchLanguage,
        getResourceText,
        getAuthentication,
        getCurrentLanguage,
        setLogIn,
        signOut,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
