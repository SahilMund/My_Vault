import React ,{useState} from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness2Icon from '@material-ui/icons/Brightness2';

const Title = ({darkmode,setDarkmode}) => {
  const history = useHistory();
 
  const handleBack = ()=>{
    history.push('/home')
  }

  const changeMode = () =>{
    if(darkmode == true){
      setDarkmode(false)
    }else{
      setDarkmode(true)
    }
    
  }
  return (
    <div className="title">
      <h1>GalleryVault</h1>
      <div className="parent__icon__dark">
      <span className="icon__dark" onClick={changeMode}>
     { darkmode ? <Brightness4Icon/> :<Brightness2Icon /> }
      </span>
      <span className="icon__dark" onClick={handleBack}><ArrowBackIcon/></span>
      </div>
      <h2>Your Memories</h2>
      <p>Things end but memories last forever So make them and keep it safe here.</p>
    </div>
  )
}

export default Title;