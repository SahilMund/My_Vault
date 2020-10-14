import React from 'react'
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import { useHistory } from 'react-router-dom';
// rafce
const Header = () => {
  const history = useHistory();
  const handleReturn = ()=>{
    history.push('/home')
  }
  return (
    <>
      <h1>Hangman</h1>
      <span onClick={handleReturn}  className="btn__return" style={{cursor:"pointer"}}><ArrowBackIosOutlinedIcon/></span>
      
      <p>Find the hidden word - Enter a letter</p>
    </>
  )
}

export default Header
