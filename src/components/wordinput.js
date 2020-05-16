import React, {useContext} from 'react';
import { LanguageContext} from '../context/LanguageContext'
import TextField from '@material-ui/core/TextField';



function WordInput(props) { 


    const { getResourceText} = useContext(LanguageContext);

    const handleChange = (e) => {
        e.preventDefault();
        props.setAnswerText(e.target.value);
    }

    return (
        <>
        <TextField  label={getResourceText("WordInput")}  value={props.value}  onChange={(e) => handleChange(e)} />
        </> 
    )
  }

  export default WordInput;