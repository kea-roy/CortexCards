import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../logo.png';

const Header = ({ user, setUser }) => {
  const auth = getAuth();
  const navigate = useNavigate();
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {user && <button className={"signOutButton"} onClick={() => {
        signOut(auth)
            .then(() => {
            console.log("User signed out");
            setUser(null);
            navigate("/");
            })
            .catch((error) => {
            console.log(error);
            });
        }}>Sign Out</button>}
    </header>
  );
}
export default Header;