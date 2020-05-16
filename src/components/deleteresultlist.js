import React, {useContext} from 'react';
import { Link } from "gatsby" 
import { LanguageContext} from '../context/LanguageContext'


function DeleteButton(props) { 

  const {getResourceText} = useContext(LanguageContext);

    return (
    <><Link to="/home/"><input className="BackButton" type="button" value={getResourceText("Back")}  /></Link> 
    <input type="button" className="deleteButton" onClick={e => props.handleClickOpen()} value={getResourceText("DeleteResult")}  />
    
    </>)
  }

  export default DeleteButton;