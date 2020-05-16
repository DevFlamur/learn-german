import React, { useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { LanguageContext} from '../context/LanguageContext'



const Header = ({ siteTitle }) => {

  const {switchLanguage} = useContext(LanguageContext);
  
  const {getResourceText} = useContext(LanguageContext);
  
  return (
    <>
  <header
    style={{
      background: `#2083c5`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link 
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
          to="/"
        >
          {siteTitle}
        </Link>
      </h3> 
    </div>
    <ButtonGroup color="default" aria-label="outlined primary button group">
        <Button onClick={() => switchLanguage("de")} >{getResourceText("German")}</Button>
        <Button onClick={() => switchLanguage("en")}>{getResourceText("English")}</Button>
        <Button onClick={() => switchLanguage("sq")}>{getResourceText("Albanian")}</Button>
    </ButtonGroup>
  </header>
  </>
  )
        }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
