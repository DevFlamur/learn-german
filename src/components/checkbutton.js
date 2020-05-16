import React, {useContext} from 'react';
import { LanguageContext} from '../context/LanguageContext'
import { Link } from "gatsby"

function CheckButton(props) { 
  const {getResourceText} = useContext(LanguageContext);
    return (
      <>
      <input className="LinkButton" type="button" value={getResourceText("Next")} onClick={e => props.checkQuestion( props.answer, props.answerCorrect)} />
      <Link to="/home/"><input className="LinkButton" type="button" value={getResourceText("Home")} /></Link> 
     </>
    )
  }

  export default CheckButton;