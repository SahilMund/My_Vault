import React from "react";
import { Link,useHistory } from "react-router-dom";
import "./home.css";
import { useAuth } from "./../authenticate/contexts/AuthContext";

import imageHome from "./image-home/back1.jpg";

import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";

const Home = () => {
  const { logout } = useAuth();
  const history = useHistory();

  const handleSignOut = () => {
    logout()
      .then((user) => {
        alert("Logout Succesful");
        history.push("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="wrapper">
        <img src={imageHome} alt="" />
        <div className="title">
          <h1>
            Welcome,<b>Sahil mund</b>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta,
            totam!
          </p>

       <div className="parent__icons">
       <Tooltip className="icons__home" title="LogOut" onClick={handleSignOut}>
            <IconButton>
              <ExitToAppOutlinedIcon />
            </IconButton>
          </Tooltip>

          <Tooltip className="icons__home" title="Update-Profile">
            <Link to="/update-profile">
              <IconButton>
                <PermIdentityOutlinedIcon />
              </IconButton>
            </Link>
          </Tooltip>
       </div>
        </div>

        <div className="main">
          <div className="boxes">
            <div className="top">
              <span className="material-icons icns">collections</span>
            </div>
            <Link to="/gallery">
              <div className="bottom">
                <h3>Gallery</h3>
                <span className="material-icons">arrow_forward</span>
              </div>
            </Link>
          </div>

          <div className="boxes">
            <div className="top">
              <span className="material-icons icns">library_books</span>
            </div>
            <Link to="/notes">
              <div className="bottom">
                <h3>Notes</h3>
                <span className="material-icons">arrow_forward</span>
              </div>
            </Link>
          </div>
          <div className="boxes">
            <div className="top">
              <span className="material-icons icns">event_note</span>
            </div>
            <Link to="/hangman">
              {" "}
              <div className="bottom">
                <h3>Games</h3>
                <span className="material-icons">arrow_forward</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
