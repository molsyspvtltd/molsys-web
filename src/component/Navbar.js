import React from "react";
import { IconButton, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import BookData from "./Data.json";
import logo from "../assets/logo.png";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: "#e6e6e6",
    },
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `2px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1),
  },
  activeLink: {
    margin: theme.spacing(1, 1.5),
    backgroundColor: "#46c780",
    color: "#ffffff",
    "&:hover": {
      color: "#252626",
      backgroundColor: "#ffffff",
      border: "1px solid #252626",
    },
  },
}));

function Navbar() {
    const classes = useStyles();
  
    const renderNavigationItems = () => {
      return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-light bg-light" style={{ marginLeft: "-50px" }}>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/aboutUs">
              About Us
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" aria-current="page" to="/market">
              Services
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/contactUs">
              Contact Us
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="#">
              MolsysT
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/pms">
              PMS
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/g-cell">
              G-Cell
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/WorkshopRegistration">
              Workshops
            </Link>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="https://dnalyst.in" target="_blank" rel="noopener noreferrer">
              Dnalyst
            </a>
         </li>
        </ul>
      );
    };
  
    return (
      <div>
        <nav className="navbar shadow navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand mx-5" to="/">
              <img src={logo} height={35} width={130} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse mx-5 px-5" id="navbarSupportedContent">
              {renderNavigationItems()}
              <div className="me-auto">
              <SearchBar placeholder="Enter your Search..." data={BookData} />
            </div>
              
            </div>
          </div>
        </nav>
      </div>
    );
  }
  

export default Navbar;
