import React from "react"
// import { navigate } from "gatsby"
// import firebase from "firebase"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Login from "../components/login"

function IndexPage() {
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  // const handleEmailChange = e => {
  //   e.preventDefault()
  //   setEmail(e.target.value)
  // }

  // const handlePasswordChange = e => {
  //   e.preventDefault()
  //   setPassword(e.target.value)
  // }

  // const login = () => {
  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then(u => {
  //       navigate("/home/")
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  // const signUp = () => {
  //   firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(u => {
  //       navigate("/home/")
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  return (
    <Layout>
      <SEO title="Hauptseite" />
      <div style={{ maxWidth: `200px`, margin: `0 auto` }}>
        <Image />
      </div>

      <div style={{ maxWidth: `200px`, margin: `0 auto` }}>
        <br />
        <br />
        <Login />
        <br />
        <br />
      </div>
    </Layout>
  )
}

export default IndexPage
