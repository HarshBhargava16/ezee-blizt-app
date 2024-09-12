import React from "react";
import CatagorySelector from "./CatagorySelector";
import CartButton from "./CartButton";
import SearchBar from "./SearchBar";
import { useNavigate ,useLocation} from "react-router-dom";

function NavBar(props) {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const handleHomeNavigation = ()=>
  {
    nav("/")
  }
  console.log(props.title);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom fixed-top">
      <div className="container-fluid px-md-5">
        <span id="name" onClick={handleHomeNavigation} className="navbar-brand fw-bold pointer">
         {props.title}

        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >{pathname ==='/' &&(
        <>
          <CatagorySelector />
          <SearchBar />
          </>)}
          <CartButton/>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
